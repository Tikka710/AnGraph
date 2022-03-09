import { User } from "./user"

export interface Comment {  
  id: number
  message: string
  createdAt: number
  user_id: number
  user: User
}

export interface ResponseComment {  
  comments: Array<Comment>
}

// export interface Comment{
  
//   comments: [
//     {
//       id: number,
//       message: string,
      
//       }
//     ]
// }