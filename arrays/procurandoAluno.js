const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

const exibeNomeENota = (aluno) => {
    if (listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias;

        console.log(`${aluno} está cadastrado`);

        const indice = alunos.indexOf(aluno);

        const media = medias[indice];

        console.log(`${aluno} tem a média: ${media}`);

    } else{
        console.log('Aluno não encontrado');
    }
}

exibeNomeENota("Ana");