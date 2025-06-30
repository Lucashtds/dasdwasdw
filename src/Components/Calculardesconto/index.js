import "./estilo.css"

function CalcularDesconto({Valorcompra,porcentagem,pagamento}){
   console.log("Valorcompra:" + Valorcompra)
   console.log("porcentagem:"+porcentagem)
   console.log("Tipo Pagamento:"+pagamento)

   let valorvenda=0.0;
    //a vista
    if(pagamento==1){
     valorvenda= Valorcompra-(Valorcompra * (porcentagem/100))
    }
  
    //a prazo
    if(pagamento==2){
    valorvenda= Valorcompra +(Valorcompra * (porcentagem/100))
    }
    
    return(
        <div className="calculadoraDesconto">
        <h1>Calculadora financeira</h1>
        <h2>Valor Compra:R${1500}</h2>
        <p>Forma de pagamento:{pagamento== 1 ? "A vista": "A prazo"}</p>
        <h2>Valor de Venda: R${1350}</h2>
        </div>
    )
}

export default CalcularDesconto;