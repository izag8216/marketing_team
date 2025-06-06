# Claude Code + Cursor + Git Worktree + tmux + GitHub Actions + GitHub Pages 開発フロー（2025年6月版 AI Marketing Team対応）

**本ドキュメントは、AI Marketing Team というシンプルなデモサイトの作成を通して、Cursor, Claude Code, Claude Code GitHub Actions (Issues連携含む), Git Worktrees, tmux といったモダンなツール群を組み合わせ、AI駆動型の並列開発環境を構築することを主目的としています。デモサイトの機能自体はダミーであり、現状その完成度を追求するものではありません。**

=======================
🛠 必要ツールのインストール
=======================
npm install -g @anthropic-ai/claude-code
sudo apt install git tmux
claude login

=======================
📁 プロジェクト初期化
=======================

## 空ファイル作成
```zsh
touch index.html styles.css app.js data.txt README.md CLAUDE.md .gitignore .cursorrules
```

## .gitignore 設定
```zsh
echo "manuals/" >> .gitignore
echo "node_modules/" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
```

### ファイル構成
- **index.html** : メインのHTMLファイル（アプリのコンセプトを伝えるLPを含む）
- **styles.css** : スタイルシート
- **app.js** : JavaScript ロジック
- **data.txt** : AI Marketing Team エージェントデータファイル
- **README.md** : 説明ファイル
- **CLAUDE.md** : 要件指示ファイル
- **.gitignore** : 無視ファイル（manuals/フォルダ除外設定済み）
- **.cursorrules** : Cursorのルールファイル

## Cursor + Sonnet4 でアプリ生成
```
UX/UXデザイン : 
全体として Minimalist, stylish, modern, professional and product level を目指す。
ユーザーストレスゼロ、魅力的で使いやすい UI/UX デザインに仕上げること。
レスポンシブ対応、light-dark mode対応。

AI Marketing Team アプリのコンセプトとして、6つのAIエージェントが協力してユーザーのビジネスにおけるマーケティング活動を全面的にサポートするイメージを、ランディングページ(LP)で魅力的に表現すること。
LPは視覚的なコンセプト提示が主目的であり、高度な機能実装は現段階では不要。
各エージェントの特性を活かしたダッシュボードデザインも（今回はダミーで良いが）考慮すること。
```

## Gitの初期化
```zsh
git init
git remote add origin https://github.com/izag8216/ai_marketing_team.git
```
git add .

git commit -m "feat: Initial AI Marketing Team app release"

git branch -M main

git push -u origin main

=======================
📄 CLAUDE.md & README.md 作成例
=======================

## CLAUDE.md（要件指示）
```markdown
# AI Marketing Team アプリ開発要件

## アプリコンセプト
AI Marketing Team は、オーケストレーターを含む6つの専門AIエージェントがシームレスに連携し、ユーザーのビジネスにおけるマーケティング戦略立案から実行、分析、改善までを包括的にサポートすることを目指すアプリケーションです。
ユーザーは複雑なマーケティング業務から解放され、本質的なビジネス成長に集中できるようになります。
**ただし、本プロジェクトの初期段階では、このコンセプトを提示する魅力的なランディングページ（LP）を持つデモサイトの構築に留め、実際の高度なエージェント機能の実装は行いません。主目的はAI駆動開発環境の構築です。**

## 技術仕様
- HTML/CSS/JSのみ
- AIエージェントデータは data.txt に行単位で保存
- シンプルで意味のある構造
- コミットは詳細かつ要点を押さえて

## デザイン要件
- 全体的なUI/UX: Minimalist, stylish, modern, professional, product level.
- ランディングページ(LP):
    - 上記のデザイン品質を維持しつつ、6つのAIエージェントによる包括的サポートというアプリのコアコンセプトを視覚的に、かつ魅力的に伝えるデザインであること。
    - 訪問者が一目でアプリの提供価値を理解できるような構成を心がける。
    - 現段階では機能はダミーで良いため、デザインとコンセプト伝達を最優先とする。
- レスポンシブ対応
- Light/Dark mode対応
- ユーザーストレスゼロのUX
- 各マーケティングエージェントの役割が直感的にわかるUI

## AIエージェント構成 (計6名)
1.  **オーケストレーター (Orchestrator Agent)**: 全体統括、各エージェント間の連携、進捗管理、指示出し
2.  **戦略プランナー (Strategy Planner Agent)**: 市場調査、競合分析、マーケティング戦略立案、KGI/KPI設定
3.  **コンテンツクリエーター (Content Creator Agent)**: ブログ記事、SNS投稿、コピーライティング、クリエイティブ制作ディレクション
4.  **SEO/SEMスペシャリスト (SEO/SEM Specialist Agent)**: SEO戦略、キーワードリサーチ、広告キャンペーン運用
5.  **ソーシャルメディアマネージャー (Social Media Manager Agent)**: SNS運用、エンゲージメント戦略、コミュニティ管理
6.  **データアナリスト (Data Analyst Agent)**: データ収集・分析、効果測定、レポーティング、改善提案
```

