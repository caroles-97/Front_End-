// =====================================================================
// main.jsx — O PONTO DE PARTIDA DO PROJETO
// É o primeiro arquivo que roda. Ele pega o nosso app e coloca na tela.
// Você quase nunca vai precisar mexer aqui.
// =====================================================================

// "import" = trazer algo de outro arquivo ou de uma biblioteca para usar aqui.
// Biblioteca = código pronto que outras pessoas escreveram e a gente só usa.

// StrictMode = um "fiscal" do React. Ele avisa sobre erros enquanto
// você está programando. Não aparece nada dele na tela.
import { StrictMode } from 'react'

// createRoot = a ferramenta que liga o React à página HTML.
import { createRoot } from 'react-dom/client'

// Traz o arquivo de estilos (que carrega o Tailwind).
// Sem essa linha, nenhuma cor ou tamanho funcionaria.
import './index.css'

// Traz o componente App (o app inteiro, que está no arquivo App.jsx).
import App from './App.jsx'

// Lendo esta parte em português:
// 1. document.getElementById('root') -> "procure no index.html o lugar chamado root"
// 2. createRoot(...)                  -> "o React vai tomar conta desse lugar"
// 3. .render(...)                     -> "desenhe isto aqui dentro"
// 4. <App />                          -> o que será desenhado: o nosso app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
