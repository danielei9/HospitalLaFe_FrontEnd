/**
* http GET request to /users
*/
async function getMeasures() {
    await fetch('http://127.0.0.1:7878/measures', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => { representPersonaHtml(json); console.log(json) })
        .catch(err => function (err) {
            if (err) { alert(err) }
        });
}