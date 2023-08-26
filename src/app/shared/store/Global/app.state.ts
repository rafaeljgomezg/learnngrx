import { blogReducer } from "../Blog/blog.reducer";
import { counterReducer } from "../counter.reducer";

//   ***   THIS WAY WE CAN COMBINE REDUCERS TO BE WRTTEN IN APP.MODULE FILE   ***

export const AppState={
    counter:counterReducer,
    blog:blogReducer
}