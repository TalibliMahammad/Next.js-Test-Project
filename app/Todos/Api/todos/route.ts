import { NextResponse } from "next/server";
import { nextId, todos, type Todo } from "./data";

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: NextResponse) {
  const body = await request.json();

  if (!body.text || !body.text.trim()) {
    return NextResponse.json(
      { error: "text sahəsi boş ola bilməz" },
      { status: 400 },
    );
  }


  const newTodo:Todo = {
      id:nextId,
      text:body.text.trim(),
      completed:false
  };

  todos.push(newTodo)

  return NextResponse.json(
    newTodo,
    {status:201}
  )
}

