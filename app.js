import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API!",
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
