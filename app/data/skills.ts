const details = {
    "skills": {
        "frontend": ["React", "NextJS", "TypeScript", "TailwindCSS", "Blade", "Vite", "JavaScript"],
        "backend": ["NestJS", "Laravel", "PHP", "CodeIgniter 3"],
        "databases": ["PostgreSQL", "MySQL", "Supabase"],
        "toolsAndDevOps": ["Git Fork", "Gitea", "Docker", "VS Code", "Postman", "Render", "Vercel", "Netlify"],
        "infrastructure": ["Active Directory", "Domain Administration", "Network Troubleshooting", "Cisco Routers"]
    },
}

export async function getSkills() {
    return details;
}