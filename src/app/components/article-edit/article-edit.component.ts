import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService],
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public isEdit: boolean
  public pageTitle: string
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
    this.isEdit = true
    this.pageTitle = "Editar Articulo"
  }

  ngOnInit(): void {
    this.getArticle()
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';

          Swal.fire(
            'Articulo editado',
            'El articulo se ha editado correctamente',
            'success'
          )

          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        Swal.fire(
          'Edicion fallida',
          'El articulo no se pudo editar',
          'error'
        )
      }
    );
  }

  imageUpload(data){
    let image_data = data.body
    this.article.image = image_data.image
  }

  getArticle(){
    this._route.params.subscribe(params => {
      let id = params['id']
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article
          }else{
            this._router.navigate(['/home'])
          }
        },
        error => {
          console.log(error)
          this._router.navigate(['/home'])
        }
      )
    })
  }

}
