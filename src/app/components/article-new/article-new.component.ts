import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService],
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;
  public pageTitle: string
  public isEdit: boolean
  public url: string

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: 50,
    uploadAPI: {
      url: Global.url+'upload-image/',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Seleccionar imagen...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit',
    },
  };

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.article = new Article('', '', '', null, null);
    this.url = Global.url
    this.pageTitle = "Crear Articulo"
    this.isEdit = false
  }

  ngOnInit(): void {}

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          Swal.fire(
            'Articulo creado',
            'El articulo se ha creado correctamente',
            'success'
          )

          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data){
    let image_data = data.body
    this.article.image = image_data.image
  }
}
