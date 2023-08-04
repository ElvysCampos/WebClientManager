import { DataSource, DataSourceOptions } from "typeorm";
import path from "node:path";
import "dotenv/config";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");
  const nodeEnv = process.env.NODE_ENV as string;

  if (nodeEnv === "contactmanager") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL!,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export default AppDataSource;
