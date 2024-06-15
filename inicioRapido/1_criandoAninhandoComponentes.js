//As aplicações React são compostas por componentes
//um componente é uma parte da IU
//Componentes são funções JS que retornam marcação(markup)

function MyButton(){
    return (
        <button>Eu sou um botão</button>
    )
}

//Um componente pode ser aninhado em outro componente:

export default function MyApp() {
    return (
        <div>
            <h1>Bem-vindo ao meu aplicativo</h1>
            <MyButton />
        </div>
    );
}

// A palavra-chave export default especifica o componente principal no arquivo.


