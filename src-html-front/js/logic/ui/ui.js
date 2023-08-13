function representPersonaHtml(json) {
    console.log(json)
    for (let i = 0; i < json.length; i++) {
        document.getElementById("tbody_").innerHTML += '<tr><th scope="row">' + json[i].dni + '</th><td>' + json[i].nombre + '</td><td>' + json[i].apellidos + '</td><td>' + json[i].state + '</td></tr>';
    }
}