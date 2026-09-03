// Componente começa com importação 

const Card = () => {
    //logica
    return(
        //aqui vou passar HTML (só funciona dentro () no jsx
        //preciso ter elemento pai, para colocar elementos filhos

        //toda class terá sufixos pré-definidos

        //*  atributo className para passar a classe. Criando ELEMENTO-PAI
        //elemento pai - div pai
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden" >
            {/* TailWind intellisense - extensão */}
            <img src="https://picsum.photos/id/237/200/300" 
            alt="Imagem Ilustrativa"
            className="w-full h-60 object-cover"/>
            {/* object-cover: img se ajusta a tela */}

            {/* DIV FILHO */}
            <div className="p-6 text-center">
                {/* p-numero: padding - margem interna */}

                <h2 className="text-2xl font-bold text-[#ff6678]">Título do Card</h2>

                <p className="text-gray-600 mt-3"> Esta é uma descrição de exemplo para mostrar como o 
                    Tailwind facilita a estilização
                </p>
                {/* texto cinza, margem topo */}


                <button className="mt-5 w-full bg-blue-500 text-white  py-3  rounded-lg  text-lg font-semibold hover: bg-blue-950 transition duration-300">
                    Saiba mais
                </button>

            </div>
        </div>
    );
};

export default Card;