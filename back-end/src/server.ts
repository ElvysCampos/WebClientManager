import app from "./app";
import AppDataSource from "./data-source";
const PORT: number = 3000;
const onMessage = `http://localhost:${PORT}`;

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(onMessage);
    });
  })
  .catch((error) => console.log(error));
