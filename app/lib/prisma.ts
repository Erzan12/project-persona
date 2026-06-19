import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg"; // Assuming you're using pg for the adapter

console.log("DB URL:", process.env.DATABASE_URL);

// 1. Setup the connection pool and adapter
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 2. Define a function to create the client instance
const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter,
    log: ["query"],
  });
};

// 3. Tell TypeScript about the global prisma variable
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// 4. Use the global instance if it exists, otherwise create a new one
export const prisma = globalThis.prisma ?? prismaClientSingleton();

// 5. In development, save the instance to globalThis to survive HMR
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}