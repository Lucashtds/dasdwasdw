function Card(props){
    
    return(
        <div>
       <img src={props.fotoperfil}/>
       <h1>{props.Nome}</h1>
       <p>{props.Biografia}</p>
        </div>
    )
  
      
}
export default Card;