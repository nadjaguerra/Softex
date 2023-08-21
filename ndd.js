let numVoto, x = 0, y = 0, z = 0, branco = 0, nulo = 0;
let rodar = true;

console.log('ELEIÇÃO \n__________________\nCandidato_X => 889\nCandidato_Y => 847\nCandidato_Z => 515\nBranco => 0\n__________________')

while (rodar){
    try{
      voto = parseInt(prompt('Digite o número do candidato\n'))
    
         if (isNaN(voto)) {
             throw new Error('INFORME APENAS NÚMEROS');
        }
         if (voto === 0 ){
              branco++;
         }else if (voto === 889 ){
               x++;
         }else if (voto === 847 ){
               y++;
          }else if (voto === 515 ){
              z++;
         }else {
              nulo++;
         }   
    
    let fim = prompt('Deseja finalizar a votação?: ');

         if (fim === 'sim') {
          rodar = false;
         }
    } catch (error) {
        console.log(error.message);  
    }
}    
    
    if (x >= y && x >= z){
        numVoto ='Candidato_X' ;
    }else if (y >= x && y >= z){
        numVoto = 'Candidato_Y';
    }else if (z >= x && z >= y){
        numVoto = 'Candidato_Z';
    }
    console.log (`O candidato vencedor é  o ${numVoto}!!!\n\n`)
    console.log (`RESULTADO FINAL\nCandidato_X: ${x}\nCandidato_Y: ${y}\nCandidato_Z: ${z}\nBranco: ${branco}\nNulo: ${nulo}`)
    
        
