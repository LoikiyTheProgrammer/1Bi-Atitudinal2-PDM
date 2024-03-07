let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

console.log(chamadaDeAlunos.nome)

function mostraAluno() {
    chamadaDeAlunos.forEach(alunoNomes => { 
        console.log(alunoNomes.nome)
    })

    chamadaDeAlunos.forEach(alunoNotas => { 
        console.log(alunoNotas.nota)
    })
}

function alunosAprovados() {
    return chamadaDeAlunos.filter(aluno => {
        return aluno.materias.every(materia => materia.nota >= 6 && materia.presenca >= 75);
    });
}

// Mostrar apenas os alunos reprovados nas matérias
function alunosReprovados() {
    return chamadaDeAlunos.filter(aluno => {
        return aluno.materias.some(materia => materia.nota < 6 || materia.presenca < 75);
    });
}

function getMaxOfArray(chamadaDeAlunos){
    return Math.max(chamadaDeAlunos.materias.nota);
}

function getMinOfArray(chamadaDeAlunos){
    return Math.min(chamadaDeAlunos.materias.nota);
}

console.log(" Alunos aprovados nas matérias:");
console.log(alunosAprovados());

console.log(" Alunos reprovados nas matérias:");
console.log(alunosReprovados());

console.log(" Alunos com maiores notas:");
console.log(getMaxOfArray());

console.log(" Alunos com menores notas:");
console.log(getMinOfArray());
