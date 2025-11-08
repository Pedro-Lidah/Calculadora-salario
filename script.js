const form = document.querySelector('form');
const calcular = document.getElementById('botaoCalcular');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const horasTrabalhadas = document.getElementById('horasTrabalhadas').value;
    const horaExtra = document.getElementById('horaExtra').value || "00:00";
    const horaExtra50 = document.getElementById('horaExtra50').value || "00:00";
    const valorHora = parseFloat(document.getElementById('valorHora').value);

    const [hTrab, mTrab] = horasTrabalhadas.split(":").map(Number);
    const totalHoras = hTrab + mTrab / 60;

    const [hExtra50, mExtra50] = horaExtra50.split(":").map(Number);
    const totalExtra50 = hExtra50 + mExtra50 / 60;

    const [hExtra100, mExtra100] = horaExtra.split(":").map(Number);
    const totalExtra100 = hExtra100 + mExtra100 / 60;

    const salario = totalHoras * valorHora;
    const adicional50 = totalExtra50 * valorHora * 1.5;
    const adicional100 = totalExtra100 * valorHora * 2.0;

    const salarioTotal = salario + adicional50 + adicional100;

    alert("Salário Total: R$ " + salarioTotal.toFixed(2));
});