## README.md（説明）
```markdown
# AI Marketing Team アプリ

## 概要
**AI Marketing Teamは、6つの専門AIエージェント（オーケストレーター、戦略プランナー、コンテンツクリエーター、SEO/SEMスペシャリスト、ソーシャルメディアマネージャー、データアナリスト）が連携し、ユーザーのビジネスにおけるマーケティング活動を全面的にサポートすることを目指すWebアプリケーションです。**

本プロジェクトでは、このコンセプトを提示する魅力的なランディングページ（LP）を持つMVPデモサイトをHTML/CSS/JSで構築します。
**現在の主目的は、AI駆動の並列開発環境（Cursor, Claude Code, Git Worktree, tmux, GitHub Actions等）を構築することであり、LPやエージェント管理画面の機能はダミーデータの表示に留め、高度なバックエンド機能は実装しません。**
ローカルの data.txt にAIエージェント情報のCRUD操作（のダミー機能）を想定します。

## AIエージェント構成
1.  **オーケストレーター (Orchestrator Agent)**:
    -   役割: マーケティングチーム全体の司令塔。各エージェントのタスク調整、進捗監視、リソース配分、チーム全体のパフォーマンス最適化。
2.  **戦略プランナー (Strategy Planner Agent)**:
    -   役割: 市場動向・競合を分析し、データに基づいたマーケティング戦略を策定。ターゲット顧客の特定、キャンペーン目標設定、予算配分計画。
3.  **コンテンツクリエーター (Content Creator Agent)**:
    -   役割: 魅力的なマーケティングコンテンツ（ブログ、SNS投稿、動画、インフォグラフィック等）を企画・制作。ブランドメッセージの一貫性を担保。
4.  **SEO/SEMスペシャリスト (SEO/SEM Specialist Agent)**:
    -   役割: Webサイトの検索エンジン最適化（SEO）と検索エンジンマーケティング（SEM）戦略を実行。オーガニック検索流入増と広告ROI最大化。
5.  **ソーシャルメディアマネージャー (Social Media Manager Agent)**:
    -   役割: 主要SNSプラットフォームでのブランドプレゼンス構築・管理。エンゲージメント促進、フォロワー増加、ブランドロイヤルティ向上。
6.  **データアナリスト (Data Analyst Agent)**:
    -   役割: マーケティング活動全般のデータを収集・分析。キャンペーン効果測定、顧客行動インサイト抽出、戦略改善のためのレポート作成。

## ファイル構成
- **index.html** : メインのHTMLファイル
- **styles.css** : スタイルシート
- **app.js** : JavaScript ロジック
- **data.txt** : AI Marketing Team エージェントデータファイル

## 使用方法
`index.html` をブラウザで開くだけ。
```

