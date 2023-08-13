function startBtn() {
    $("#btnStart").on('click', function () {
        console.log("start")
        if ($("#radioCheck32").is(":checked")) {
            console.log("32")
            startPython();
        }
        if ($("#radioCheck64").is(":checked")) {
            console.log("64")
            startPython();
        }
    });
}
function startPython() {
    console.log("http://localhost:7878/start");
    fetch('http://127.0.0.1:7878/start', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => console.log(json))
        .catch(err => function (err) {
            if (err) { alert(err) }
        });
}