function Pessoa(nome) {
    this.nome = nome;
    this.dizNome = function() {
        console.log(this.nome)
    }
}

function Vinculo(vinculo){
    this.vinculo = vinculo;
    
    this.dizVinculo = function() {
        console.log(this.vinculo)
    }
}

function Funcionario(nome, vinculo, cargo, salario){
    Pessoa.call(this, nome);
    Vinculo.call(this, vinculo);
    this.cargo = cargo;
    let _salario = salario;

    this.dizSalario = function() {
        return _salario;
    }
    
    this.dizCargo = function() {
        console.log(this.cargo)
    }
}

const funcionario1 = new Funcionario("Paulo", "Funcionário", "Desenvolvedor", 5000)

funcionario1.dizNome() + funcionario1.dizVinculo() + funcionario1.dizCargo();

console.log(funcionario1.dizSalario());
