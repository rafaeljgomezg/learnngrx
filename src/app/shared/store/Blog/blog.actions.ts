import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";



export const loadBlog = createAction('loadBlog')

export const addblog=createAction('addblog', props<{blogInput:BlogModel}>())

export const updateblog=createAction('updateblog', props<{blogInput:BlogModel}>())

export const deleteblog=createAction('deleteblog', props<{id:number}>())