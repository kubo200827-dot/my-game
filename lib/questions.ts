import type { Question } from '@/types/game'

export const QUESTIONS: Question[] = [
  // ── Business Trivia ──────────────────────────────────────
  {
    id: 'bt1',
    type: 'trivia',
    difficulty: 'easy',
    question: 'What does "IPO" stand for?',
    options: ['Initial Public Offering', 'International Purchase Order', 'Internal Profit Output', 'Instant Payout Option'],
    correct_index: 0,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: 'IPO = Initial Public Offering — when a company first sells shares to the public.'
  },
  {
    id: 'bt2',
    type: 'trivia',
    difficulty: 'easy',
    question: 'What is "ROI" short for?',
    options: ['Rate of Investment', 'Return on Investment', 'Risk of Interest', 'Revenue on Income'],
    correct_index: 1,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: 'ROI = Return on Investment — measures the profitability of an investment.'
  },
  {
    id: 'bt3',
    type: 'trivia',
    difficulty: 'medium',
    question: 'Which valuation method divides a company\'s stock price by its earnings per share?',
    options: ['P/E Ratio', 'EBITDA', 'DCF Analysis', 'Book Value'],
    correct_index: 0,
    reward_easy: 150, reward_medium: 300, reward_hard: 600,
    explanation: 'P/E Ratio (Price-to-Earnings) is one of the most common stock valuation metrics.'
  },
  {
    id: 'bt4',
    type: 'trivia',
    difficulty: 'medium',
    question: 'What is "venture capital"?',
    options: [
      'Government funding for startups',
      'Private investment in early-stage companies for equity',
      'Stock market index fund',
      'Bank loan for small businesses'
    ],
    correct_index: 1,
    reward_easy: 150, reward_medium: 300, reward_hard: 600,
    explanation: 'Venture capital provides funding to startups in exchange for equity stakes.'
  },
  {
    id: 'bt5',
    type: 'trivia',
    difficulty: 'hard',
    question: 'What does "EBITDA" measure?',
    options: [
      'Earnings Before Interest, Taxes, Depreciation, and Amortization',
      'Estimated Budget Including Total Direct Assets',
      'Equity Backed Investment Tax Deduction Agreement',
      'Effective Business Interest Transfer Discount Amount'
    ],
    correct_index: 0,
    reward_easy: 200, reward_medium: 400, reward_hard: 800,
    explanation: 'EBITDA is used to evaluate operating performance before financing and accounting decisions.'
  },
  // ── AI Knowledge ─────────────────────────────────────────
  {
    id: 'ai1',
    type: 'ai_knowledge',
    difficulty: 'easy',
    question: 'What does "LLM" stand for in AI?',
    options: ['Large Language Model', 'Logical Learning Machine', 'Linear Layer Model', 'Long Loop Memory'],
    correct_index: 0,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: 'LLMs like GPT and Claude are trained on vast text datasets to understand and generate language.'
  },
  {
    id: 'ai2',
    type: 'ai_knowledge',
    difficulty: 'medium',
    question: 'What is "overfitting" in machine learning?',
    options: [
      'When a model learns training data too well and fails on new data',
      'When a model is too small for its task',
      'When training takes too long',
      'When data is incorrectly labeled'
    ],
    correct_index: 0,
    reward_easy: 150, reward_medium: 300, reward_hard: 600,
    explanation: 'Overfitting = model memorizes training data but cannot generalize to unseen examples.'
  },
  {
    id: 'ai3',
    type: 'ai_knowledge',
    difficulty: 'hard',
    question: 'In neural networks, what does "backpropagation" do?',
    options: [
      'Sends data forward through layers',
      'Calculates gradients to update weights during training',
      'Removes unnecessary neurons',
      'Normalizes input data'
    ],
    correct_index: 1,
    reward_easy: 200, reward_medium: 400, reward_hard: 800,
    explanation: 'Backpropagation computes the gradient of the loss function to update model weights.'
  },
  // ── Logic Puzzles ─────────────────────────────────────────
  {
    id: 'lp1',
    type: 'logic',
    difficulty: 'easy',
    question: 'You invest $1,000 at 10% annual interest. How much do you have after 1 year?',
    options: ['$1,100', '$1,010', '$1,200', '$900'],
    correct_index: 0,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: '$1,000 × 1.10 = $1,100'
  },
  {
    id: 'lp2',
    type: 'logic',
    difficulty: 'medium',
    question: 'A company\'s revenue is $500K, costs are $350K. What is the profit margin?',
    options: ['30%', '40%', '25%', '70%'],
    correct_index: 0,
    reward_easy: 150, reward_medium: 300, reward_hard: 600,
    explanation: 'Profit = $150K. Margin = 150/500 = 30%'
  },
  {
    id: 'lp3',
    type: 'logic',
    difficulty: 'hard',
    question: 'If a stock drops 50% then rises 50%, what is the net change?',
    options: ['0%', '-25%', '+25%', '-10%'],
    correct_index: 1,
    reward_easy: 200, reward_medium: 400, reward_hard: 800,
    explanation: '$100 → $50 (−50%) → $75 (+50%). Net = −25%.'
  },
  // ── Pattern Recognition ───────────────────────────────────
  {
    id: 'pr1',
    type: 'pattern',
    difficulty: 'easy',
    question: 'What comes next? $100, $200, $400, $800, ___',
    options: ['$1,200', '$1,600', '$2,400', '$900'],
    correct_index: 1,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: 'Each value doubles: 100 × 2^n. Next = $1,600.'
  },
  {
    id: 'pr2',
    type: 'pattern',
    difficulty: 'medium',
    question: 'Fibonacci sequence: 1, 1, 2, 3, 5, 8, ___',
    options: ['10', '11', '13', '15'],
    correct_index: 2,
    reward_easy: 150, reward_medium: 300, reward_hard: 600,
    explanation: 'Each number is the sum of the two before it: 5+8=13.'
  },
  // ── Decision Making ───────────────────────────────────────
  {
    id: 'dm1',
    type: 'decision',
    difficulty: 'medium',
    question: 'You have $2,000. Option A: guaranteed $500 profit. Option B: 60% chance of $1,000, 40% chance of losing $200. Which has higher expected value?',
    options: ['Option A ($500)', 'Option B ($520)', 'They\'re equal', 'Cannot determine'],
    correct_index: 1,
    reward_easy: 150, reward_medium: 300, reward_hard: 600,
    explanation: 'EV(B) = 0.6×$1,000 + 0.4×(−$200) = $600 − $80 = $520 > $500.'
  },
  {
    id: 'dm2',
    type: 'decision',
    difficulty: 'hard',
    question: 'As CEO, your product has a critical bug affecting 2% of users. Fix costs $500K. Lawsuit risk if ignored: 30% chance of $2M. What\'s the financially rational choice?',
    options: [
      'Fix the bug ($500K certain)',
      'Ignore it (EV = $600K risk)',
      'Partial fix ($250K)',
      'Recall all products'
    ],
    correct_index: 0,
    reward_easy: 200, reward_medium: 400, reward_hard: 800,
    explanation: 'EV of ignoring = 0.30 × $2M = $600K expected loss > $500K fix cost. Fix it.'
  },
  {
    id: 'bt6',
    type: 'trivia',
    difficulty: 'easy',
    question: 'What is a "startup unicorn"?',
    options: [
      'A startup valued over $1 billion',
      'A startup with a horse mascot',
      'A startup with one product',
      'A startup that never makes profit'
    ],
    correct_index: 0,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: 'Unicorns are privately held startups valued at over $1 billion USD.'
  },
  {
    id: 'ai4',
    type: 'ai_knowledge',
    difficulty: 'easy',
    question: 'What is "prompt engineering"?',
    options: [
      'Designing better questions/instructions for AI models',
      'Building AI hardware',
      'Training neural networks',
      'Writing Python code for ML'
    ],
    correct_index: 0,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: 'Prompt engineering = crafting inputs to get better outputs from AI models.'
  },
  {
    id: 'lp4',
    type: 'logic',
    difficulty: 'easy',
    question: 'Your company has 5 employees. Each earns $50K/year. What\'s your annual payroll?',
    options: ['$200K', '$250K', '$300K', '$500K'],
    correct_index: 1,
    reward_easy: 100, reward_medium: 200, reward_hard: 400,
    explanation: '5 × $50,000 = $250,000'
  },
  {
    id: 'pr3',
    type: 'pattern',
    difficulty: 'hard',
    question: 'Market data: Mon +3%, Tue −1%, Wed +3%, Thu −1%, Fri ___',
    options: ['+3%', '−1%', '0%', '+5%'],
    correct_index: 0,
    reward_easy: 200, reward_medium: 400, reward_hard: 800,
    explanation: 'The alternating pattern: +3%, −1%, +3%, −1%, +3% continues.'
  },
]

export function getRandomQuestion(difficulty?: string): Question {
  const pool = difficulty ? QUESTIONS.filter(q => q.difficulty === difficulty) : QUESTIONS
  return pool[Math.floor(Math.random() * pool.length)]
}

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS.find(q => q.id === id)
}
