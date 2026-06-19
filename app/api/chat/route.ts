// import { NextRequest, NextResponse } from "next/server";
// import profile from "@/app/data/profile";
// import { openrouter } from "@/app/lib/openrouter";

// export async function POST(req: NextRequest) {
//   const { message } = await req.json();

//   const systemPrompt = `
// You are the personal AI assistant for ${profile.name}.

// Answer questions about ${profile.name}
// using ONLY the information provided below.

// PROFILE:
// ${JSON.stringify(profile, null, 2)}

// If information is unavailable,
// say:
// "I don't have information about that."
// `;

//   const completion =
//     await openrouter.chat.completions.create({
//       model: "openai/gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: systemPrompt
//         },
//         {
//           role: "user",
//           content: message
//         }
//       ]
//     });

//   return NextResponse.json({
//     answer:
//       completion.choices[0].message.content
//   });
// }