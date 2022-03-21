import {NextFunction, Request, Response} from 'express';
import Express from "express";
import app from "./api/index";
import { PrismaClient } from '@prisma/client'



const PORT = 3000
// async function main() {
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }

// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })


app.get('/api',(req,res)=>{
  // res.writeHead(200, { "Content-Type": "text/plain" });
  res.json({message:"Tikkaだよおお"});
});

app.listen(PORT, () => {
  console.log(`REST API server ready at: http://localhost:${PORT}`);
});
