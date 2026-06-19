import { getGirlfriend } from "@/app/data/girlfriend"; // assuming this returns the profile JSON structure
import { getProfile } from "@/app/data/profile";
import { getProjects } from "@/app/data/projects";
import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { BuiltInAgent } from "@copilotkit/runtime/v2";
import { NextRequest } from "next/server";

const handleCopilotRequest = async (req: NextRequest) => {
  const projects = await getProjects();
  const girlFriend = await getGirlfriend();
  const profileDetails = await getProfile();

  // 1. Format Projects Context
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

  // 2. Format Girlfriend Context
  const girlFriendContext = girlFriend
    .map(
      (p) => `
      Girlfriend: ${p.Girlfriend},
      Character: ${p.Character},
      Age: ${p.Age}
      `
    )
    .join("\n");

  const profileContext = JSON.stringify(profileDetails, null, 2)

  // 4. Inject all context pools into the system prompt
  const builtInAgent = new BuiltInAgent({
    model: "openai:gpt-5.4-mini",

    prompt: `
    You are Erzan's personal AI assistant.

    You can answer questions about Erzan's profile, family, professional experiences, and portfolio projects.

    --- ERZAN'S PROFESSIONAL PROFILE ---
    ${profileContext}

    --- PROJECTS ---
    ${projectContext}

    --- GIRLFRIEND DATA ---
    ${girlFriendContext}

    --- INSTRUCTIONS ---
    --- INSTRUCTIONS ---
    - When asked about Earl's/Erzan's family, explicitly use the details provided under the "familyMembers" key (mention his parents Era and Edgar Jr., their occupations, his twin sisters Jiera Mae and Jiera Ann who study at SLSU, and his grandparents).
    - When users ask about his living arrangements or workplace, refer to Consolacion, Cebu, and Avega Bros.
    - When users ask about projects: Recommend relevant projects, explain stacks, and provide links.
    - When users ask about girlfriend: The girlfriend is many but he only loves one. Tell jokes about her if asked.
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

// EXPORT BOTH POST AND GET METHODS
export const POST = async (req: NextRequest) => {
  return handleCopilotRequest(req);
};

export const GET = async (req: NextRequest) => {
  return handleCopilotRequest(req);
};