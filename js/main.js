const equipos = [
    "Soldati", "Los Vicios", "Almirante", "Centenario", "La Union", 
    "Deportivo Entusiasmo", "420 FC", "Juventud", "Rosario de la Frontera", "Vulkano"
];

let tablaPosiciones = {
    "Soldati": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "Los Vicios": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "Almirante": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "Centenario": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "La Union": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "Deportivo Entusiasmo": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "420 FC": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "Juventud": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "Rosario de la Frontera": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 },
    "Vulkano": { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 }
};

const resultados = {
    "2024-04-01": [
        { equipo1: "Almirante", goles1: 3, equipo2: "Juventud", goles2: 1 },
        { equipo1: "Centenario", goles1: 2, equipo2: "420 FC", goles2: 1 },
        { equipo1: "Los Vicios", goles1: 3, equipo2: "Vulkano", goles2: 0 },
        { equipo1: "Rosario de la Frontera", goles1: 1, equipo2: "Soldati", goles2: 4 },
        { equipo1: "La Union", goles1: 0, equipo2: "Deportivo Entusiasmo", goles2: 0, suspendido: true }
    ],
    "2024-04-02": [
        { equipo1: "420 FC", goles1: 1, equipo2: "Los Vicios", goles2: 3 },
        { equipo1: "Almirante", goles1: 1, equipo2: "Deportivo Entusiasmo", goles2: 1 },
        { equipo1: "Juventud", goles1: 2, equipo2: "Centenario", goles2: 6 },
        { equipo1: "La Union", goles1: 0, equipo2: "Soldati", goles2: 2 },
        { equipo1: "Rosario de la Frontera", goles1: 1, equipo2: "Vulkano", goles2: 1 }

    ],
    "2024-04-03": [
        { equipo1: "Almirante", goles1: 0, equipo2: "La Union", goles2: 3 },
        { equipo1: "Juventud", goles1: 2, equipo2: "Deportivo Entusiasmo", goles2: 2 },
        { equipo1: "Rosario de la Frontera", goles1: 2, equipo2: "420 FC", goles2: 1 },
        { equipo1: "Vulkano", goles1: 2, equipo2: "Centenario", goles2: 2 },
        { equipo1: "Los Vicios", goles1: 0, equipo2: "Soldati", goles2: 0, suspendido: true }
    ],
    "2024-04-04": [
        { equipo1: "Centenario", goles1: 0, equipo2: "Deportivo Entusiasmo", goles2: 0 },
        { equipo1: "La Union", goles1: 1, equipo2: "Juventud", goles2: 1 },
        { equipo1: "Rosario de la Frontera", goles1: 0, equipo2: "Los Vicios", goles2: 5 },
        { equipo1: "Soldati", goles1: 1, equipo2: "Almirante", goles2: 1 },
        { equipo1: "Vulkano", goles1: 2, equipo2: "420 FC", goles2: 1 }
    ],
    "2024-04-05": [
        { equipo1: "420 FC", goles1: 0, equipo2: "Juventud", goles2: 2 },
        { equipo1: "Almirante", goles1: 0, equipo2: "Rosario de la Frontera", goles2: 1 },
        { equipo1: "La Union", goles1: 1, equipo2: "Deportivo Entusiasmo", goles2: 1 },
        { equipo1: "Los Vicios", goles1: 5, equipo2: "Centenario", goles2: 0 },
        { equipo1: "Vulkano", goles1: 2, equipo2: "Soldati", goles2: 1 }
    ],
    "2024-04-06": [
        { equipo1: "420 FC", goles1: 0, equipo2: "Deportivo Entusiasmo", goles2: 0 },
        { equipo1: "Centenario", goles1: 0, equipo2: "Almirante", goles2: 1 },
        { equipo1: "Juventud", goles1: 4, equipo2: "Rosario de la Frontera", goles2: 2 },
        { equipo1: "Los Vicios", goles1: 1, equipo2: "Soldati", goles2: 1 },
        { equipo1: "Vulkano", goles1: 2, equipo2: "La Union", goles2: 0 }
    ],
    "2024-04-07": [
        { equipo1: "Almirante", goles1: 1, equipo2: "Los Vicios", goles2: 4 },
        { equipo1: "Centenario", goles1: 4, equipo2: "La Union", goles2: 1 },
        { equipo1: "Rosario de la Frontera", goles1: 1, equipo2: "Deportivo Entusiasmo", goles2: 1 },
        { equipo1: "Soldati", goles1: 0, equipo2: "420 FC", goles2: 1 },
        { equipo1: "Vulkano", goles1: 0, equipo2: "Juventud", goles2: 1 }
    ],
    "2024-04-08": [
        { equipo1: "Almirante", goles1: 1, equipo2: "420 FC", goles2: 0 },
        { equipo1: "Juventud", goles1: 1, equipo2: "Los Vicios", goles2: 4 },
        { equipo1: "La Union", goles1: 2, equipo2: "Rosario de la Frontera", goles2: 2 },
        { equipo1: "Soldati", goles1: 1, equipo2: "Centenario", goles2: 0 },
        { equipo1: "Vulkano", goles1: 3, equipo2: "Deportivo Entusiasmo", goles2: 3 }
    ]
    // Más resultados...
};

