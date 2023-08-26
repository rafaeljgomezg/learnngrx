import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addblog, updateblog } from 'src/app/shared/store/Blog/blog.actions';
import { BlogModel } from 'src/app/shared/store/Blog/blog.model';
import { getBlogById } from 'src/app/shared/store/Blog/blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/App.Model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css'],
})
export class AddblogComponent implements OnInit {

  pageTitle=''
  editBlogId=0
  editData!: BlogModel;

  constructor(
    private dialogref: MatDialogRef<AddblogComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data:any)
    
  {
  }
  ngOnInit(): void {
    this.pageTitle=this.data.title
    if(this.data.isEdit){
      this.editBlogId=this.data.id
      this.store.select(getBlogById(this.editBlogId)).subscribe(_data=>{
        this.editData=_data
        this.blogForm.setValue({id:this.editData.id, title:this.editData.title, description:this.editData.description})
      })
    }
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
  });

  saveBlogs() {
    //console.log(this.blogForm)
    
    if(this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string,
      };
      if(this.data.isEdit){
        _blogInput.id=this.blogForm.value.id as number
        this.store.dispatch(updateblog({ blogInput:_blogInput }));
      }else{
        this.store.dispatch(addblog({ blogInput:_blogInput }));
      }
      
      this.closePopup();
    }
  }

  closePopup() {
    this.dialogref.close();
  }

}
