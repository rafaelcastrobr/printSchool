const botaoImprimir = document.getElementById('imprimir');
const botaoLimpar = document.getElementById('limpar');

function limpar() {
  document.getElementById('nome').value = "";
  document.getElementById('serie').value = "";
}


function imprimirCampoEspecifico() {
  let nome = document.getElementById('nome').value;
  let serie = document.getElementById('serie').value;
  let tipo = document.querySelector("input[name='tipo']:checked").value;
  // novaJanela.document.write(`${nome}<br>${serie}ª Série`);

  if (tipo == "º Ano" && serie != "" && nome != "") {
    var novaJanela = window.open("", "nova-janela");

    novaJanela.document.write(`<p style="font-size: 30px;">
       ${nome}<br>
        ${serie}${tipo}
        </p>`
    );

    novaJanela.print();

    novaJanela.close();
  }


  if (tipo != "º Ano" && nome != "") {
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
botaoLimpar.addEventListener('click', limpar);