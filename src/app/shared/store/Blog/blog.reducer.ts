import { createReducer, on } from "@ngrx/store"
import { BlogState } from "./blog.state"
import { addblog, deleteblog, loadBlog, updateblog } from "./blog.actions"
import { BlogModel } from "./blog.model"


const _blogReducer=createReducer(BlogState, 
    on(loadBlog, (state)=>{
        return {
            ...state
        }
    }),

    on(addblog, (state,action)=>{
        const _blog=({...action.blogInput})
        _blog.id=state.blogList.length+1
        return{
            ...state,
            blogList:[...state.blogList, _blog]
        }
    }),
   
    on(updateblog, (state,action)=>{
        const _blog=({...action.blogInput})
        const updatedBlog=state.blogList.map(blog=>{
            return _blog.id===blog.id?_blog:blog
        })
        return{
            ...state,
            blogList:updatedBlog
        }
    }),

    on(deleteblog, (state,action)=>{
        const updatedBlog=state.blogList.filter((data:BlogModel)=>{
            return data.id!==action.id
        })
        return{
            ...state,
            blogList:updatedBlog
        }
    })
)



export function blogReducer(state:any, action:any){
    return _blogReducer(state, action)
}