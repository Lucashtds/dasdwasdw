

import Card from './Card';
import Menu from './Menu';

export default function Header() {
   const Biografia= "Aluno de tecnologia"
    return (
        <div>
 
                <Card 
                 fotoperfil="pessoa.png"
                 Nome= "Lucas H."
                 Biografia= {Biografia}
                 />
<Menu/>
                 </div>

                )
   }