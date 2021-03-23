var checkbox = document.getElementById('botao'); //seleciona o checkbox, no html, cujo ID é botao
var texto = document.querySelector('h3');

checkbox.onclick = function() { //identifica o click no checkbox
    mudarCor();
}


function mudarCor() {
        const loop = setInterval(function() {
            if (checkbox.checked == true ){
                texto.innerHTML = "Desligue e relaxe";
                let cores = '#' + Math.floor(Math.random() * (0xffffff+1)).toString(16).padStart(6, '0');
                /* math.floor remove a parte decimal do numero gerado pela função Math.random, que gera um numero pseudo aleatorio. 
                Por padrão a math.random gera um numero aleatorio no intervalo [0, 1[, por isso, a função foi multiplicada por (0xffffff), para definir o intervalo (entre 0 e ffffff, com o ultimo excluído, por isso soma-se +1). 
                Depois, a função toString transforma o numero gerado em string e o 16, definiu a base utilizada para representar, no caso, hexadecimal.
                A função padStart, vai se certificar de que a string gerada tenha sempre 6 dígitos, mesmo que o random gere um numero inferior a 0x100000      
                */
                document.body.style.backgroundColor = cores; //altera a cor do background do body
            } else { 
                texto.innerHTML = "Ligue e aproveite =)"
                clearInterval(loop);
            }  //se o checkbox nao tiver marcado, esse metodo irá parar o intervalo de tempo e deixar o background na cor atual.          
        }, 1000);     
}










