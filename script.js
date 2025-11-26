const form = document.querySelector('form');

function converterTempoParaDecimal(tempoString) {
    const [hStr, mStr] = (tempoString || "00:00").split(":");
    
    const h = Number(hStr) || 0;
    const m = Number(mStr) || 0;
    
    return h + m / 60;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valorHoraInput = document.getElementById('valorHora').value;
    
    valorHoraInput = valorHoraInput.replace(',', '.'); 
    
    const valorHora = parseFloat(valorHoraInput);

    if (isNaN(valorHora) || valorHora <= 0) {
        alert("Por favor, preencha o campo 'Pagamento por hora Trabalhada' com um valor decimal válido (Ex: 15.50 ou 15,50).");
        return; 
    }

    const horasTrabalhadasStr = document.getElementById('horasTrabalhadas').value;
    const horaExtra50Str = document.getElementById('horaExtra50').value;
    const horaExtra100Str = document.getElementById('horaExtra').value;

    const totalHoras = converterTempoParaDecimal(horasTrabalhadasStr);
    const totalExtra50 = converterTempoParaDecimal(horaExtra50Str);
    const totalExtra100 = converterTempoParaDecimal(horaExtra100Str);
    
    const salario = totalHoras * valorHora;
    const adicional50 = totalExtra50 * valorHora * 1.5;
    const adicional100 = totalExtra100 * valorHora * 2.0;

    const salarioTotal = salario + adicional50 + adicional100;

    alert("Salário Total: R$ " + salarioTotal.toFixed(2));
});