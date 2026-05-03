import { createServer } from "./server/index";

const PORT = process.env.PORT || 3000;

const app = createServer();

app.listen(PORT, () => {
  console.log(`✓ API server ready at http://127.0.0.1:${PORT}`);
});
