var capac, pedal, terr, quant, trat;

alert ('RESPONDA 1 PARA SIM E 0 PARA NÃO'+ "\n");

terr = prompt ('É Terrestre?'+'\n');
if (terr == 1) {
    capac = prompt ('Usa capacete?'+'\n');
if (capac == 1) {
  alert ('O meio de transporte será a MOTO');
} else if (capac == 0) {
  quant = prompt ('Cabe apenas 1 pessoa?'+'\n');
  if (quant == 0){
      alert ('Esse meio de transporte não está disponível!')
  } else if (quant == 1){
    trat = prompt('É pesado?'+'\n');
    if (trat == 1) {
      alert('O meio de transporte será o TRATOR');
    } else {
      pedal =prompt('Tem pedal?'+'\n');
    }
    if (pedal == 0) {
        alert('Esse meio de transporte não está disponível!')}
        else if (quant == 1){
      alert('O meio de transporte será a BICICLETA');
    }
  }}}
  else {
    alert ('Não há o meio de transporte desejado disponível!');
  }
