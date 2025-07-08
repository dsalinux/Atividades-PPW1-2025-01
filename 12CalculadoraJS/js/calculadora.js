var valor1 = '';
var valor2 = '';
var operador = '';
var resultado = '';

document.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click', function() {
        adicionarNumero(btn.innerHTML);
        atualizarDisplay();
    });
});

function adicionarNumero(valor) {
    if(isNaN(valor)){
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            operador = valor;
        }
    } else {
        if(operador === '') {
            valor1 += valor;
        } else {
            valor2 += valor;
        }
    }
}

function atualizarDisplay() {
    var display = document.querySelector('.display');
    display.innerHTML = valor1 + ' ' + operador + ' ' + valor2;
}