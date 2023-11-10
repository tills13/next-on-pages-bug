import { loadTodos } from "../../data/loadTodos";
import { createAction } from "./actions";
import Link from "next/link";

export const runtime = "edge";

export default async function Page() {
  const data = await loadTodos();

  return (
    <div>
      <h1>Page 2</h1>
      <Link href="/">Go to Page 1</Link>

      <pre>{JSON.stringify(data, undefined, 2)}</pre>

      <form action={createAction}>
        <input name="title" />
        <button>Create Todo</button>
      </form>
    </div>
  );
}
