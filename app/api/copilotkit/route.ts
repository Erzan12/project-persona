import { getGirlfriend } from "@/app/data/girlfriend";
import { getProfile } from "@/app/data/profile";
import { getProjects } from "@/app/data/projects";
import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { BuiltInAgent } from "@copilotkit/runtime/v2";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const projects = await getProjects();
  const girlFriend = await getGirlfriend();
  const profile = await getProfile();

  const projectContext = projects
    .map(
      (p) => `
      Title: ${p.title}
      Description: ${p.description}
      Stack: ${p.stack.join(", ")}
      Github: ${p.github}
      Demo: ${p.demoLink}
      `
    )
    .join("\n\n");

  const girlFriendContext = girlFriend
    .map(
      (p) => `
        Girlfriend: ${p.Girlfriend},
        Character: ${p.Character},
        Age: ${p.Age}
      `
    )

  // const detailContext = profile
  //   .map(
  //     (m) => `
  //     Name: ${m.}
  //     `
  //   )
  //   .join("\n\n");

  const builtInAgent = new BuiltInAgent({
    model: "openai:gpt-5.4-mini",

    prompt: `
    You are Erzan's personal AI assistant.

    You can answer questions about Erzan's portfolio projects and my girlfriend since she requested to ask about her to you hahaha.

    Projects:

    ${projectContext}
    ${girlFriendContext}

    When users ask about projects:
    - Recommend relevant projects.
    - Explain technologies used.
    - Provide demo links when requested.
    - Mention GitHub repositories when relevant.
    - Be concise and accurate.
    - The girlfriend is many but i only love one.
    - Tell jokes about my girlfriend make fun of here if I will ask you.
    `,
  });

  const runtime = new CopilotRuntime({
    agents: {
      default: builtInAgent,
    },
  });

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};