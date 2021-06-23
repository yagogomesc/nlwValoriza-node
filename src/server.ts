import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Ola NLW teste");
});

app.post("/test-post", (request, response) => {
  return response.send("Ola NLW teste POST");
});

app.listen(3000, () => console.log("Server is running"));
