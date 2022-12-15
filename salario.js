
const btn = document.getElementById('res');
btn.addEventListener("click" , function(e){
    e.preventDefault();
})

function resultado () {
    
    const tot_vendas = document.getElementById('vendas').value;
    const empregados = document.getElementById('empregados').value;
    const custo = document.getElementById('custo').value;
    const salario = document.getElementById('salario').value;

    const vendas = tot_vendas*custo;
    const comissao = (vendas*0.15) / empregados; 
    document.getElementById('comissao').innerHTML = `Valor da comissão de cada funcionário: ${comissao}`;
    const liquido = (vendas*0.5) - vendas*0.15;
    const sal_atual = parseInt(comissao) + parseInt(salario);
    document.getElementById('sal_atual').innerHTML = `Salário de cada funcionário com comissão: ${sal_atual}`;
    document.getElementById('liquido').innerHTML = `O valor líquido arrecadado pela loja foi de: ${liquido}`;
    
}




