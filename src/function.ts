function nome(nome: string): string {
    return nome;
}

function calculo(altura: number, peso: number): number {
    const imc = altura / peso
    return imc;
}

const novoNome = nome("Josyway");  

const calculoImc = calculo(180, 86)

console.log(`Olá ${novoNome} o seu IMC é de ${calculoImc}.`)