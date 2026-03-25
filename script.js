async function calcular() {

    try {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);

        const response = await fetch('http://127.0.0.1:8000/calcular', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                peso: peso,
                altura: altura
            })
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if (data.imc !== null) {
            document.getElementById('resultado').innerText = `IMC: ${data.imc.toFixed(2)}`;
        } else {
            document.getElementById('resultado').innerText = 'Erro ao calcular';
        }


    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
}