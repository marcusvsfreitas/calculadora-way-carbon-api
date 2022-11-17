import express from 'express';

const app = express();

app.get("/ping", (request, response) => {
  return response.json("Olá mundo")
});

app.listen(3333, () => console.log("Server is running!"));