=======================
🌿 Git Worktree 構成
=======================
# 以下のコマンドはプロジェクトルート (`/Users/apple/projects/github/marketing_team`) で実行することを想定しています。
# 各ワークツリーはプロジェクトルートの一つ上の階層 (プロジェクトルートの親ディレクトリ内) に、
# プロジェクトルートディレクトリと並列になるように作成されます。
# 例: `../ai_marketing_team-orchestrator` は `/Users/apple/projects/github/ai_marketing_team-orchestrator` を指します。

# メインブランチから各機能ブランチのワークツリーを作成（計6つ）
git worktree add -b feature-orchestrator ../ai_marketing_team-orchestrator main
# → 作成先目安: /Users/apple/projects/github/ai_marketing_team-orchestrator
git worktree add -b feature-strategy ../ai_marketing_team-strategy main
# → 作成先目安: /Users/apple/projects/github/ai_marketing_team-strategy
git worktree add -b feature-content ../ai_marketing_team-content main
# → 作成先目安: /Users/apple/projects/github/ai_marketing_team-content
git worktree add -b feature-seo ../ai_marketing_team-seo main
# → 作成先目安: /Users/apple/projects/github/ai_marketing_team-seo
git worktree add -b feature-social ../ai_marketing_team-social main
# → 作成先目安: /Users/apple/projects/github/ai_marketing_team-social
git worktree add -b feature-analytics ../ai_marketing_team-analytics main
# → 作成先目安: /Users/apple/projects/github/ai_marketing_team-analytics

# 確認
git worktree list

=======================
🧱 tmux セッション構成
=======================

🌟🌟🌟 tmux new -s ai_marketing_team　※ 忘れるな！
# 上記コマンドはプロジェクトルート (`/Users/apple/projects/github/marketing_team`) で実行することを推奨します。

# Ctrl+b → %（横）または "（縦）で6つのペインに分割
# 各ペインで対応するワークツリーに移動し、Claudeを起動
# ここでの `cd` コマンドは、tmuxセッションを開始したプロジェクトルート (`/Users/apple/projects/github/marketing_team`) からの
# 相対パスで指定されたワークツリーへの移動を意味します。
# 例: `cd ../ai_marketing_team-orchestrator` は `/Users/apple/projects/github/marketing_team` から
# `/Users/apple/projects/github/ai_marketing_team-orchestrator` へ移動することを意図しています。

# Pane 1: Orchestrator (オーケストレーター)
cd ../ai_marketing_team-orchestrator && claude
# → /Users/apple/projects/github/ai_marketing_team-orchestrator へ移動

# Pane 2: Strategy (戦略プランナー)
cd ../ai_marketing_team-strategy && claude
# → /Users/apple/projects/github/ai_marketing_team-strategy へ移動

# Pane 3: Content (コンテンツクリエーター)
cd ../ai_marketing_team-content && claude
# → /Users/apple/projects/github/ai_marketing_team-content へ移動

# Pane 4: SEO/SEM (SEO/SEMスペシャリスト)
cd ../ai_marketing_team-seo && claude
# → /Users/apple/projects/github/ai_marketing_team-seo へ移動

# Pane 5: Social (ソーシャルメディアマネージャー)
cd ../ai_marketing_team-social && claude
# → /Users/apple/projects/github/ai_marketing_team-social へ移動

# Pane 6: Analytics (データアナリスト)
cd ../ai_marketing_team-analytics && claude
# → /Users/apple/projects/github/ai_marketing_team-analytics へ移動

=======================
💡 Claude による要件出し
=======================
claude -p "HTML/CSS/JS で作るAI Marketing Team（AIマーケティングエージェント管理）Webアプリの要件を洗い出して。AIエージェントデータは data.txt に保存。6つのAIエージェント（オーケストレーター、戦略プランナー、コンテンツクリエーター、SEO/SEMスペシャリスト、ソーシャルメディアマネージャー、データアナリスト）の管理機能を含めて。エージェント名、役割、担当チャネル、KPI、活動履歴、連携ツールなどの管理機能を含めて。"

