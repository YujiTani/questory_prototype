import users from "./schema";
import { faker } from '@faker-js/faker';
// https://github.com/faker-js/faker
import db from './drizzle';
// https://orm.drizzle.team/docs/rqb
// 参考記事: https://zenn.dev/hayato94087/articles/4920e26d93ee44#drizzle%E3%81%A7%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BD%9C%E6%88%90

// ランダムユーザーを生成する関数
function createRandomUser() {
  return {
    name: faker.person.fullName(),
    age: faker.datatype.number({ min: 18, max: 100 }),
  }
}

export const seedUsers = faker.helpers.multiple(createRandomUser, {
  count: 20,
});

async function seed() {
  await db.insert(users).values([...seedUsers]);
}


async function main() {
  try {
    await seed();
    console.log("Seeding completed");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

main();