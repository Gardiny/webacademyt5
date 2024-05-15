// let botao = document.querySelector('a#add');
// botao.addEventListener('click', () => {alert('Cliclado')});
// botao.addEventListener('click', funcaoA);
// botao.addEventListener('click', funcaoA);
// function funcaoA() {
//     alert('A');
// }
// function funcaoB() {
//     alert('B');
// }

let selectTema = document.querySelector('select#tema')
selectTema.addEventListener('change', evento => {
    let temaSelecionado = evento.target.value;
    console.log(temaSelecionado);
})