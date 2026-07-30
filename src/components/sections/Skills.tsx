import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  FileCode,
  Atom,
  Zap,
  Layers,
  Wind,
  Sparkles,
  Server,
  Cpu,
  Database,
  Workflow,
  GitBranch,
  Bot,
  Anchor,
  Network,
  Palette,
  Layout,
  Play,
  Box,
  Terminal,
  Package,
  LucideIcon,
} from 'lucide-react';
import { toolkitCategoriesData, ToolkitCategory, ToolkitSkillItem } from '@/data/skills';
import { Section } from '../layout/Section';
import { Container } from '../ui/Container';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];
const TOTAL_MATRIX_SLOTS = 16; // 8 columns x 2 rows = 16 matrix slots

// Shared ultra-fine noise texture matching Hero, Selected Work, About & Contact sections
const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

// Icon mapping per tech iconKey
const TECH_ICONS: Record<string, LucideIcon | string> = {
  html5: FileCode,
  css3: Layout,
  javascript: Code2,
  typescript: Code2,
  react: Atom,
  vite: Zap,
  nextjs: Layers,
  tailwind: Wind,
  framer: Sparkles,
  php: Server,
  python: Cpu,
  sql: Database,
  mysql: Database,
  postgresql: Server,
  nodejs: Cpu,
  api: Workflow,
  workflow: GitBranch,
  linebot: Bot,
  webhooks: Anchor,
  n8n: Network,
  llm: Sparkles,
  prompt: Terminal,
  chatbot: Bot,
  rag: Cpu,
  agents: Sparkles,
  figma: Palette,
  'design-systems': Layers,
  wireframe: Layout,
  'responsive-design': Layout,
  'component-design': Box,
  prototype: Play,
  git: GitBranch,
  docker: Box,
  linux: Terminal,
  vscode: Code2,
  npm: Package,
};

// Tech brand short badge text fallback if icon is rendered
const TECH_BADGES: Record<string, { bg: string; text: string; label: string }> = {
  // Frontend
  html5: { bg: 'bg-orange-950/40 border-orange-500/40', text: 'text-orange-400', label: '5' },
  css3: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: '3' },
  javascript: { bg: 'bg-yellow-950/40 border-yellow-500/40', text: 'text-yellow-400', label: 'JS' },
  typescript: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: 'TS' },
  react: { bg: 'bg-cyan-950/40 border-cyan-500/40', text: 'text-cyan-400', label: '⚛' },
  tailwind: { bg: 'bg-sky-950/40 border-sky-500/40', text: 'text-sky-400', label: '≈' },
  bootstrap: { bg: 'bg-purple-950/40 border-purple-500/40', text: 'text-purple-400', label: 'B' },
  'chakra-ui': { bg: 'bg-teal-950/40 border-teal-500/40', text: 'text-teal-400', label: '⚡' },
  vite: { bg: 'bg-purple-950/40 border-purple-500/40', text: 'text-purple-400', label: 'V' },
  framer: { bg: 'bg-fuchsia-950/40 border-fuchsia-500/40', text: 'text-fuchsia-400', label: 'F' },

  // Backend
  php: { bg: 'bg-indigo-950/40 border-indigo-500/40', text: 'text-indigo-400', label: 'PHP' },
  python: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: 'PY' },
  sql: { bg: 'bg-sky-950/40 border-sky-500/40', text: 'text-sky-400', label: 'SQL' },
  mysql: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: 'MY' },
  postgresql: { bg: 'bg-cyan-950/40 border-cyan-500/40', text: 'text-cyan-400', label: 'PG' },
  nodejs: { bg: 'bg-emerald-950/40 border-emerald-500/40', text: 'text-emerald-400', label: 'JS' },

  // Automation & AI
  openai: { bg: 'bg-emerald-950/40 border-emerald-500/40', text: 'text-emerald-400', label: 'AI' },
  gemini: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: 'GEM' },
  prompt: { bg: 'bg-white/[0.04] border-white/20', text: 'text-text-primary', label: 'PR' },
  line: { bg: 'bg-emerald-950/40 border-emerald-500/40', text: 'text-emerald-400', label: 'LINE' },
  workflow: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: 'WF' },
  n8n: { bg: 'bg-rose-950/40 border-rose-500/40', text: 'text-rose-400', label: 'N8N' },
  api: { bg: 'bg-sky-950/40 border-sky-500/40', text: 'text-sky-400', label: 'API' },
  supabase: { bg: 'bg-emerald-950/40 border-emerald-500/40', text: 'text-emerald-400', label: 'SB' },
  'google-drive': { bg: 'bg-yellow-950/40 border-yellow-500/40', text: 'text-yellow-400', label: 'DRV' },

  // UI / UX
  figma: { bg: 'bg-rose-950/40 border-rose-500/40', text: 'text-rose-400', label: 'FIG' },
  'design-systems': { bg: 'bg-purple-950/40 border-purple-500/40', text: 'text-purple-400', label: 'DS' },
  wireframe: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: 'WF' },
  'responsive-design': { bg: 'bg-teal-950/40 border-teal-500/40', text: 'text-teal-400', label: 'RD' },
  'component-design': { bg: 'bg-indigo-950/40 border-indigo-500/40', text: 'text-indigo-400', label: 'CD' },
  prototype: { bg: 'bg-fuchsia-950/40 border-fuchsia-500/40', text: 'text-fuchsia-400', label: 'PRO' },

  // Tools
  git: { bg: 'bg-orange-950/40 border-orange-500/40', text: 'text-orange-400', label: 'GIT' },
  github: { bg: 'bg-white/[0.04] border-white/20', text: 'text-text-primary', label: 'GH' },
  docker: { bg: 'bg-sky-950/40 border-sky-500/40', text: 'text-sky-400', label: 'DOC' },
  nginx: { bg: 'bg-emerald-950/40 border-emerald-500/40', text: 'text-emerald-400', label: 'NGX' },
  apache: { bg: 'bg-red-950/40 border-red-500/40', text: 'text-red-400', label: 'APA' },
  vscode: { bg: 'bg-blue-950/40 border-blue-500/40', text: 'text-blue-400', label: 'VSC' },
  webstorm: { bg: 'bg-cyan-950/40 border-cyan-500/40', text: 'text-cyan-400', label: 'WS' },
  canva: { bg: 'bg-teal-950/40 border-teal-500/40', text: 'text-teal-400', label: 'CAN' },
};

