import { type DBSchema, type IDBPDatabase, openDB } from "idb";

interface MyDatabase extends DBSchema {
  todos: {
    key: number;
    value: {
      id?: number;
      title: string;
      completed: boolean;
    };
  };
}

let db: IDBPDatabase<MyDatabase>;

export const startDatabase = async () => {
  db = await openDB("TodoDatabase", 1, {
    upgrade(db) {
      db.createObjectStore("todos", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
};

export const getDB = () => {
  return db;
};
