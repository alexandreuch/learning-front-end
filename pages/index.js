import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [cont,setContador] = useState(1);
    
    function adicionarContador(){
        setContador(cont+1);
    }

    return(
        <div>
            <div>{cont}</div>
            <button onClick={adicionarContador}>Adicionar</button> 
        </div>
    )
}

export default Home