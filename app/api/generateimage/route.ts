import { NexResponse, NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.jason();
  //  res now contains body and then get prompt out of it
  const prompt = res.prompt;

  const response = await fetch("/api/generateImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const textData = await response.text();
  return NextResponse.json(textData);
}
