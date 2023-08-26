import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/Blog/blog.model';
import { getBlog } from 'src/app/shared/store/Blog/blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/App.Model';
import { AddblogComponent } from '../addblog/addblog.component';
import { deleteblog, loadBlog } from 'src/app/shared/store/Blog/blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 
  blogList!: BlogModel[];

 constructor(private store:Store<{blog:AppStateModel}>, private dialog:MatDialog){

 }
 
  ngOnInit(): void {
    this.store.select(getBlog).subscribe(item=>{
      this.blogList=item
      //console.log(this.blogList)
    })

  
  }
  addBlog(){
    this.openPopup(0, 'Add Blog')
  }

  openPopup(id:any, title:any, isEdit=false){
    this.dialog.open(AddblogComponent,{
      width:'40%',
      data:{
        id:id,
        title:title,
        isEdit:isEdit
      }
    })
  }

  editBlog(id: number){
    this.openPopup(id, 'Edit Blog',true)
  }

  removeBlog(id:any){
    if(confirm("Are you sure about it?")){
      this.store.dispatch(deleteblog({id:id}))
    }
  }
  
}

