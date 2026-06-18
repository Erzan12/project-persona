import { project } from "@/app/data/projects";
import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { BuiltInAgent } from "@copilotkit/runtime/v2"; 
import { NextRequest } from "next/server";

const projectContext = project
  .map(
    (p) => `
      Title: ${p.title},
      Description: ${p.description},
      Stack: ${p.stack},
      Github: ${p.github},
      Demo: ${p.demoLink}
    `
  )
  .join("\n\n");

const builtInAgent = new BuiltInAgent({
  model: "openai:gpt-5.4-mini",

  prompt: `
    You are Erzan's personal AI assistant.

    You can answer questions about Erzan's portfolio projects.

    Projects:

    ${projectContext}

    When users ask about projects:
    - Recommend relevant projects.
    - Explain technologies used.
    - Provide demo links when requested.
    - Be concise.
  `,
});

const runtime = new CopilotRuntime({
  agents: { default: builtInAgent }, 
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};