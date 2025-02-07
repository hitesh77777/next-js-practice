import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Task title (required)
  completed: { type: Boolean, default: false }, // Completion status (default: false)
});

// Export the Task model
export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