// Custom SVG icon class mapping
const CUSTOM_ICON_CLASSES: Record<string, string> = {
  html5: 'icon-html5',
  css3: 'icon-css3',
  javascript: 'icon-javascript',
  typescript: 'icon-typescript',
  react: 'icon-react',
  tailwind: 'icon-tailwind',
  bootstrap: 'icon-bootstrap',
  'chakra-ui': 'icon-chakra-ui',
  vite: 'icon-vite',
  framer: 'icon-framer',
  php: 'icon-php',
  python: 'icon-python',
  sql: 'icon-sql',
  'azure-sql-database': 'icon-azure-sql-database',
  mysql: 'icon-mysql',
  postgresql: 'icon-postgresql',
  nodejs: 'icon-nodejs',
  openai: 'icon-openai',
  gemini: 'icon-gemini',
  line: 'icon-line',
  n8n: 'icon-n8n',
  supabase: 'icon-supabase',
  'google-drive': 'icon-google-drive',
  prompt: 'icon-prompt',
  workflow: 'icon-workflow',
  api: 'icon-api',
  figma: 'icon-figma',
  git: 'icon-git',
  github: 'icon-github',
  docker: 'icon-docker',
  nginx: 'icon-nginx',
  apache: 'icon-apache',
  vscode: 'icon-vscode',
  webstorm: 'icon-webstorm',
  canva: 'icon-canva',
};

/**
 * Technology Stack Toolkit Component
 * Seamlessly matches the portfolio's native background & surface palette (bg-background & bg-surface/80).
 */
