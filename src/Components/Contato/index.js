 import{useState} from "react"

export default function Contato(){
const [nome, setNome]= useState('')
const [email, setEmail]= useState('')
const [Comentário, setComentário]= useState('')

    return(
        <div>
       <h1>Formulário de contato</h1>
    <p> Entre com os dados solicitados abaixo, que em breve estaremos
         entrando em contato.
         </p>
        <form>
            <label>Nome:</label>
            <input type="text" value={nome} onChange= {(e) =>setNome(e.target.value)}/>
           
            <label>E-mail:</label>
           <input type="text" value={email} onChange= {(e)=> setEmail(e.target.value)}/>
           
           <label>Comentário</label>
           <textarea value={Comentário} onchange= {(e) => setComentário (e.target.value)}/>
        </form>
        <p>
        olá <strong>{nome}</strong>, em breve você receberá
        um e-mail no endereço <strong>{email}</strong> sobre o seu 
        comentario <strong>{Comentário}</strong>
        </p>
        </div>
    )
}

//export default contato;