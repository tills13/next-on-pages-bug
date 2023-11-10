import { uuidv7 } from "uuidv7";

export async function createTodo(title) {
  return process.env.DB.prepare(
    "INSERT INTO todos (id, title, status) VALUES (?, ?, ?)"
  )
    .bind(uuidv7(), title, "pending")
    .run();
}
