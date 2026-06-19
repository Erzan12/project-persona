import { cookies } from "next/headers"
import { prisma } from "@/app/lib/prisma"

const COOKIE_NAME = "persona_visitor_id"

export async function getOrCreateVisitor() {
  const cookieStore = await cookies()
  const existingId = cookieStore.get(COOKIE_NAME)?.value

  if (existingId) {
    const visitor = await prisma.visitor.findUnique({ where: { id: existingId } })
    if (visitor) {
      await prisma.visitor.update({ where: { id: visitor.id }, data: { lastSeenAt: new Date() } })
      return visitor
    }
  }

  const visitor = await prisma.visitor.create({ data: {} })
  cookieStore.set(COOKIE_NAME, visitor.id, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 180, // 180 days
    path: "/",
  })
  return visitor
}

export async function getOrCreateConversation(visitorId: string) {
  const existing = await prisma.conversation.findFirst({
    where: { visitorId },
    orderBy: { createdAt: "desc" },
  })
  if (existing) return existing
  return prisma.conversation.create({ data: { visitorId } })
}