let localizacao = "";
let DataAtual = new Date();
let options = { Timezone: "America/" + localizacao};
DataDoUsuario = DataAtual.toLocaleString("pt-BR", options);

function Guardar(){
    let valor = document.getElementById("estados");
    localizacao = valor.selectedOptions[0].id;
}

