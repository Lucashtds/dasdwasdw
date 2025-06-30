import { useState } from "react";

export default function produto(){
  
   const [produtos,setProdutos]=useState(
   [
    {codigo: 12,
     nomeProduto:'café',
     preço:34.98,
     quantidadeEstoque: 15
},
    {
codigo:15,
nomeProduto:'coca-cola',
descriçao: '2l-embalagem retornavel',
preço:7.99,
quantidadeEstoque:15
    }
   ]
   )
    return(
        <div>
        <table>
            <th>CODIGO</th>
            <th>PRODUTO</th>
            <th>DESCRIÇAO</th>
            <th>PREÇO</th>
            <th>ESTOQUE</th>
      {  produtos.map(  
     (item,index)=>(
     <tr key={index}>
        <td>{item.codigo}</td>
         <td>{item.nomeProduto}</td>
          <td>{item.descriçao}</td>
           <td>{item.preço}</td>
            <td>{item.estoque}</td>
     </tr>
     )
    )
      }  
        </table>
        </div>
    );
}