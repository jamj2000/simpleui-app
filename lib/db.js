import path from "node:path";
import Database from "better-sqlite3";

// const db = new Database("./database.sqlite");

const db = new Database(
    path.join(process.cwd(), "database.sqlite"),
    { readonly: false }
);

export default db;