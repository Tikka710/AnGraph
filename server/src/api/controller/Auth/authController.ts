import { Router, Request, Response } from "express";
import { prisma, findByCredentials, generateAuthToken } from "../../models/user";
const cors = require('cors');
import express from "express";
import { User } from "@prisma/client";
import { auth } from "../../common/auth"
const router = Router();
// const auth = require('../../common/auth')

const app = express();
app.use(cors())


router.post('/', async (req: Request, res: Response, next) => {
  const { name, email } = req.body;
  console.log(req.body)

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })
    const token  = await generateAuthToken(user)
    res.status(201).send({ message: "created a user", token})

  } catch(err) {
    next(err)
  }
})

router.post('/login', async (req: Request, res: Response, next) => {
  
})











export default router
