**Interações com Tailwind**

bg-blue-500 hover:bg-blue-700 focus:ring-4 active:bg-blue-900 text-whitefont-bold py-2 px-4 rounded
- Cor padrão 
- Muda cor ao passar o mouse
- Borda ao redor do item 
- Active: mudar o item após pressionar

☆*: .｡. o(≧▽≦)o .｡.:*☆ 🎉✨✨ <!-- Windowns + . para abrir os emojis -->

*Interações do Tailwind*
hover
active 
focus
checked







const btn = document.getElementById('toogle-dark');
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');

~~~~            Resumo simples - O código diz:      ~~~~
Pegue o botão
Quando ele for clicado
Adicione ou remova a classe dark no elemento principal da página
O Tailwind percebe essa mudança
A página muda de claro para escuro (ou vice-versa)

“Eu tenho um botão. Quando alguém clica nele, o JavaScript olha o elemento html da página. Se a classe dark estiver faltando, ele coloca. Se já estiver, ele tira. Como o Tailwind foi configurado para usar darkMode: 'class', isso faz a página trocar de tema.”