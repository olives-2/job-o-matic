import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger"
import { getAllCompanies, getCompanyById } from "./controller/company";
import { cors } from '@elysiajs/cors'

const app = new Elysia().use(cors())
.get("/", () => "Hello Elysia");
app.use(swagger());
app.get("/company/:id", async ({params: {id}}) => await getCompanyById(Number(id)));
app.get("/company/", async () => {
  const companies = await getAllCompanies();
  console.log(companies);
  return companies
});
app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);