const imprimir = document.getElementById('specific-field');




const botaoImprimir = document.getElementById('imprimir');
function limparCabecalho() {
  document.title = "";
  document.querySelector("title").style.display = "none";
}



function imprimirCampoEspecifico() {
  let nome = document.getElementById('nome').value;
  let serie = document.getElementById('serie').value;
  let tipo = document.querySelector("input[name='tipo']:checked").value;
  // novaJanela.document.write(`${nome}<br>${serie}ª Série`);

  if (tipo == "º Ano" && serie != "" ) {
    var novaJanela = window.open("", "nova-janela");

    novaJanela.document.write(`<p style="font-size: 30px;">
       ${nome}<br>
        ${serie}${tipo}
        </p>`
        );

    novaJanela.print();

    novaJanela.close();
  }


  if (tipo != "º Ano" ) {
    var novaJanela = window.open("", "nova-janela");

    novaJanela.document.write(`<p style="font-size: 30px;">
       ${nome}<br>
       ${tipo}
        </p>`
        );

    novaJanela.print();

    novaJanela.close();
  }


}

botaoImprimir.addEventListener('click', imprimirCampoEspecifico);