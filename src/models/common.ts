export type GameState = {
  count: number
  string: string
  supports: Support[]
}

export type Support = {
  id: number
  level: number
  title: string
  description: string
  has: boolean
  cost: number
  increase: number
  multiplier: number
}
