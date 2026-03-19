// motor.js
function lanzarDesafio(banco) {
    // 1. Ocultar la solución anterior
    const box = document.getElementById('solution-box');
    box.style.display = 'none';
    
    // 2. Elegir una pregunta al azar
    const p = banco[Math.floor(Math.random() * banco.length)];
    
    // 3. Validar que la pregunta tenga los datos necesarios
    if (!p.q || !p.pasos || !p.r) {
        alert("¡Error! Esta pregunta está incompleta.");
        return;
    }

    // 4. Mostrar la pregunta
    document.getElementById('exercise').innerHTML = `\\[ ${p.q} \\]`;
    
    // 5. Preparar la solución (usando estrategia si existe, si no, un mensaje genérico)
    const estrategiaTexto = p.estrategia ? p.estrategia : "Analiza la propiedad matemática aplicada.";
    
    document.getElementById('steps').innerHTML = `
        <div style="font-size: 1.1rem; line-height: 1.6;">
            <strong>Estrategia:</strong> ${estrategiaTexto}
            <hr style="border: 0.5px solid var(--gold); margin: 15px 0;">
            \\[ \\begin{aligned} ${p.pasos} \\end{aligned} \\]
            <div style="margin-top: 20px; color: var(--gold); text-align: center;">
                <strong>Resultado:</strong> \\[ ${p.r} \\]
            </div>
        </div>
    `;
    
    // 6. Actualizar MathJax
    MathJax.typesetPromise();
}


function alternarSolucion() {
    const box = document.getElementById('solution-box');
    // Si está oculto, lo muestra; si está visible, lo oculta
    box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
}