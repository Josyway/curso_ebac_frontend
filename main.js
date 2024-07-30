function Pais(nome, continente, população) {
    this.nome = nome;
    this.continente = continente;
    this.população = população;
}

function Estado(nome, continente, população, municipios) {
    Pais.call(this, nome, continente, população);
    this.municipios = municipios;
}

function Cidade(nome, continente, população, região) {
    Pais.call(this, nome, continente, população);
    this.região = região;
}

const Brasil = new Pais("Brasil", "Sul Americano", "203.080.756");
const RN = new Estado("Rio Grande do Norte", "Sul Americano", "3.302.000", 167);
const Natal = new Cidade("Natal", "Sul Americano",  751.300, "Nordeste");

console.log(Brasil);
console.log(RN);
console.log(Natal);
