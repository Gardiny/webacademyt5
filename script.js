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

// const carregarProfissionais = () =>{
//     let url = "http://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     let tabela = document.querySelector('table');
//     xhr.addEventListener('readystatechange', () => {
//         if(xhr.readyState === 4 && xhr.status === 200){
//             dados = JSON.parse(xhr.responseText);
//             // console.log(dados);
//             for (const item of dados){
//                 //criando os elementos html
//                 let linha = document.createElement('tr');
//                 let id = document.createElement('td');
//                 let registroConselho = document.createElement('td');
//                 let telefone = document.createElement('td');
//                 let email = document.createElement('td');
//                 let unidade = document.createElement('td');
//                 let especialidade = document.createElement('td');
//                 let acoes = document.createElement('td');
//                 //preencher os elementos
//                 id.textContent = item.id
//                 nome.textContent = item.nome
//                 registroConselho.textContent = item.registro
//                 email.textContent = item.email
//                 telefone.textContent = item.telefone
//                 unidade.textContent = item.unidade
//                 especialidade.textContent = item.especialidade
//                 acoes.innerHTML = '<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao" href="javascript:void(0)">Excluir</a>';
//                 //PREENCHER A LINHA
//                 linha.appendChild(id);
//                 linha.appendChild(nome);
//                 linha.appendChild(registroConselho);
//                 linha.appendChild(telefone);
//                 linha.appendChild(email);
//                 linha.appendChild(unidade);
//                 linha.appendChild(especialidade);
//                 linha.appendChild(acoes);
//                 //Preencher a tabela com uma linha
//                 tabela.tBodies[0].appendChild(linha);
//             }

//         }
//     });
//     xhr.send();
// };

const carregarProfissionais = () =>{
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    let tabela = document.querySelector('table');
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            let dados = JSON.parse(xhr.responseText);
            // console.log(dados);
            for(const item of dados){
                //Criando as colunas da página profissionais
                let linha = document.createElement('tr');
                let id= document.createElement('td');
                let nome = document.createElement('td');
                let registroConselho = document.createElement('td');
                let email = document.createElement('td');
                let telefone = document.createElement('td');
                let unidade = document.createElement('td');
                let especialidade = document.createElement('td');
                let acoes = document.createElement('td');
                //preenchendo os elementos
                id.textContent = item.id
                nome.textContent = item.nome
                registroConselho.textContent = item.registro
                email.textContent = item.email
                telefone.textContent = item.telefone
                unidade.textContent = item.unidade
                especialidade.textContent = item.especialidade
                acoes.innerHTML = '<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao" href="javascript:void(0)">Excluir</a>';
                //Preenchendo a linha agora kkkk :)
                linha.appendChild(id);
                linha.appendChild(nome);
                linha.appendChild(registroConselho);
                linha.appendChild(email);
                linha.appendChild(telefone);
                linha.appendChild(unidade);
                linha.appendChild(especialidade);
                linha.appendChild(acoes);
                //Preenchendo a tabela com uma linha da tabela
                tabela.tBodies[0].appendChild(linha);
        }
    }
    });
    xhr.send();    
};
carregarProfissionais();

let botaoExcluir = document.querySelector('a.botao#vermelho');
botaoExcluir.addEventListener('click', () => {
    console.log
});