export const Skills: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('frontend');

  const activeCategory =
    toolkitCategoriesData.find((cat) => cat.id === activeTabId) ||
    toolkitCategoriesData[0];

  const activeSkills = activeCategory.skills;
  const emptySlotsCount = Math.max(0, TOTAL_MATRIX_SLOTS - activeSkills.length);

  return (
    <Section
      id="skills"
      padding="none"
      background="default"
      withContainer={false}
      className="relative z-10 overflow-hidden py-16 sm:py-24 lg:py-28 bg-background w-full min-w-0"
    >
      {/* 1. Volumetric Backlight Continuation matching portfolio */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,17,21,1)_0%,rgba(18,22,32,0.3)_50%,rgba(15,17,21,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(143,126,255,0.015)_50%,transparent_100%)]" />
      </div>

      {/* 2. Noise Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      <Container size="xl" className="w-full min-w-0 relative z-10">
        <div className="flex flex-col space-y-8 sm:space-y-10 w-full min-w-0">

          {/* ============================================================ */}
          {/* TOP HEADER: 06 / TOOLKIT + Technology Stack + Top-Right Tabs */}
          {/* ============================================================ */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full min-w-0">

            {/* LEFT SIDE: EYEBROW & TITLE */}
            <div className="space-y-1.5 max-w-xl w-full min-w-0 text-left">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: EASE_SMOOTH }}
                className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold text-left"
              >
                — SKILLS —
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-text-primary uppercase leading-none text-left"
              >
                Technology Stack
              </motion.h2>
            </div>

            {/* RIGHT SIDE: TOP-RIGHT SEGMENTED TAB CONTROL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.15 }}
              className="inline-flex items-center bg-surface border border-border p-1 select-none font-mono text-xs overflow-x-auto max-w-full shrink-0 self-start md:self-end"
            >
              {toolkitCategoriesData.map((cat: ToolkitCategory) => {
                const isActive = cat.id === activeTabId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTabId(cat.id)}
                    className={`px-4 py-2 sm:px-5 sm:py-2 font-mono text-xs font-semibold border-r border-border last:border-r-0 transition-all duration-200 whitespace-nowrap ${isActive
                        ? 'bg-text-primary text-background font-bold shadow-[0_0_20px_rgba(124,92,255,0.2)]'
                        : 'text-text-secondary hover:text-text-primary hover:bg-border/30'
                      }`}
                  >
                    {cat.tabName}
                  </button>
                );
              })}
            </motion.div>

          </div>

          {/* ============================================================ */}
          {/* ONE LARGE OUTER CONTAINER WRAPPING 8-COLUMN CONNECTED MATRIX */}
          {/* ============================================================ */}
          <div className="w-full border border-border bg-surface rounded-none overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)] select-none">

            {/* 8-COLUMN CONNECTED MATRIX (8 columns x 2 rows = 16 slots) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE_SMOOTH }}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 w-full min-w-0"
              >
                {/* 1. ACTIVE SKILL CELLS */}
                {activeSkills.map((skill: ToolkitSkillItem) => {
                  const badge = TECH_BADGES[skill.iconKey];
                  const IconComponent = TECH_ICONS[skill.iconKey] as LucideIcon | undefined;

                  return (
                    <div
                      key={skill.id}
                      className="border-r border-b border-border h-32 sm:h-36 flex flex-col justify-between items-start p-4 sm:p-5 text-left bg-surface/50 hover:bg-border/30 transition-colors duration-200 group select-none overflow-hidden"
                    >
                      {/* TOP: TECH ICON BADGE */}
                      <div
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm border border-border bg-background text-text-primary flex items-center justify-center font-mono font-bold text-xs sm:text-sm group-hover:border-primary/50 group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(124,92,255,0.2)] transition-all duration-300"
                      >
                        {CUSTOM_ICON_CLASSES[skill.iconKey] ? (
                          <span className={`${CUSTOM_ICON_CLASSES[skill.iconKey]} shrink-0`} />
                        ) : badge ? (
                          <span>{badge.label}</span>
                        ) : IconComponent ? (
                          <IconComponent className="w-4 h-4 text-white group-hover:text-[#7C5CFF] transition-colors" />
                        ) : (
                          <Code2 className="w-4 h-4 text-white group-hover:text-[#7C5CFF] transition-colors" />
                        )}
                      </div>

                      {/* BOTTOM: TECH TITLE */}
                      <div className="pt-2 min-w-0 w-full">
                        <h4 className="font-display font-bold text-xs sm:text-sm lg:text-sm text-text-primary group-hover:text-white transition-colors tracking-tight leading-snug truncate" title={skill.name}>
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}

                {/* 2. UNUSED/EMPTY MATRIX CELLS */}
                {Array.from({ length: emptySlotsCount }).map((_, emptyIdx) => (
                  <div
                    key={`empty-${emptyIdx}`}
                    className="h-32 sm:h-36 bg-surface select-none pointer-events-none"
                  />
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </Container>
    </Section>
  );
};

Skills.displayName = 'Skills';