function calcularEstadisticas() {
    // Reiniciar estadísticas
    for (let equipo in tablaPosiciones) {
        tablaPosiciones[equipo] = { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, gf: 0, gc: 0 };
    }
    

    // Calcular estadísticas a partir de los resultados
    for (let fecha in resultados) {
        resultados[fecha].forEach(partido => {
            if (partido.suspendido) return; // Ignorar partidos suspendidos

            let equipo1 = partido.equipo1;
            let equipo2 = partido.equipo2;
            let goles1 = partido.goles1;
            let goles2 = partido.goles2;

            tablaPosiciones[equipo1].jugados++;
            tablaPosiciones[equipo2].jugados++;
            tablaPosiciones[equipo1].gf += goles1;
            tablaPosiciones[equipo2].gf += goles2;
            tablaPosiciones[equipo1].gc += goles2;
            tablaPosiciones[equipo2].gc += goles1;

            if (goles1 > goles2) {
                tablaPosiciones[equipo1].ganados++;
                tablaPosiciones[equipo2].perdidos++;
                tablaPosiciones[equipo1].puntos += 3;
            } else if (goles1 < goles2) {
                tablaPosiciones[equipo2].ganados++;
                tablaPosiciones[equipo1].perdidos++;
                tablaPosiciones[equipo2].puntos += 3;
            } else {
                tablaPosiciones[equipo1].empatados++;
                tablaPosiciones[equipo2].empatados++;
                tablaPosiciones[equipo1].puntos++;
                tablaPosiciones[equipo2].puntos++;
            }
        });
    }

    actualizarTablaPosiciones();
}

function actualizarTablaPosiciones() {
    const tbody = document.querySelector("#tablaPosiciones tbody");
    tbody.innerHTML = "";

    // Convertir el objeto de tablaPosiciones en un array y ordenar por puntos de mayor a menor
    const equiposOrdenados = Object.keys(tablaPosiciones).sort((a, b) => {
        return tablaPosiciones[b].puntos - tablaPosiciones[a].puntos;
    });

    equiposOrdenados.forEach(equipo => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${equipo}</td>
            <td>${tablaPosiciones[equipo].puntos}</td>
            <td>${tablaPosiciones[equipo].jugados}</td>
            <td>${tablaPosiciones[equipo].ganados}</td>
            <td>${tablaPosiciones[equipo].empatados}</td>
            <td>${tablaPosiciones[equipo].perdidos}</td>
            <td>${tablaPosiciones[equipo].gf}</td>
            <td>${tablaPosiciones[equipo].gc}</td>
        `;
        tbody.appendChild(fila);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    calcularEstadisticas();
});

function mostrarPartidos(fecha) {
    const partidosBody = document.getElementById('partidosBody');
    partidosBody.innerHTML = '';

    resultados[fecha].forEach(partido => {
        const row = document.createElement('tr');
        if (partido.suspendido) {
            row.innerHTML = `
                <td>${fecha}</td>
                <td>${partido.equipo1}</td>
                <td>Suspendido</td>
                <td>${partido.equipo2}</td>
            `;
        } else {
            row.innerHTML = `
                <td>${fecha}</td>
                <td>${partido.equipo1}</td>
                <td>${partido.goles1} - ${partido.goles2}</td>
                <td>${partido.equipo2}</td>
            `;
        }
        partidosBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    calcularEstadisticas();
});