import connectDB from "../../../lib/connectDB";
import Task from "../../../models/Task";

export async function GET(req) {
  try {
    await connectDB(); // Connect inside the request
    const tasks = await Task.find({});
    console.log(`hello ~ file: route.js:10 ~ GET ~ tasks:`, tasks);

    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch tasks" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    await connectDB(); // Connect inside the request
    const body = await req.json();
    const { id, title } = body;

    if (id) {
      if (!title) {
        return new Response(
          JSON.stringify({ error: "Title is required for update" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );

      if (!updatedTask) {
        return new Response(JSON.stringify({ error: "Task not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify(updatedTask), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      if (!title) {
        return new Response(
          JSON.stringify({ error: "Title is required for creation" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const newTask = await Task.create({ title });
      return new Response(JSON.stringify(newTask), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to process the request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
