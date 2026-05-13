// Generates Kahoot-style 6-digit game PIN codes
export function generateRoomCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export function generatePlayerId(): string {
  return `player_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1
}

export function calculateReward(
  difficulty: 'easy' | 'medium' | 'hard',
  correct: boolean,
  baseReward: { easy: number; medium: number; hard: number }
): number {
  const rewards = { easy: baseReward.easy, medium: baseReward.medium, hard: baseReward.hard }
  if (correct) return rewards[difficulty]
  // Even wrong answers give a small consolation prize
  return Math.floor(rewards['easy'] * 0.2)
}

export function getBuildingUpgradeCost(level: number, basePrice: number): number {
  return Math.floor(basePrice * (level * 0.8))
}

export function getBuildingIncome(level: number, baseIncome: number): number {
  return Math.floor(baseIncome * (1 + (level - 1) * 0.5))
}

export const DIFFICULTY_MULTIPLIERS = {
  easy: 1,
  medium: 2,
  hard: 4,
}

export const DIFFICULTY_COLORS = {
  easy: '#00ff88',
  medium: '#ffe600',
  hard: '#ff6b00',
}

export const DIFFICULTY_LABELS = {
  easy: '😌 Easy',
  medium: '🤔 Medium',
  hard: '🔥 Hard',
}
