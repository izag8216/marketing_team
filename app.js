document.addEventListener('DOMContentLoaded', () => {
    const agentCardsContainer = document.querySelector('#agents .agent-cards-container');
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Theme';
    themeToggleButton.id = 'theme-toggle-button'; // IDを設定
    // CSSでスタイリングするため、JSでの直接的なスタイル設定は削除またはコメントアウト
    // themeToggleButton.style.position = 'fixed';
    // themeToggleButton.style.top = '10px';
    // themeToggleButton.style.right = '10px';
    document.body.insertBefore(themeToggleButton, document.body.firstChild); // ヘッダー内やフッターなど、より適切な場所に配置することも検討

    // 1. data.txt からエージェント情報を読み込む (fetch API を使用)
    async function loadAgentData() {
        try {
            const response = await fetch('data.txt');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const textData = await response.text();
            const lines = textData.trim().split('\n');
            
            const agents = lines.map(line => {
                const [name, type, specialty, status, tasks, kpi, linked_tools, created_at, monthly_active_tasks] = line.split(',');
                return { name, type, specialty, status, tasks, kpi, linked_tools, created_at, monthly_active_tasks };
            });
            // console.log('AI Agents Loaded:', agents);
            displayAgents(agents);
        } catch (error) {
            console.error('Error loading agent data:', error);
            if (agentCardsContainer) {
                agentCardsContainer.innerHTML = '<p>Failed to load agent data.</p>';
            }
        }
    }

    // 2. エージェント情報をHTMLに表示する
    function displayAgents(agents) {
        if (!agentCardsContainer) return;
        agentCardsContainer.innerHTML = ''; // Clear existing cards

        agents.forEach(agent => {
            const card = document.createElement('div');
            card.classList.add('agent-card', agent.type.toLowerCase());
            
            // エージェントタイプバッジを追加
            const badge = document.createElement('span');
            badge.classList.add('agent-type-badge');
            badge.textContent = agent.type;

            card.innerHTML = `
                <h3>${agent.name}</h3>
                <p class="agent-specialty"><strong>Specialty:</strong> ${agent.specialty}</p>
                <p><strong>Status:</strong> ${agent.status}</p>
                <p><strong>Key Tasks:</strong> ${agent.tasks}</p>
                <p><strong>Monthly Active Tasks:</strong> ${agent.monthly_active_tasks}</p>
                <p><strong>KPI:</strong> ${agent.kpi}</p>
                <div class="agent-details">
                    <p><strong>Linked Tools:</strong> ${agent.linked_tools}</p>
                    <p><small>Registered: ${agent.created_at}</small></p>
                </div>
            `;
            // バッジをカードの先頭に追加（h3の前など、デザインに応じて調整）
            card.insertBefore(badge, card.firstChild);
            agentCardsContainer.appendChild(card);
        });
    }

    // 3. ライト/ダークモード切り替え機能
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        // Optionally, save theme preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }

    themeToggleButton.addEventListener('click', toggleTheme);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 初期データロード
    loadAgentData();

    //ダミーのCRUD関数 (localStorageを利用したエミュレーション)
    // 将来的にこれらの関数を拡充して、画面上のUIと連携させる
    function addAgent(agentData) {
        // localStorageから現在のエージェントリストを取得 (文字列として保存されている想定)
        let agentsText = localStorage.getItem('agentsData');
        if (!agentsText) agentsText = '';
        // 新しいエージェントデータを追加
        const newAgentLine = `${agentData.name},${agentData.type},${agentData.specialty},${agentData.status},${agentData.tasks},${agentData.kpi},${agentData.linked_tools},${agentData.created_at},${agentData.monthly_active_tasks}`;
        const updatedAgentsText = agentsText ? `${agentsText}\n${newAgentLine}` : newAgentLine;
        localStorage.setItem('agentsData', updatedAgentsText);
        console.log('Agent added (emulated):', agentData);
        // 画面も更新 (loadAgentDataを再度呼び出すか、直接DOM操作)
        loadAgentData(); // 再読み込みして表示更新
    }

    function editAgent(agentName, updatedData) {
        // 簡単な例として、名前で検索して最初のマッチを更新
        let agentsText = localStorage.getItem('agentsData');
        if (!agentsText) return;
        let lines = agentsText.split('\n');
        const agentIndex = lines.findIndex(line => line.startsWith(agentName + ','));
        if (agentIndex > -1) {
            lines[agentIndex] = `${updatedData.name},${updatedData.type},${updatedData.specialty},${updatedData.status},${updatedData.tasks},${updatedData.kpi},${updatedData.linked_tools},${updatedData.created_at},${updatedData.monthly_active_tasks}`;
            localStorage.setItem('agentsData', lines.join('\n'));
            console.log('Agent edited (emulated):', updatedData);
            loadAgentData();
        }
    }

    function deleteAgent(agentName) {
        let agentsText = localStorage.getItem('agentsData');
        if (!agentsText) return;
        let lines = agentsText.split('\n');
        const updatedLines = lines.filter(line => !line.startsWith(agentName + ','));
        localStorage.setItem('agentsData', updatedLines.join('\n'));
        console.log('Agent deleted (emulated):', agentName);
        loadAgentData();
    }

    // CRUD操作のダミー呼び出し例 (開発中にテストするため)
    // setTimeout(() => {
    //     addAgent({
    //         name: 'テストエージェント',
    //         type: 'Test',
    //         specialty: 'テスト業務',
    //         status: 'アクティブ',
    //         tasks: 'テストタスク実行',
    //         kpi: 'テスト成功率100%',
    //         linked_tools: 'TestTool',
    //         created_at: new Date().toISOString().split('T')[0]
    //     });
    // }, 3000);

}); 