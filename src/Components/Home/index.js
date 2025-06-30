import{useState} from "react";

function Home(){
  //hooks
  const [titulo,setTitulo] = useState('Página Inicial di site - 2025');
  const [descriçao,setDescriçao]= useState('Descriçao da Página home - 2025')
  const[ativo,setAtivo]= useState(false)
  
  return(
        <div>
            {
            ativo?
            <div><h2>{titulo}</h2>
            <p><h2>{descriçao}</h2></p>
              
            </div>
            :
            <div>
                <h2>Outra coisa</h2>
                <p>Outra coisa</p>
            </div>
           }
           </div>
  )
}
export default Home;