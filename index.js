var nomeEmpresa=('Cine DH');
console.log (nomeEmpresa);

const catalogo = require('./database/catalogo.json')

const adicionarFilme = (
        Codigo,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz
        )=>{
        let novoFilme = {
            Codigo,
            titulo,
            duracao,
            atores,
            anoDeLancamento,
            emCartaz
        };

   catalogo.push(novoFilme);
        };

        adicionarFilme(8,'Os 7 de Chicago',130,['Sacha Baron Cohen','Eddie Redmayne','Yahya Abdul-Mateen II','Jeremy Strong','Mark Rylance','Joseph Gordon-Levitt'],220,false)
     

// Formula de busca de filme - tenho que melhorar os aspecto das resposta e depurar o codigo 

const buscarFilme = (codigoBuscado) => {
        let filmeExiste = false;
        for (let i = 0; i < catalogo.length; i++) {
          if (catalogo[i].codigo == codigoBuscado) {
            let filme = catalogo[i];    // criamos uma variavel no catalogo para ficar mais facil a compreenção dos dados 
            filmeExiste = true;
            console.log("Filme: " + filme.titulo);
            console.log("Está em cartaz?: " + filme.emCartaz);
            console.log("Ano de Lançamento: " + filme.anoDeLancamento);
            console.log("===========================");
          }
        }
        if (!filmeExiste) {
          console.log("Filme Não encontrado");
        }
      };
      
      // formula de alteração de em cartaz ou fora de cartaz 
      
      const alterarStatusEmCartaz = (codigoFilme) => {
        let filmeExiste = false;
        for (let i = 0; i <catalogo.length; i++) {
          if (catalogo[i].codigo == codigoFilme) {
            let filme = catalogo[i];
            filmeExiste = true;
            // catalogo[i].emCartaz = novoStatus;
            // catalogo[i].emCartaz = catalogo[i].emCartaz ? false : true;
            catalogo[i].emCartaz = !!catalogo[i].emCartaz;
            console.log("Filme alterado");
          }
        }
        if (!filmeExiste) {
          console.log("Filme Não encontrado");
        }
      };
    
      alterarStatusEmCartaz(1);
      alterarStatusEmCartaz(99);
    
      buscarFilme(1);
      buscarFilme(99);  

      // for de listagem de filmes em cartaz

const lista_todos_filmes_cartaz = ()=>{
      for (let index = 0; index < catalogo.length; index++) {
        let filme = catalogo[index];
        if (filme.emCartaz) {
          console.log (filme.titulo)
          console.log("Está em cartaz?: " + filme.emCartaz);
            console.log("Ano de Lançamento: " + filme.anoDeLancamento);
            console.log("===========================");
          
        }
      }
      };


lista_todos_filmes_cartaz()






