=======================
🧩 各セッションで実装
=======================
# Pane 1: Orchestrator (オーケストレーター) - index.html の全体構造とオーケストレーターUI
claude -p "AI Marketing Teamアプリのindex.htmlを作成してください。これはアプリの顔となるランディングページ(LP)を含みます。LPは、6つのAIエージェントがユーザーのマーケティングを包括的にサポートするというアプリのコンセプトを、minimalist, stylish, modern, professional & product levelのデザインで魅力的に表現するものとします。具体的な機能はダミーで良いので、コンセプトが伝わる視覚的な構成を重視してください。また、オーケストレーター用UI（全エージェントの概要表示、タスク割り当て・進捗確認機能などのダミー表示エリア）のプレースホルダーも含むsemanticなHTML構造を記述してください。他のエージェントUIのプレースホルダーも適宜配置してください。"

# Pane 2: Strategy (戦略プランナー) - 戦略プランナーUI (HTML/CSS/JS)
claude -p "AI Marketing Teamアプリの戦略プランナー用UI（市場分析データ入力フォーム、戦略目標設定、KPIトラッカー表示など）をHTMLで作成し、対応するstyles.cssとapp.jsの雛形を作成してください。"

# Pane 3: Content (コンテンツクリエーター) - コンテンツクリエーターUI (HTML/CSS/JS)
claude -p "AI Marketing Teamアプリのコンテンツクリエーター用UI（コンテンツカレンダー、作成依頼フォーム、成果物一覧表示など）をHTMLで作成し、対応するstyles.cssとapp.jsの雛形を作成してください。"

# Pane 4: SEO/SEM (SEO/SEMスペシャリスト) - SEO/SEMスペシャリストUI (HTML/CSS/JS)
claude -p "AI Marketing TeamアプリのSEO/SEMスペシャリスト用UI（キーワードランキング表示、広告キャンペーン設定フォーム、パフォーマンスレポート表示など）をHTMLで作成し、対応するstyles.cssとapp.jsの雛形を作成してください。"

# Pane 5: Social (ソーシャルメディアマネージャー) - ソーシャルメディアマネージャーUI (HTML/CSS/JS)
claude -p "AI Marketing Teamアプリのソーシャルメディアマネージャー用UI（投稿スケジュール管理、エンゲージメント分析表示、対応プラットフォーム選択など）をHTMLで作成し、対応するstyles.cssとapp.jsの雛形を作成してください。"

# Pane 6: Analytics (データアナリスト) - データアナリストUI & data.txt (HTML/CSS/JS & データ構造)
claude -p "AI Marketing Teamアプリのデータアナリスト用UI（各種データソース接続設定、分析レポート表示、カスタムダッシュボード作成機能など）をHTMLで作成し、対応するstyles.cssとapp.jsの雛形を作成してください。また、data.txtファイル構造とサンプルデータを作成してください。エージェント名、タイプ（Orchestrator/Strategy/Content/SEO/Social/Analytics）、専門分野、ステータス、タスク履歴、KPI、連携ツール、作成日などの情報を含めてください。"

# styles.css (全体) - Pane 1 or 2で先行して実施も可
claude -p "AI Marketing Teamアプリ用のstyles.cssを作成してください。モダンで使いやすいUI、レスポンシブデザイン、AIエージェントカードレイアウト、ダッシュボード表示を含めてください。各エージェントタイプに応じた色分けも実装してください。"

# app.js (全体) - Pane 1 or 6で先行して実施も可
claude -p "AI Marketing Teamアプリのapp.jsを作成してください。data.txtに行単位でAIエージェント情報を保存・読込・削除・編集するJavaScriptコードを作成してください。localStorageでファイル操作をエミュレートしてください。6つのエージェントタイプの管理機能も含めてください。"


