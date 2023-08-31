import app from "./app";
import { PORT } from "./config";
import { connectDB } from "./db";

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
  }
}

main();
