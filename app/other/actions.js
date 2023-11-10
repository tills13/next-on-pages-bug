"use server";

import { revalidatePath } from "next/cache";
import { createTodo } from "../../data/createTodo";

export async function createAction(fd) {
  await createTodo(fd.get("title"));
  revalidatePath("/nested");
}
