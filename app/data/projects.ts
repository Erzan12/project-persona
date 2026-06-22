const projects = {
   "featuredProjects": [
    {
      "title": "ShopStack - Fullstack E-Commerce Application",
      "description": "ShopStack is a full-stack multi-tenant marketplace platform featuring storefronts for sellers, catalog choices for buyers, and an administrative dashboard.",
      "stack": ["NestJS", "Prisma", "PostgreSQL", "Docker", "NextJs"],
      "repo": "Product-Inventory-System",
      "github": "Erzan12/Product-Inventory-System",
      "demoLink": "https://shopstack-commerce.netlify.app",
      "image": "/images/shopstack.png",
      "featured": true,
      "deployment": "Netlify"
    },
    {
      "title": "Docs Platform",
      "description": "Developer documentation platform using Docusaurus.",
      "stack": ["Docusaurus", "TypeScript", "React"],
      "repo": "portfolio-v2",
      "github": "Erzan12/portfolio-v2/tree/master/apps/docs",
      "demoLink": "https://erzan-docs.vercel.app/",
      "image": "/images/docs-platform.png",
      "featured": true,
      "deployment": "Vercel"
    },
    {
      "title": "Livestock Tagging and Profiling Management System",
      "description": "Livestock profiling management web and mobile application featuring QR Code tracking for unique identification and CRUD APIs for livestock enrollment.",
      "stack": ["Laravel", "PHP", "Blade", "Vite", "SaaS", "MySQL"],
      "repo": "ltpms-web",
      "github": "Erzan12/ltpms-web",
      "demoLink": "https://ltpms-web.onrender.com/",
      "image": "/images/ltpms.png",
      "featured": true,
      "deployment": "Render"
    },
    {
      "title": "QR-Code Attendance Management System",
      "description": "Event management and attendance tracking system for faculties and students scanning generated QR codes. Integrates email notifications.",
      "stack": ["Laravel", "PHP", "Blade", "Vite"],
      "repo": "qr-code-attendance-management-system",
      "github": "Erzan12/qr-code-attendance-management-system",
      "demoLink": "https://qr-code-attendance-management-system-1kwx.onrender.com",
      "image": "/images/qcams.png",
      "featured": true,
      "deployment": "Render"
    },
    {
      "title": "SLSU Clinic Appointment System",
      "description": "Intended for the university clinic to facilitate a paperless workflow and handle online scheduling with structural role-based separation between clients and doctors.",
      "stack": ["Laravel", "PHP", "Blade", "Vite", "MySQL"],
      "repo": "slsu-clinic-appointment-system",
      "github": "Erzan12/slsu-clinic-appointment-system",
      "demoLink": "https://slsu-clinic-appointment-system.onrender.com",
      "image": "/images/slsu-cas.png",
      "featured": true,
      "deployment": "Render"
    },
    {
      "title": "Portfolio V2",
      "description": "Personal front-facing portfolio website built with React, Next.js, and TailwindCSS.",
      "stack": ["React", "NextJS", "TypeScript", "Tailwind"],
      "repo": "portfolio-v2",
      "github": "Erzan12/portfolio-v2",
      "demoLink": "https://erzan-dev.vercel.app/",
      "image": "/images/portfoliov2.png",
      "featured": true,
      "deployment": "Vercel"
    },
    {
      "title": "ERP API",
      "description": "NestJS Enterprise API Project handling subsystems inside a company. Highlights JWT with session cookies, RBAC using middleware/guards, CASL ability decorators, global validations, and multi-module RESTful flows (Auth, Admin, HR, Employee Dashboards) with Swagger UI validation.",
      "stack": ["NestJS", "PostgreSQL", "Swagger", "Supabase", "Render"],
      "repo": "erp-api",
      "github": "Erzan12/erp-api",
      "demoLink": "https://erp-api-rp7t.onrender.com/",
      "image": "/images/erp-api.png",
      "featured": true,
      "deployment": "Render"
    },
    {
      "title": "ShopStack API",
      "description": "The backend service for the ShopStack multi-tenant Fullstack Marketplace Application.",
      "stack": ["NestJS", "PostgreSQL", "Swagger", "Supabase", "Render"],
      "repo": "shopstack-api",
      "github": "Erzan12/Marketplace-Management-Inventory-System/tree/main/apps/backend",
      "demoLink": "https://marketplace-management-inventory-system.onrender.com/",
      "image": "/images/shopstack-api.png",
      "featured": true,
      "deployment": "Render"
    }
  ]
} 

export async function getProjects() {
    return projects;
}