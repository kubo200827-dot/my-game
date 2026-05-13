// ─── Player ───────────────────────────────────────────────
export type PlayerStatus = 'waiting' | 'ready' | 'playing' | 'disconnected'
export type AvatarEmoji = '🦊' | '🐺' | '🐉' | '🦁' | '🤖' | '👾' | '🦄' | '🐸'

export interface Player {
  id: string
  room_id: string
  user_name: string
  avatar: AvatarEmoji
  color: string
  money: number
  position: number
  cards: Card[]
  status: PlayerStatus
  score: number
  is_host: boolean
  last_seen: string
  turn_order: number
}

// ─── Room ─────────────────────────────────────────────────
export type RoomStatus = 'lobby' | 'playing' | 'finished'

export interface Room {
  id: string
  code: string
  host_id: string
  status: RoomStatus
  max_players: number
  created_at: string
  settings: GameSettings
}

export interface GameSettings {
  max_rounds: number
  starting_money: number
  board_size: number
  time_per_question: number
}

// ─── Game State ───────────────────────────────────────────
export interface GameState {
  id: string
  room_id: string
  current_player_id: string
  current_turn: number
  phase: GamePhase
  dice_result: number | null
  current_question: Question | null
  current_modifier: SystemModifier | null
  buildings: BuildingState[]
  turn_order: string[]
  round: number
  max_rounds: number
  winner_id: string | null
  updated_at: string
}

export type GamePhase =
  | 'waiting_for_roll'
  | 'moving'
  | 'tile_action'
  | 'modifier_active'
  | 'question_select'
  | 'answering'
  | 'result'
  | 'shopping'
  | 'turn_end'
  | 'game_over'

// ─── Board ────────────────────────────────────────────────
export type TileType =
  | 'bank'
  | 'casino'
  | 'ai_lab'
  | 'factory'
  | 'media_tower'
  | 'hospital'
  | 'hacker_hub'
  | 'court_house'
  | 'trading_center'
  | 'startup_hub'
  | 'tech_campus'
  | 'chance'
  | 'tax'
  | 'start'
  | 'empty'

export interface BoardTile {
  id: number
  type: TileType
  name: string
  emoji: string
  color: string
  base_price: number
  base_income: number
  description: string
}

export interface BuildingState {
  tile_id: number
  owner_id: string | null
  level: number
  income: number
}

// ─── Cards ────────────────────────────────────────────────
export type CardType = 'attack' | 'defense' | 'special'

export interface Card {
  id: string
  type: CardType
  name: string
  description: string
  emoji: string
  effect: CardEffect
  rarity: 'common' | 'rare' | 'epic'
}

export interface CardEffect {
  action: string
  value: number
  target?: 'self' | 'opponent' | 'all'
}

// ─── Questions ────────────────────────────────────────────
export type Difficulty = 'easy' | 'medium' | 'hard'
export type QuestionType = 'trivia' | 'logic' | 'ai_knowledge' | 'pattern' | 'decision'

export interface Question {
  id: string
  type: QuestionType
  difficulty: Difficulty
  question: string
  options: string[]
  correct_index: number
  reward_easy: number
  reward_medium: number
  reward_hard: number
  explanation: string
}

// ─── Modifiers ────────────────────────────────────────────
export type ModifierType =
  | 'reduced_visibility'
  | 'distraction'
  | 'time_pressure'
  | 'simplified_ui'
  | 'high_cognitive_load'
  | 'none'

export interface SystemModifier {
  type: ModifierType
  name: string
  description: string
  duration_turns: number
  ui_effect: UIEffect
}

export interface UIEffect {
  blur?: number
  noise?: boolean
  reduced_time?: boolean
  simplified?: boolean
  confetti?: boolean
}

// ─── Actions Log ──────────────────────────────────────────
export interface ActionLog {
  id: string
  room_id: string
  player_id: string
  action_type: string
  payload: Record<string, unknown>
  created_at: string
}
