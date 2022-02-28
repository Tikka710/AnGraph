import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
  const Hello = await prisma.comment.upsert({
    where: { id: 1},
    update: {},
    create: {
      message: "おはようございます",

    },
  })

  const users = await prisma.user.findMany()

//   const user = await prisma.user.create({
//   data: {
//     name: "Alice",
//     email: "alice@prisma.io",
//     user: {
//       create: { title: "Join us for Prisma Day 2020" },
//     },
//   },
// })

  const jiro = await prisma.user.upsert({
    where: { email: "jiro@example.com" },
    update: {},
    create: {
      email: "jiro@example.com",
      name: "jiro",
    },
  });

  console.log({ Hello, users})

  

}

main().catch((e) => {
  console.error(e);
    process.exit(1);
}).finally(async () => {
  await prisma.$disconnect()
})