//if (condição) {
    // Código a ser executado se a condição for verdadeira
//}

var media = 0;
onEvent("text", "input", function( ) {
  media = getText("text");
  if (media >= 7) {
    setText("label 2", "você está aprovado");
  }
});
