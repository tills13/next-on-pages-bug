export async function loadTodos() {
  return (
    await process.env.DB.prepare(
      "SELECT * FROM todos ORDER BY id DESC LIMIT 1"
    ).all()
  ).results;
}
