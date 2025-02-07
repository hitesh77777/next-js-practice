import connectDB from "../../../lib/connectDB";
import Task from "../../../models/Task";

// Establish database connection
connectDB();

export async function GET(req) {
  try {
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
    const body = await req.json();
    const { id, title } = body;

    // Check if it's an update or a creation request
    if (id) {
      // Update existing task
      if (!title) {
        return new Response(
          JSON.stringify({ error: "Title is required for update" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title },
        { new: true } // Return the updated document
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
      // Create new task
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

// export async function PUT(req) {
//   try {
//     const url = new URL(req.url);
//     const id = url.searchParams.get("id"); // Get the task ID from query params
//     const body = await req.json();
//     const { title } = body;

//     if (!id) {
//       return new Response(JSON.stringify({ error: "Task ID is required" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     if (!title) {
//       return new Response(JSON.stringify({ error: "Title is required" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     const updatedTask = await Task.findByIdAndUpdate(
//       id,
//       { title },
//       { new: true } // Return the updated document
//     );

//     if (!updatedTask) {
//       return new Response(JSON.stringify({ error: "Task not found" }), {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     return new Response(JSON.stringify(updatedTask), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to update task" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
