import { NextResponse } from "next/server";
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 28,
    location: "London, UK",
  },
  {
    id: 3,
    name: "Carlos García",
    email: "carlos.garcia@example.com",
    age: 35,
    location: "Madrid, Spain",
  },
  {
    id: 4,
    name: "Aisha Khan",
    email: "aisha.khan@example.com",
    age: 27,
    location: "Dubai, UAE",
  },
];

export async function GET() {
  return NextResponse.json(users);
}
