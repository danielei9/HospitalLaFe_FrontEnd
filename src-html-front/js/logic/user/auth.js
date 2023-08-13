function signIn() {
    console.log("http://localhost:7878/signin");
    fetch('http://127.0.0.1:7878/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => function (err) {
        if (err) { alert(err) }
      });
  }
  
  function comparePassword(passwordA,passwordB) {
    if(passwodA!=passwordB)
    {
        alert("Las contraseñas no coinciden");
        return false;
    }
    return true;  
  }

  function signUp() {
    console.log("http://localhost:7878/signup");
    fetch('http://127.0.0.1:7878/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => function (err) {
        if (err) { alert(err) }
      });
  }