=======================
✅ Claudeレビュー
=======================
claude
/review

=======================
✅ Git操作
=======================
# 各ブランチでの作業例
# (feature-orchestrator)
git add .
git commit -m "feat: Add HTML structure for AI Marketing Team app orchestrator dashboard"
git push -u origin feature-orchestrator

# (feature-strategy)
git add .
git commit -m "feat: Implement Strategy Planner agent UI and basic logic"
git push -u origin feature-strategy

# (feature-content)
git add .
git commit -m "feat: Implement Content Creator agent UI and basic logic"
git push -u origin feature-content

# (feature-seo)
git add .
git commit -m "feat: Implement SEO/SEM Specialist agent UI and basic logic"
git push -u origin feature-seo

# (feature-social)
git add .
git commit -m "feat: Implement Social Media Manager agent UI and basic logic"
git push -u origin feature-social

# (feature-analytics)
git add .
git commit -m "feat: Implement Data Analyst agent UI, data structure and sample data"
git push -u origin feature-analytics


🌟この辺で Claude /initialize? で git link, PR? を自動作成. 🌟

=======================
🔁 GitHub PRに @claude
=======================
# PRコメント例
@claude このAI Marketing TeamアプリのPRのコードを確認して改善点を提案してください。

=======================
⚙ GitHub Actions CI
=======================
# .github/workflows/ci.yml
name: Claude CI/CD for AI Marketing Team

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  issue_comment:
    types: [created]

jobs:
  claude:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Claude
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          trigger_phrase: "@claude"

# Secrets に ANTHROPIC_API_KEY を設定（GitHub）

=======================
🚀 GitHub Pages デプロイ
=======================
# .github/workflows/deploy.yml
name: Deploy AI Marketing Team to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy static site
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: . # プロジェクトルートに index.html がある場合

# GitHub設定 → Pages → gh-pagesブランチ（またはmainブランチの /docs や /root）を公開元に設定


# 1. 現在の状況確認
git worktree list
git branch -a

# 2. feature-orchestratorワークツリーを削除 (例)
git worktree remove --force ../ai_marketing_team-orchestrator

# 3. ブランチを削除 (例)
git branch -D feature-orchestrator # ローカルブランチ削除
# git push origin --delete feature-orchestrator # リモートブランチ削除 (必要に応じて)

# 4. クリーンアップ
git worktree prune

# 5. 確認
git worktree list


=======================
🎉 完了！
=======================
**本開発フローの主目的である、**Claudeによる要件定義〜HTML/CSS/JS/Data作成〜レビュー、Git Worktree + tmux による6つのファイル/機能並列開発、GitHub Actions (Issues連携含む) + Pages によるCI/CD & 自動デプロイがすべて自動化される、AI駆動のAI Marketing Team開発環境が完成しました！

AI Marketing Team アプリ（デモサイト）はその環境構築のための具体的な実践プロジェクトです。

## AI Marketing Team アプリ概要
企業のマーケティング活動を包括的に支援する6つのAIエージェント管理システム：
- **オーケストレーター (Orchestrator Agent)**: 全体統括、タスク連携、進捗管理
- **戦略プランナー (Strategy Planner Agent)**: 市場分析、戦略立案、KPI設定
- **コンテンツクリエーター (Content Creator Agent)**: コンテンツ企画・制作、コピーライティング
- **SEO/SEMスペシャリスト (SEO/SEM Specialist Agent)**: SEO対策、広告運用最適化
- **ソーシャルメディアマネージャー (Social Media Manager Agent)**: SNS運用、エンゲージメント向上
- **データアナリスト (Data Analyst Agent)**: データ分析、効果測定、レポーティング

MVPデモサイトとして、LLM機能なしでダミーデータによる
AIエージェント管理機能を実装完了！ 