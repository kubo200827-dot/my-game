import type { SystemModifier, ModifierType } from '@/types/game'

export const MODIFIERS: Record<ModifierType, SystemModifier> = {
  none: {
    type: 'none',
    name: 'Clear Mind',
    description: 'No modifier active. Play as normal.',
    duration_turns: 0,
    ui_effect: {},
  },
  reduced_visibility: {
    type: 'reduced_visibility',
    name: '🌫️ Fog of Business',
    description: 'Market uncertainty clouds your vision. UI slightly obscured.',
    duration_turns: 1,
    ui_effect: { blur: 2 },
  },
  distraction: {
    type: 'distraction',
    name: '📱 Notification Storm',
    description: 'Your phone won\'t stop buzzing! Extra visual noise on screen.',
    duration_turns: 1,
    ui_effect: { noise: true },
  },
  time_pressure: {
    type: 'time_pressure',
    name: '⏱️ Investor Deadline',
    description: 'Investors are waiting! You have less time to answer.',
    duration_turns: 1,
    ui_effect: { reduced_time: true },
  },
  simplified_ui: {
    type: 'simplified_ui',
    name: '💡 Focus Mode',
    description: 'Screen goes minimal. Only the essentials remain visible.',
    duration_turns: 1,
    ui_effect: { simplified: true },
  },
  high_cognitive_load: {
    type: 'high_cognitive_load',
    name: '🧠 Board Meeting Mode',
    description: 'Multiple dashboards active simultaneously. Stay focused!',
    duration_turns: 1,
    ui_effect: { noise: true, blur: 1 },
  },
}

const MODIFIER_POOL: ModifierType[] = [
  'none', 'none', 'none', // Higher chance of no modifier
  'reduced_visibility',
  'distraction',
  'time_pressure',
  'simplified_ui',
  'high_cognitive_load',
]

export function getRandomModifier(): SystemModifier {
  const type = MODIFIER_POOL[Math.floor(Math.random() * MODIFIER_POOL.length)]
  return MODIFIERS[type]
}
