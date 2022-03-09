import { Comment } from "./comment"

export interface User{
        id: number,
        name: string,
        email: string
        comments: Comment[]
   
  }