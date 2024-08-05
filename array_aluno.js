const alunos = [
    {nome:"Paulo", nota: 9},
    {nome:"Maria", nota: 6},
    {nome:"Bruno", nota: 5},
    {nome:"Jane", nota: 8},
    {nome:"Hiran", nota: 7},
    {nome:"Juliana", nota: 5},
]

function alunosAprovados(alunos) {
    return alunos.nota >= 6
}

const aprovados = alunos.filter(alunosAprovados);

console.log(aprovados)