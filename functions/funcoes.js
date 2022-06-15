console.log("Barbearia do Alonso, fundada em 2019!");
// Tem pezinho de graça no próximo corte ? 
const corteDeCabelo = (cortesMes) => {
    if(cortesMes>5){
        return `O cliente cortou ${cortesMes} vezes e pode fazer o pezinho de graça.`;
    }else{
        return `Não tem pezinho de graça. `;
    }
}
console.log(corteDeCabelo(6));

//Desconto para clientes fiéis
let corteNormal = 30;
let desconto = 0.3;
let valorACobrar = corteNormal-(corteNormal*desconto);

const descontoFidelidade=(clienteDesdeAno)=>{
    for (let i = 2019; i < clienteDesdeAno; i++) {
        console.log(`O cliente corta desde o ano ${clienteDesdeAno}`);
    }
    if (clienteDesdeAno > 3) {
        console.log("Cliente a mais de 3 anos!");
        console.log("Oferecer desconto de: "+ (corteNormal*desconto)+" reais!");
        console.log("Valor a cobrar: " + valorACobrar + " reais!!");
    } else {
        console.log("O cliente não corta a mais de 3 anos.");
    }
}
console.log(descontoFidelidade(2022));


