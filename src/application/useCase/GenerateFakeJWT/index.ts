import { faker } from "@faker-js/faker";

export const generateFakeJWT = () => {
  const payload = {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
  };
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = btoa(JSON.stringify(payload));
  const signature = btoa("simulated-secret");
  return `${header}.${body}.${signature}`;
};
