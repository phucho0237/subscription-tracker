import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.send(`Hello API`);
});

app.listen(3000, () => {
   console.log("API is running on http://localhost:3000");
});

export default app;
