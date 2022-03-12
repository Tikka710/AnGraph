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

  // const users = await prisma.user.findMany()

  const user = await prisma.user.create({
    
  data: {
    name: "Alice",
    email: "alice@prisma.io",
    comment: {
      create: [
        {
          message: "Helooooo",
          isEdit: true,
          createdAt: new Date('2006/03/22 11:00:00'),
        }
      ]
    }
  },
})
  const user2 = await prisma.user.create({
    
  data: {
    name: "Nana",
    email: "Nana@prisma.io",
    comment: {
      create: [
        {
          message: "test",
          isEdit: true,
          createdAt: new Date('2016/010/1 11:00:00'),
        }
      ]
    }
  },
})

  const jiro = await prisma.user.upsert({
    where: { email: "jiro@example.com" },
    update: {},
    create: {
      email: "jiro@example.com",
      name: "jiro",
    },
  });

  console.log({ Hello,user, user2})

  

}

main().catch((e) => {
  console.error(e);
    process.exit(1);
}).finally(async () => {
  await prisma.$disconnect()
})