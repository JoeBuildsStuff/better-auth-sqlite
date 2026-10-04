import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import path from "path";

// Use absolute path for database file
const dbPath = path.join(process.cwd(), "database.sqlite");
const db = new Database(dbPath);

export const auth = betterAuth({
  database: db,
  emailAndPassword: {
    enabled: true,
  },
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET || "",
});

