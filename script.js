
const form = document.getElementById('formulario-saude');

const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const idadeInput = document.getElementById('idade');
const atividadeSelect = document.getElementById('atividade');
const getDisplay = document.getElementById('get-valor');
const tmbDisplay = document.getElementById('tmb-valor');

let generoSelecionado = 'masculino';


const botoesGenero = document.querySelectorAll('.btn-gender');

botoesGenero.forEach(botao => {
  
    botao.addEventListener('click', () => {
        botoesGenero.forEach(btn => btn.classList.remove('active'));
        botao.classList.add('active');
        generoSelecionado = botao.getAttribute('data-gender');
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);
    const idade = Number(idadeInput.value);
    const fatorAtividade = Number(atividadeSelect.value);

  
    if (!peso || !altura || !idade) {
        alert("Por favor, preencha todos os parâmetros biométricos.");
        return; 
    }

    let tmb;
    if (generoSelecionado === 'masculino') {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    const get = tmb * fatorAtividade;
    atualizarDisplay(tmb, get);
});

function atualizarDisplay(tmb, get) {
    tmbDisplay.textContent = Math.round(tmb).toLocaleString('pt-br');
    getDisplay.textContent = Math.round(get).toLocaleString('pt-br');
}