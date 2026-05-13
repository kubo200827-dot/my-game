import type { Card } from '@/types/game'

export const ATTACK_CARDS: Card[] = [
  {
    id: 'atk1',
    type: 'attack',
    name: 'Corporate Raid',
    description: 'Steal $200 from another player',
    emoji: '💰',
    effect: { action: 'steal_money', value: 200, target: 'opponent' },
    rarity: 'common',
  },
  {
    id: 'atk2',
    type: 'attack',
    name: 'Traffic Jam',
    description: 'Block a player: they skip their next move roll',
    emoji: '🚦',
    effect: { action: 'block_movement', value: 1, target: 'opponent' },
    rarity: 'common',
  },
  {
    id: 'atk3',
    type: 'attack',
    name: 'Market Crash',
    description: 'Reduce target\'s building income by 50% for 1 round',
    emoji: '📉',
    effect: { action: 'reduce_income', value: 50, target: 'opponent' },
    rarity: 'rare',
  },
  {
    id: 'atk4',
    type: 'attack',
    name: 'Cyber Attack',
    description: 'Hack opponent\'s UI — they get Distraction modifier next turn',
    emoji: '👾',
    effect: { action: 'hack_ui', value: 1, target: 'opponent' },
    rarity: 'rare',
  },
  {
    id: 'atk5',
    type: 'attack',
    name: 'Force Audit',
    description: 'Force opponent to reroll their condition modifier',
    emoji: '📋',
    effect: { action: 'force_reroll', value: 1, target: 'opponent' },
    rarity: 'epic',
  },
  {
    id: 'atk6',
    type: 'attack',
    name: 'Hostile Takeover',
    description: 'Steal $500 from all opponents (split)',
    emoji: '🏴‍☠️',
    effect: { action: 'steal_money', value: 500, target: 'all' },
    rarity: 'epic',
  },
]

export const DEFENSE_CARDS: Card[] = [
  {
    id: 'def1',
    type: 'defense',
    name: 'Firewall',
    description: 'Block the next attack targeting you',
    emoji: '🛡️',
    effect: { action: 'shield', value: 1, target: 'self' },
    rarity: 'common',
  },
  {
    id: 'def2',
    type: 'defense',
    name: 'Insurance Policy',
    description: 'Recover up to $300 from your next loss',
    emoji: '📄',
    effect: { action: 'protection', value: 300, target: 'self' },
    rarity: 'common',
  },
  {
    id: 'def3',
    type: 'defense',
    name: 'Immunity Turn',
    description: 'Skip all negative effects for 1 full turn',
    emoji: '✨',
    effect: { action: 'immunity', value: 1, target: 'self' },
    rarity: 'rare',
  },
  {
    id: 'def4',
    type: 'defense',
    name: 'Legal Team',
    description: 'Countersue: reflect next attack back to sender',
    emoji: '⚖️',
    effect: { action: 'reflect', value: 1, target: 'self' },
    rarity: 'epic',
  },
]

export const SPECIAL_CARDS: Card[] = [
  {
    id: 'spc1',
    type: 'special',
    name: 'Double Down',
    description: 'Double your earnings from the next question',
    emoji: '🎯',
    effect: { action: 'double_reward', value: 2, target: 'self' },
    rarity: 'rare',
  },
  {
    id: 'spc2',
    type: 'special',
    name: 'Wild Card',
    description: 'Move to any tile on the board',
    emoji: '🃏',
    effect: { action: 'teleport', value: 1, target: 'self' },
    rarity: 'epic',
  },
]

export const ALL_CARDS = [...ATTACK_CARDS, ...DEFENSE_CARDS, ...SPECIAL_CARDS]

export function getStarterCards(): Card[] {
  return [
    ATTACK_CARDS[0], // Corporate Raid
    DEFENSE_CARDS[0], // Firewall
  ]
}

export function getRandomCard(): Card {
  return ALL_CARDS[Math.floor(Math.random() * ALL_CARDS.length)]
}
