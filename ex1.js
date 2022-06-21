// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :
// NOME
// SEXO
// ID
// NOTAS
// TURMA

// DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO

// E APLIQUE OS EXERCICIOS DE MEDIA DAS AULAS PASSADAS 

// MEDIA TOTAL DE NOTAS 

// MEDIA DE ALUNOS HOMENS E MULHERES


function Aluno(nome, sexo, id, notas, turma, media){
    this.nome = nome;
    this.sexo = sexo;
    this.id = id;
    this.notas = notas;
    this.turma = turma;
    this.media = function(){
        let media = this.notas.reduce( function(acumulador, item ){
            return acumulador + item;
        } );
        media = media / this.notas.length;
        return media.toFixed(2);
    }
}

let listaAlunos = [];
listaAlunos.push(new Aluno("Ivanaldo", "M", "20", [8,7,7], 2));
listaAlunos.push(new Aluno("Wilian", "M", "25", [8,7,9], 5));
listaAlunos.push(new Aluno("JosÉ", "M", "26", [8,7,8], 3));
listaAlunos.push(new Aluno("Joseane", "F", "22", [10,7,5], 3));
listaAlunos.push(new Aluno("Moisés", "F", "20", [2.5,7,6], 3));


function mediaNotas(array){
    let totalnotaH=0;
    let homens = array.filter(function(x){
        return x.sexo == "M";
    });
    let mediasH = homens.map(x =>x.media());
    for(let x=0;x<mediasH.length;x++){
        totalnotaH += parseFloat(mediasH[x]);
    }
   console.log("A média de notas dos alunos do sexo masculino é "+(totalnotaH/homens.length).toFixed(2)+".");
   let totalnotaM=0;
   let mulheres = array.filter(function(x){
       return x.sexo == "F";
   });
   let mediasM = mulheres.map(x =>x.media());
   for(let x=0;x<mediasM.length;x++){
       totalnotaM += parseFloat(mediasM[x]);
   }
  console.log("A média de notas dos alunos do sexo feminino é "+(totalnotaM/mulheres.length).toFixed(2)+".");
  let totalnotaT=0;
    let mediasT = array.map(x =>x.media());
    for(let x=0;x<mediasT.length;x++){
        totalnotaT += parseFloat(mediasT[x]);
    }
   console.log("A média de notas dos alunos é "+(totalnotaT/array.length).toFixed(2)+".");
}
mediaNotas(listaAlunos);

