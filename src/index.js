import fastify from "fastify";

const app = fastify();
const port = 3000;

app.get("/hello", (req, res) => {
  let { name } = req.query;
  if (!name || name.trim().length === 0) {
    name = "World";
  }
  res.send(`Hello, ${name}!`);
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
