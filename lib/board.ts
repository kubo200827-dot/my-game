import type { BoardTile } from '@/types/game'

export const BOARD_TILES: BoardTile[] = [
  { id: 0,  type: 'start',          name: 'HQ',             emoji: '🏢', color: '#00f5ff', base_price: 0,    base_income: 200,  description: 'Collect $200 salary each lap' },
  { id: 1,  type: 'startup_hub',    name: 'Startup Hub',    emoji: '🚀', color: '#ff00e5', base_price: 600,  base_income: 60,   description: 'High risk, high reward startup' },
  { id: 2,  type: 'chance',         name: 'Market Crash',   emoji: '🎲', color: '#ffe600', base_price: 0,    base_income: 0,    description: 'Draw a chance card' },
  { id: 3,  type: 'ai_lab',         name: 'AI Lab',         emoji: '🤖', color: '#00ff88', base_price: 1200, base_income: 100,  description: 'Cutting-edge AI research center' },
  { id: 4,  type: 'tax',            name: 'Tax Office',     emoji: '💸', color: '#ff6b00', base_price: 0,    base_income: 0,    description: 'Pay $100 in taxes' },
  { id: 5,  type: 'tech_campus',    name: 'Tech Campus',    emoji: '💻', color: '#7c3aed', base_price: 900,  base_income: 80,   description: 'Train your workforce here' },
  { id: 6,  type: 'bank',           name: 'Bank',           emoji: '🏦', color: '#f59e0b', base_price: 1500, base_income: 150,  description: 'Collect interest on deposits' },
  { id: 7,  type: 'empty',          name: 'Street',         emoji: '🛣️', color: '#374151', base_price: 0,    base_income: 0,    description: 'Nothing here... yet' },
  { id: 8,  type: 'hacker_hub',     name: 'Hacker Hub',     emoji: '👾', color: '#10b981', base_price: 800,  base_income: 90,   description: 'Cyber operations center' },
  { id: 9,  type: 'chance',         name: 'Market Surge',   emoji: '📈', color: '#ffe600', base_price: 0,    base_income: 0,    description: 'Draw a chance card' },
  { id: 10, type: 'factory',        name: 'Factory',        emoji: '🏭', color: '#6b7280', base_price: 1000, base_income: 100,  description: 'Mass production facility' },
  { id: 11, type: 'court_house',    name: 'Court House',    emoji: '⚖️', color: '#dc2626', base_price: 1100, base_income: 110,  description: 'Legal services & disputes' },
  { id: 12, type: 'empty',          name: 'Corner',         emoji: '🔄', color: '#374151', base_price: 0,    base_income: 0,    description: 'Free Parking' },
  { id: 13, type: 'media_tower',    name: 'Media Tower',    emoji: '📡', color: '#ec4899', base_price: 1300, base_income: 120,  description: 'Control the narrative' },
  { id: 14, type: 'chance',         name: 'Disruption',     emoji: '⚡', color: '#ffe600', base_price: 0,    base_income: 0,    description: 'Draw a chance card' },
  { id: 15, type: 'hospital',       name: 'Hospital',       emoji: '🏥', color: '#ef4444', base_price: 1400, base_income: 130,  description: 'Healthcare is always needed' },
  { id: 16, type: 'casino',         name: 'Casino',         emoji: '🎰', color: '#f97316', base_price: 1600, base_income: 160,  description: 'High stakes gambling den' },
  { id: 17, type: 'empty',          name: 'Street',         emoji: '🛣️', color: '#374151', base_price: 0,    base_income: 0,    description: 'Nothing here... yet' },
  { id: 18, type: 'trading_center', name: 'Trading Center', emoji: '📊', color: '#0ea5e9', base_price: 1700, base_income: 140,  description: 'Buy and sell commodities' },
  { id: 19, type: 'tax',            name: 'Tax Office',     emoji: '💸', color: '#ff6b00', base_price: 0,    base_income: 0,    description: 'Pay $150 in taxes' },
  { id: 20, type: 'empty',          name: 'Corner',         emoji: '🚔', color: '#374151', base_price: 0,    base_income: 0,    description: 'Go to Audit' },
  { id: 21, type: 'ai_lab',         name: 'AI Lab 2',       emoji: '🧠', color: '#00ff88', base_price: 1800, base_income: 160,  description: 'Advanced neural network hub' },
  { id: 22, type: 'chance',         name: 'IPO Event',      emoji: '🎲', color: '#ffe600', base_price: 0,    base_income: 0,    description: 'Draw a chance card' },
  { id: 23, type: 'startup_hub',    name: 'Unicorn',        emoji: '🦄', color: '#ff00e5', base_price: 2000, base_income: 180,  description: 'Billion dollar startup' },
  { id: 24, type: 'tech_campus',    name: 'R&D Center',     emoji: '🔬', color: '#7c3aed', base_price: 1900, base_income: 170,  description: 'Research & Development hub' },
  { id: 25, type: 'bank',           name: 'Central Bank',   emoji: '🏛️', color: '#f59e0b', base_price: 2200, base_income: 200,  description: 'Controls monetary policy' },
  { id: 26, type: 'hacker_hub',     name: 'Dark Net',       emoji: '🕸️', color: '#10b981', base_price: 2100, base_income: 190,  description: 'Underground operations' },
  { id: 27, type: 'empty',          name: 'Street',         emoji: '🛣️', color: '#374151', base_price: 0,    base_income: 0,    description: 'Nothing here' },
  { id: 28, type: 'chance',         name: 'Acquisition',    emoji: '📈', color: '#ffe600', base_price: 0,    base_income: 0,    description: 'Draw a chance card' },
  { id: 29, type: 'casino',         name: 'Mega Casino',    emoji: '🎪', color: '#f97316', base_price: 2400, base_income: 220,  description: 'The ultimate high-roller den' },
  { id: 30, type: 'media_tower',    name: 'Global Media',   emoji: '🌐', color: '#ec4899', base_price: 2300, base_income: 210,  description: 'Worldwide media influence' },
  { id: 31, type: 'trading_center', name: 'Wall Street',    emoji: '💹', color: '#0ea5e9', base_price: 2500, base_income: 240,  description: 'The heart of global finance' },
]

export const BOARD_SIZE = BOARD_TILES.length

export const TILE_LAYOUT = {
  // tile_id -> { row, col, side: 'bottom'|'left'|'top'|'right' }
  // 32-tile board: 9 per side + 4 corners
  // Bottom row (left to right): 0-8
  // Right col (bottom to top): 8-16
  // Top row (right to left): 16-24
  // Left col (top to bottom): 24-32
}

export const PLAYER_COLORS = [
  '#ff00e5', // pink
  '#00f5ff', // cyan
  '#ffe600', // yellow
  '#00ff88', // green
  '#ff6b00', // orange
  '#7c3aed', // purple
  '#ef4444', // red
  '#10b981', // emerald
]

export const PLAYER_AVATARS = ['🦊', '🐺', '🐉', '🦁', '🤖', '👾', '🦄', '🐸'] as const
