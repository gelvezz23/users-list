/* eslint-disable @typescript-eslint/no-explicit-any */
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { generateFakeJWT } from "../../../application/useCase/GenerateFakeJWT";
import { IUsers } from "../../../entities/Users";

export const createRandomUser = () => ({
  userId: faker.string.uuid(),
  username: faker.internet.username(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
});

export const users: IUsers[] = faker.helpers.multiple(createRandomUser, {
  count: 2000,
});
export const handlers = [
  http.get(`/api/users`, () => {
    return HttpResponse.json(users);
  }),
  http.post(`/api/login`, async ({ request }) => {
    const body: any = await request.json();
    const { email, password } = body;

    if (email && password) {
      const token = generateFakeJWT();
      return HttpResponse.json({ token });
    } else {
      return new HttpResponse(
        JSON.stringify({ message: "Credenciales inválidas" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }),
];
