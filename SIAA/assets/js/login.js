document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    login();
});

async function login(){

    const matricula = document.getElementById("matricula").value;
    const password = document.getElementById("password").value;

    const res = await fetch("../api/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({matricula, password})
    });

    // 👇 DEBUG (ANTES de json)
    const text = await res.text();
    console.log("RESPUESTA CRUDA:", text);

    // 👇 intenta convertir a JSON
    try{
        const data = JSON.parse(text);

        if(data.success){
            window.location.href = "../index.php";
        } else {
            document.getElementById("error").textContent = data.message;
        }

    }catch(e){
        console.error("NO ES JSON:", text);
    }
}