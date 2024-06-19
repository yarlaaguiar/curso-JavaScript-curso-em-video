function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'IMPOSSIVEL CONTAR! '
        window.alert('[ERRO] Faltam dados!')
    }else{
       res.innerHTML = 'Contando: '
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       //CONTAGEM CRESCENTE 
       if(i < f ){
        for (let c = i ; c <= f ; c += p ){
            res.innerHTML += ` ${c} \u{1f449}`
           } 
       }else{
        //CONTAGEM REGRESSIVA
        for(let c = i ; c >= f ; c -= p ){
            res.innerHTML += ` ${c} \u{1f449}`
        }
       }
       res.innerHTML += ` \u{1f3c1}`
    }
    
}