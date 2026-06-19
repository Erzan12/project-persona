const details = {
  "name": "Earl jan Do",
  "age": 26,
  "location": "Philippines",
  "education": [
    {
      "degree": "BS Information Technology",
      "school": "Southern Leyte State University (SLSU)"
    }
  ],
  "skills": [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Nest.js",
    "AI"
  ],
  "projects": [
    {
      "name": "Portfolio Website",
      "description": "Built with Next.js"
    },
    {
      "name": "AI Chatbot",
      "description": "Built with OpenRouter"
    }
  ],
  "socials": {
    "github": "https://github.com/erzan12",
    "linkedin": "https://linkedin.com/in/johndoe"
  }
}

export async function getProfile() {
  return details
}