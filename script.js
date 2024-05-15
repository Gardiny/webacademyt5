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
    // console.log(temaSelecionado);
    if(temaSelecionado){mudaTema(temaSelecionado);}
    
    localStorage.setItem('tema', temaSelecionado)
});

const mudaTema = (temaSelecionado) => {
    let linkTema = document.querySelector('#link-tema');
    let url = "/css/estilo-tema-"+temaSelecionado+".css";
    linkTema.href = url;
}

let tema = localStorage.getItem('tema');
if(tema){
    mudaTema(tema);
}