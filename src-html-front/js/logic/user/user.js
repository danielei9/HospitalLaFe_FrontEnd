/**
* http GET request to /users
*/
async function getUsers() {
    await fetch('http://127.0.0.1:7878/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => { representPersonaHtml(json); console.log(json) })
        .catch(err => function (err) {
            if (err) { alert(err) }
        });
}