

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Sobre from'./Components/Sobre';

import Header from './Components/Header';
import CalcularDesconto from './Components/Calculardesconto';
import Contato from './Components/Contato';

function App() {
   const Biografia= "Aluno de tecnologia"
    return (
        <BrowserRouter><div>
            <Header/>

            <main>
                <section>
                    <h1>projetos</h1>
                <CalcularDesconto
                    valorcompra={1500}
                    porcentagem={10}
                    pagamento={1}
                    />
                  
                    
                    <Routes>
                    <Route path='/' element={<Home/>}exact></Route>
                    <Route path='/sobre' element={<Sobre/>} />
                    <Route path='/Produtos'element={<Produtos/>}></Route>
                    <Route path='/contato' element={<Contato/>}/>
                    <Route path='/calculardesconto' element={<CalcularDesconto
                    valorcompra={1500}
                    porcentagem={10}
                    pagamento={1}
                    />}/>
                    </Routes>
               
                </section>
            </main>
            <footel>
                <p>desenvolvido por: Lucas Henrique -2025</p>
            </footel>
        </div></BrowserRouter>
    );
}

export default App;
