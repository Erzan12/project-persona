const hits = new Map<string, { count: number; date: string }>()

const today = () => new Date().toISOString().slice(0, 10)

export function checkRateLimit(ip: string, limit = 20) {
  const date = today()
  const key = ip
  const entry = hits.get(key)

  if (!entry || entry.date !== date) {
    hits.set(key, { count: 1, date })
    return { allowed: true, remaining: limit - 1 }
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0 }
  }

  entry.count += 1
  return { allowed: true, remaining: limit - entry.count }
}