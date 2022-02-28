import {NextFunction, Request, Response} from 'express';
import express from "express";
import userController from "./controller/userController"

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userController)



// 生存確認用API
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});


// app.get("/users", async (req: Request, res: Response) => {
//   const users = await prisma.user.findMany();
//    res.json({ users });
// })

// app.get('/comments', async (req: Request, res: Response) => {
//   const comments = await prisma.comment.findMany();
//   res.json({ comments })
// })

export default app