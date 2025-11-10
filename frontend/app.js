// Configuração da API
const API_BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'http://backend:3000';

// Verificar status do backend
async function checkBackendStatus() {
    const statusElement = document.getElementById('backend-status');
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        if (response.ok) {
            statusElement.textContent = '✓ Online';
            statusElement.className = 'status-value online';
        } else {
            throw new Error('Backend não respondeu');
        }
    } catch (error) {
        statusElement.textContent = '✗ Offline';
        statusElement.className = 'status-value offline';
        console.error('Erro ao verificar status do backend:', error);
    }
}

// Carregar usuários
async function loadUsers() {
    const loadingEl = document.getElementById('users-loading');
    const errorEl = document.getElementById('users-error');
    const listEl = document.getElementById('users-list');

    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';
    listEl.innerHTML = '';

    try {
        const response = await fetch(`${API_BASE_URL}/api/users`);
        if (!response.ok) throw new Error('Erro ao carregar usuários');

        const data = await response.json();
        loadingEl.style.display = 'none';

        if (data.success && data.data.length > 0) {
            data.data.forEach(user => {
                const card = createUserCard(user);
                listEl.appendChild(card);
            });
        } else {
            listEl.innerHTML = '<p>Nenhum usuário encontrado.</p>';
        }
    } catch (error) {
        loadingEl.style.display = 'none';
        errorEl.textContent = `Erro: ${error.message}. Verifique se o backend está rodando.`;
        errorEl.style.display = 'block';
        console.error('Erro ao carregar usuários:', error);
    }
}

// Criar card de usuário
function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-title">${user.name}</div>
        <div class="card-info">
            <div class="info-row">
                <span class="info-label">ID:</span>
                <span class="info-value">#${user.id}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">${user.email}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Cargo:</span>
                <span class="badge badge-role">${user.role}</span>
            </div>
        </div>
    `;
    return card;
}

// Carregar produtos
async function loadProducts() {
    const loadingEl = document.getElementById('products-loading');
    const errorEl = document.getElementById('products-error');
    const listEl = document.getElementById('products-list');

    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';
    listEl.innerHTML = '';

    try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('Erro ao carregar produtos');

        const data = await response.json();
        loadingEl.style.display = 'none';

        if (data.success && data.data.length > 0) {
            data.data.forEach(product => {
                const card = createProductCard(product);
                listEl.appendChild(card);
            });
        } else {
            listEl.innerHTML = '<p>Nenhum produto encontrado.</p>';
        }
    } catch (error) {
        loadingEl.style.display = 'none';
        errorEl.textContent = `Erro: ${error.message}. Verifique se o backend está rodando.`;
        errorEl.style.display = 'block';
        console.error('Erro ao carregar produtos:', error);
    }
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-title">${product.name}</div>
        <div class="card-info">
            <div class="info-row">
                <span class="info-label">Preço:</span>
                <span class="price">R$ ${product.price.toFixed(2)}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Categoria:</span>
                <span class="badge badge-category">${product.category}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Estoque:</span>
                <span class="badge badge-stock">${product.stock} unidades</span>
            </div>
        </div>
    `;
    return card;
}

// Gerenciar abas
function showTab(tabName) {
    // Remover classe active de todas as abas
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Adicionar classe active na aba selecionada
    event.target.classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');

    // Carregar dados da aba
    if (tabName === 'users') {
        loadUsers();
    } else if (tabName === 'products') {
        loadProducts();
    }
}

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', () => {
    checkBackendStatus();
    loadUsers();

    // Verificar status do backend a cada 30 segundos
    setInterval(checkBackendStatus, 30000);
});
