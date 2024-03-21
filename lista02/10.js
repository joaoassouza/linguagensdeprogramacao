const aluno = {
    NOME: "",
    IDADE: 0,
    CURSO: "",
    MATRICULA: 0,

    mostrarInformacoes: function () {
        return `Nome: ${this.NOME}\nIdade: ${this.IDADE}\n` +
            `Curso: ${this.CURSO}\nMATRICULA: ${this.MATRICULA}`
    }
};

const newAluno = new aluno("Joao", 13, "ads", 1);
const newAluno1 = new aluno("robert", 19, "gt1", 2);
const newAluno2 = new aluno("gabriel", 33, "eng", 3);
const newAluno3 = new aluno("luana", 17, "eng", 4);
let Classe = [newAluno, newAluno1, newAluno2, newAluno3];

function alunosMaior(alunos) {
    alunosMaiores = [];
    alunos.forEach(aluno => {
        if (aluno.IDADE >= 18) {
            alunosMaiores[i] = alunos;
            i++;
        }
    });
    return alunosMaiores;
}

console.log("Alunos maiores de idade:\n"+ alunosMaior(Classe));