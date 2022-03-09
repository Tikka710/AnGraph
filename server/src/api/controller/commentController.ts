import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
const cors = require('cors');
import express from "express";
const prisma = new PrismaClient();
const router = Router();
const app = express();

app.use(cors())
// GET /comments

router.get('/', async (req: Request, res: Response) => {
  const comments = await prisma.comment.findMany({
    include: {user: true}
  });
  res.json({ comments })
})

// POST /commetns

router.post('/', async (req: Request, res: Response) => {
  const { message } = req.body
  console.log(req.body)
  const comment = await prisma.comment.create({
    data: { message }
  })

  res.json({ comment })
})

// PUT /comments/:id
router.put('/:id', async (req: Request, res: Response) => {
  const { message } = req.body
  console.log(req.body)
  const comment = await prisma.comment.update({
    where: { id: parseInt(req.params?.id) },
    data: {message}
  })
  res.json({ comment })
})

// DELETE /comments/:id
router.delete("/:id", async (req: Request, res: Response) => {
  const comment = await prisma.comment.delete({
    where: { id: parseInt(req.params?.id) },
  });
  res.json({ comment });
})


export default router
