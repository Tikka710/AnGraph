import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
const cors = require('cors');
import express from "express";
const prisma = new PrismaClient();
const router = Router();
const app = express();

// GET /users
app.use(cors())
router.get("/", async (req: Request, res: Response) => {
  // res.header('Content-Type', 'application/json; charset=utf-8');
  const users = await prisma.user.findMany()
  res.json({ users })
})

//idで指定したuserを取得
router.get("/:id", async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params?.id) },
  });
  res.json({ user });
});

// PUT /users/:id
router.put('/:id', async (req: Request, res: Response) => {
  const { name, email} = req.body
  const user = await prisma.user.update({
    where: {id: parseInt(req.params?.id)},
    data: {name, email}
  })

  res.json({user})
})

// POST /users
router.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.json({ user });
});

export default router