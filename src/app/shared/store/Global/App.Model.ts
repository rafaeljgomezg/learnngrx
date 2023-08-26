import { BlogModel, Blogs } from '../Blog/blog.model';
import { CounterModel } from '../counter.model';

/// ****  Tis way we combine the models in one constant to be used in the component constructor to inject the models   ***

export interface AppStateModel {
  counter: CounterModel;
  blog: Blogs;
}
