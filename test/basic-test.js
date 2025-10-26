const http = require('http');
const { spawn } = require('child_process');

console.log('🧪 Iniciando testes básicos...');

// Função para testar se o servidor responde
function testEndpoint(port = 3000) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: '/home',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.message === 'hello world') {
            console.log('✅ Endpoint /home retornou a resposta esperada');
            resolve(true);
          } else {
            console.log('❌ Resposta inesperada:', response);
            reject(new Error('Resposta inesperada do endpoint'));
          }
        } catch (error) {
          console.log('❌ Erro ao parsear resposta JSON:', error.message);
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      console.log('❌ Erro na requisição:', error.message);
      reject(error);
    });

    req.setTimeout(5000, () => {
      console.log('❌ Timeout na requisição');
      req.destroy();
      reject(new Error('Timeout'));
    });

    req.end();
  });
}

// Função principal de teste
async function runTests() {
  let serverProcess;

  try {
    console.log('🚀 Iniciando servidor...');

    // Iniciar o servidor
    serverProcess = spawn('node', ['server.js'], {
      stdio: 'pipe',
      cwd: process.cwd()
    });

    // Aguardar o servidor inicializar
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Testar o endpoint
    await testEndpoint();

    console.log('🎉 Todos os testes passaram!');
    process.exit(0);

  } catch (error) {
    console.log('💥 Testes falharam:', error.message);
    process.exit(1);
  } finally {
    // Parar o servidor
    if (serverProcess) {
      console.log('🛑 Parando servidor...');
      serverProcess.kill();
    }
  }
}

// Executar testes
runTests();
