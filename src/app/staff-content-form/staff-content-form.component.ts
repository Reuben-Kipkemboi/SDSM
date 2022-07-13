import { AccountService } from './../_services/account.service';
import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-staff-content-form',
  templateUrl: './staff-content-form.component.html',
  styleUrls: ['./staff-content-form.component.css'],
})
export class StaffContentFormComponent implements OnInit {
  content_name!: string;
  content_image!: File;
  category!: string;
  description!: string;
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService,
    private account: AccountService,
    private post: PostsService,
    private router: Router
  ) {}

  categories: any = [];
  // errorMessages: any;
  // successMessage: any;
  error = false;
  loading = false;
  // userId: any;
  // content_image: any;
  PhotoFilePath: any;
  // content_name: any;
  // selectedFile: any;
  image_name!: string;

  ngOnInit(): void {
    this.getCategory();
  }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {
  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.postsService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {},
  //       (err) => {}
  //     );
  //   });

  //   reader.readAsDataURL(file);
  // }

  createPosts(form: NgForm) {
    let data = form.form.value;
    // console.log(event.target.files);
    // console.log(typeof data);
    data.content_image = this.image_name;
    console.log(data);
    this.post
      .createPosts(
        data.id,
        data.content_name,
        data.content_image,
        data.video,
        data.description,
        data.category
      )
      .subscribe((response) => {
        form.reset();
        this.router.navigate(['/staff-page']);
      });
  }

  uploadImage(event: any) {
    console.log(event)
    var file = event.target.files[0];
    this.image_name=file.name
//     this.ngform.get('content_image').setValue(file);
//     console.log(file);
//     const formData: FormData = new FormData();
//     console.log(formData);
//     // formData.append('uploadedFile', file, file.name);

// console.log(formData);
    // this.post.uploadPhoto(event).subscribe((data: any) => {
    //   console.log(data)
    //   this.content_image = data.tostring();
    //   this.PhotoFilePath = this.post.PhotoUrl + this.content_image;
    //   console.log(this.PhotoFilePath);
    // });
  }
  // uploadImage(event: any) {
  //   this.content_image = <File>event.target.files[0];
  //   console.log(event);
  // }

  // uploadImage(event: any) {
  //   console.log(event);
  //   var file = event.target.files[0];
  //   this.image_name = file.name;
    //     this.ngform.get('content_image').setValue(file);
    //     console.log(file);
    //     const formData: FormData = new FormData();
    //     console.log(formData);
    //     // formData.append('uploadedFile', file, file.name);

    // console.log(formData);
  //   this.post.uploadPhoto(event).subscribe((data: any) => {
  //     //   console.log(data)
  //     this.content_image = data.tostring();
  //     this.PhotoFilePath = this.post.PhotoUrl + this.content_image;
  //     console.log(this.PhotoFilePath);
  //   });
  // }

  onImageChanged(event: any) {
    this.content_image = event.target.file[0];
  }

  // onTitleChanged(event: any) {
  //   this.content_name = event.target.value;


  // onTitleChanged(event: any) {
  //   this.content_name = event.target.value;
  //   )

  //     .subscribe(
  //       (response) => {
  //         form.reset();
  //         this.router.navigate(['/staff-page']);
  //       })


  // }




  onDescriptionChanged(event:any){
    this.description = event.target.value;
  }

  // }



  
  // onDescriptionChanged(event:any){
  //   this.description = event.target.value;
  // }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  // newPost() {
  //   const uploadData = new FormData();
  //   uploadData.append('content_name', this.content_name);
  //   uploadData.append('content_image', this.content_image);
  //   uploadData.append('description', this.content_name);
  //   uploadData.append('category', this.category);
  //   this.http
  //     .post('https://moti-vate.herokuapp.com/staff/post/', uploadData)
  //     .subscribe
  //     // (data: any) => console.log(data),
  //     // (error: any) => console.log(error)
  //     ();
  }
