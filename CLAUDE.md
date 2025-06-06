# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Marketing Team is a demo landing page showcasing 6 specialized AI agents that collaborate to provide comprehensive marketing support. This is a frontend-only prototype built with vanilla HTML/CSS/JS, focusing on design and concept presentation rather than backend functionality.

**Key Points:**
- Primary goal: AI-driven development environment testing
- MVP demo site with dummy functionality
- Agent data stored in data.txt (CSV format)
- No actual AI agent implementation - UI/UX demonstration only

## Architecture

### Core Files
- `index.html`: Main landing page with hero section, agent cards, and dashboard
- `app.js`: Client-side logic for data loading, theme toggle, and CRUD operations (localStorage-based)
- `styles.css`: Responsive CSS with light/dark mode support
- `data.txt`: CSV data for 6 AI agents (name,type,specialty,status,tasks,kpi,linked_tools,created_at)

### Data Flow
1. Page loads → `app.js` fetches `data.txt` via fetch API
2. CSV data parsed into agent objects
3. Agent cards dynamically generated and inserted into DOM
4. Dashboard sections show static placeholder content

### Agent Structure
6 specialized AI agents with defined roles:
1. Orchestrator - Overall management & coordination
2. Strategy Planner - Market analysis & planning  
3. Content Creator - Content creation & optimization
4. SEO/SEM Specialist - Search optimization & advertising
5. Social Media Manager - Social platform management
6. Data Analyst - Analytics & reporting

## Development Commands

Since this is a static HTML/CSS/JS project:
- **Run locally**: Open `index.html` in browser or use live server
- **No build process**: Direct file editing
- **No testing framework**: Manual browser testing
- **No linting setup**: Code review through manual inspection

## Design Requirements

- **Style**: Minimalist, stylish, modern, professional, product-level quality
- **Responsive**: Mobile-first approach
- **Theme**: Light/dark mode toggle (stored in localStorage)
- **UX**: Zero user stress, intuitive agent role presentation
- **Accessibility**: Semantic HTML structure

## AI Marketing Team エージェント構成

1. **オーケストレーター (Orchestrator Agent)**: 全体統括、各エージェント間の連携、進捗管理、指示出し
2. **戦略プランナー (Strategy Planner Agent)**: 市場調査、競合分析、マーケティング戦略立案、KGI/KPI設定  
3. **コンテンツクリエーター (Content Creator Agent)**: ブログ記事、SNS投稿、コピーライティング、クリエイティブ制作ディレクション
4. **SEO/SEMスペシャリスト (SEO/SEM Specialist Agent)**: SEO戦略、キーワードリサーチ、広告キャンペーン運用
5. **ソーシャルメディアマネージャー (Social Media Manager Agent)**: SNS運用、エンゲージメント戦略、コミュニティ管理
6. **データアナリスト (Data Analyst Agent)**: データ収集・分析、効果測定、レポーティング、改善提案 