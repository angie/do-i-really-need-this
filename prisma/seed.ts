import { prisma } from '../src/server/db'

async function seed() {
  const wishlist = await prisma.wishlist.create({
    data: {
      name: "My wishlist",
      items: {
        create: [
          {
            name: "Item 1",
          },
          {
            name: "Item 2",
          },
        ],
      },
    },
  });
  console.log(wishlist);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
