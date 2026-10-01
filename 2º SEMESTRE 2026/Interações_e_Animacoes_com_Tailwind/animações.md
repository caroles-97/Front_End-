~~~~Animações no Tailwind é feito com JS ou CSS~~~~
Inserimos dentro do <head>

🧁🌅Animação Tailwind + JS 

<script>
        tailwind.config = {
            theme: {
                extend: {
                    keyframes: {
                        fade: {
                            '0%': {opacity:'0'}, 
                            '100%': {opacity:'1'},
                        },
                        wiggle: {
                            '0%, 100%': {transform: 'rotate(-3deg)'}, 
                            '50%': {transform: 'rotate(3deg)'},
                        },
                    },
                    animation: {
                        fade: 'fade 1s ease-in-out infinite',
                        // tempo total da animação
                        wiggle: 'wiggle 0.5s ease-in-out infinite'
                    }

                }
            }
            // dentro da chave, passamos outro objeto. Criando animações com tailwind + JS
        }
    </script>


     🎇✨O(∩_∩)O <!-- Animação em CSS com Tailwind -->
     
        <style type="text/tailwindcss">
            @layer utilities     *vamos usar uma camada de utilidades*
                @keyframes fade { /*@keyframes: CSS, determina a passagem de tempo da animação, personalizar as animações*/
                    0% {opacity: 0;}
                    100% {opacity:1;}
                }
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-3deg); }
                    50% {transform: rotate(3deg);}
                }
                .animate-fadeCaroles {
                    animation: fade 1s ease-in-out infinite;
                }
                .animate-wiggle {
                    animation: wiggle 0.5s ease-in-out infinite;
                }
            }

        </style>

    