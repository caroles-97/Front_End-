// Formulário com 3 campos

// =====================================================================
// Contato.jsx — A PÁGINA DE CONTATO
// Aparece quando o endereço é "/contato".
// Tem um formulário com 3 campos: nome, e-mail e mensagem.
// Diferente das outras páginas, esta precisa LEMBRAR o que a pessoa digita.
// Para isso usamos o useState (a "memória" do componente).
// =====================================================================

// Traz o React e também o useState.
// As chaves { } querem dizer: "da biblioteca react, quero só o useState".
import React, {useState} from 'react'

const Contato = () => {
    // criando lógica

    // ---------- AS 3 "MEMÓRIAS" DO FORMULÁRIO ----------
    // Cada linha cria uma memória. Leia assim:
    //   const [valor, funçãoQueTrocaOValor] = useState(valorInicial);
    //
    // - nome      -> o que está guardado (começa vazio: '')
    // - setNome   -> a função que troca o valor guardado
    // - useState('') -> "crie uma memória começando com texto vazio"
    //
    // Quando a memória muda, o React redesenha a tela sozinho.
    //
    // 💡 DICA: o nome da função precisa ser escrito IGUAL em todo o arquivo.
    // Aqui ela é "setNome" (s minúsculo) e é usada com o mesmo nome
    // no onChange do campo Nome e no handleSubmit.
    // Para o JavaScript, maiúscula e minúscula são nomes DIFERENTES:
    // "SetNome" e "setNome" seriam duas coisas distintas (e dariam erro).
    const [nome, setNome] = useState ('');
    // memória do e-mail
    const [email, setEmail] = useState('');
    // memória da mensagem
    const [mensagem, setMensagem] = useState('');

    // ---------- O QUE ACONTECE AO CLICAR EM "ENVIAR" ----------
    // handleSubmit é só um nome que NÓS escolhemos ("cuidar do envio").
    // "e" = o EVENTO: um pacote de informações sobre o que aconteceu (o clique de enviar).
    const handleSubmit = (e) => {
        // Por padrão, enviar um formulário RECARREGA a página (e tudo seria apagado).
        // preventDefault = "impeça o comportamento padrão" -> a página NÃO recarrega.
        e.preventDefault();
        // alert = abre uma janelinha do navegador com a mensagem.
        // O texto está entre crases ` ` para poder colocar a variável dentro com ${ }.
        // Ex.: se nome = 'Ana' -> "Obrigada, Ana! Mensagem enviada!"
        alert(`Obrigada, ${nome}! Mensagem enviada!`);
        // Limpa os 3 campos (volta tudo para texto vazio '').
        setNome('');
        setEmail('');
        setMensagem('');
    }


  // ---------- O QUE APARECE NA TELA ----------
  return (
    // p-8 -> espaço interno | max-w-md -> largura limitada | mx-auto -> centralizado
    <div className='p-8 max-w-md mx-auto'>
        {/* Título da página: grande (text-4xl), negrito (font-bold)
            e roxo claro (text-purple-400). O número (400) é a "força" da cor:
            quanto maior, mais escura (ex.: 600 é mais escuro que 400). */}
        <h1 className='text-4xl font-bold text-purple-400 mb-6'>
            Contato
        </h1>

        {/* <form> = formulário.
            onSubmit={handleSubmit} -> "quando o formulário for enviado, rode a função handleSubmit".
            space-y-4 -> espaço entre cada campo */}
        <form onSubmit={handleSubmit} className='space-y-4'>

            {/* ---------- CAMPO NOME ---------- */}
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    {/* label - rótulo para input (usuário) */}
                    Nome:
                </label>
                {/* <input> = caixinha onde o usuário digita. Explicando cada parte:
                    type='text'   -> campo de texto comum
                    value={nome}  -> a caixinha MOSTRA o que está guardado na memória "nome"
                    onChange={...}-> "toda vez que a pessoa digitar, rode isto":
                        (e) => setNome(e.target.value)
                        e              -> o evento (o que aconteceu: a pessoa digitou)
                        e.target       -> a caixinha onde ela digitou
                        e.target.value -> o texto que está escrito na caixinha
                        setNome(...)   -> guarda esse texto na memória "nome"
                    placeholder   -> texto cinza de exemplo, some quando você digita
                    required      -> campo obrigatório (o navegador não deixa enviar vazio)

                    Caminho de cada letra digitada:
                    pessoa digita -> onChange roda -> memória atualiza -> caixinha mostra o texto */}
                <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Seu nome' required className='w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500'/>
                 {/* onChange - para capturar as mudanças (value) */}
            </div>

            {/* ---------- CAMPO E-MAIL ----------
                Funciona igual ao campo Nome, mas:
                - type='email' -> o navegador confere se tem cara de e-mail (precisa ter @)
                - guarda o texto na memória "email" usando setEmail */}
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    {/* label - rótulo para input (usuário) */}
                    E-mail:
                </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='seu@email.com' required className='w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500'/>
                 {/* onChange - para capturar as mudanças (value) */}
            </div>

            {/* ---------- CAMPO MENSAGEM ----------
                <textarea> = caixa de texto GRANDE (para textos com várias linhas).
                Funciona igual aos outros campos, guardando na memória "mensagem". */}
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    {/* label - rótulo para input (usuário) */}
                    Mensagem:
                </label>
                <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder='Sua mensagem ...' required className='w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500'/>
                 {/* onChange - para capturar as mudanças (value) */}
            </div>

            {/* Botão para enviar os dados */}
            {/* type='submit' -> este botão ENVIA o formulário (e isso faz o onSubmit rodar).
                w-full -> ocupa a largura toda
                bg-fuchsia-400 -> fundo rosa/fúcsia | text-white -> letra branca
                hover:bg-pink-400 -> ao passar o mouse, o fundo fica rosa
                transition-colors -> a troca de cor acontece suavemente */}
            <button type='submit' className='w-full bg-fuchsia-400 text-white py-3 px-4 rounded-lg hover:bg-pink-400 transition-colors font-semibold'>
                Enviar mensagem
            </button>


        </form>
    </div>
  )
}

// Deixa o Contato disponível para o App.jsx usar.
export default Contato
