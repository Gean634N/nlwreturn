import express from 'express'

const PORT = 3333;

const app = express();

app.get('/', (_req, res) => {
  return res.json({ message: 'Hello  World!!!' })
})

app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT}`);
})