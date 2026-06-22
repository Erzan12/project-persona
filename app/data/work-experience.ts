const experience = {
    "workExperience": [
    {
      "role": "Jr. Systems Developer",
      "company": "Avega Bros. Integrated Shipping Corp.",
      "period": "April 2025 - Present",
      "highlights": [
        "Backend Developer for ABAS v3 API (the company’s ERP system).",
        "Implemented JWT, Auth, RBAC, and REST APIs with Swagger UI integration using NestJS framework with PostgreSQL.",
        "Developed, maintained, and updated the legacy ABAS v2 monolithic ERP System built on CodeIgniter 3 (CI3) and MySQL.",
        "Utilized development toolsets: Git Fork, Gitea, Docker, VS Code, and Postman."
      ]
    },
    {
      "role": "Administrative Aide / IT Assistant",
      "company": "Local Government Unit (LGU) of Silago",
      "period": "June 2023 - February 2025",
      "highlights": [
        "Performed Active Directory administration, domain joining, software deployment, and network troubleshooting.",
        "Provided IT support and server maintenance."
      ]
    },
    {
      "role": "Network Specialist Intern",
      "company": "MIS Campus Area Network (SLSU MC)",
      "period": "January 2023 - May 2023",
      "highlights": [
        "Assisted in the installation of fiber optic infrastructure for the Smart Campus Project.",
        "Managed Active Directory deployment and remote support using AnyDesk.",
        "Installed network cabinets, Cisco routers, and RFID access systems across campus facilities.",
        "Conducted equipment maintenance and IT asset inventory management."
      ]
    },
    {
      "role": "Freelance Web Developer",
      "company": "DevWave / Freelance",
      "period": "November 2022 - Present",
      "highlights": [
        "Developed web-based applications including clinic appointment systems, DTR systems, and SMS blast platforms using Laravel, PHP, MySQL, Blade, and JavaScript.",
        "Implemented role-based authentication and access control to enhance system security.",
        "Built QR code-based attendance and user authentication feature integrations."
      ]
    }
  ],
}

export async function getWorkExperience() {
    return experience;
}