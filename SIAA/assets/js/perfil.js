async function cargarInfoAlumno(){

    try{
        const response = await fetch("api/alumno.php");
        const data = await response.json();

        if(data.error){
            console.error(data.error);
            return;
        }

        window.infoAlumno = data;
        
        const name = document.getElementById("header-nombre");
        name.textContent = data.nombre;
    }catch(error){
        console.error("Error cargando alumno:", error);
    }
}
function renderInfoAlumno(){

    if(!window.infoAlumno){
        console.warn("No hay datos del alumno aún");
        return;
    }

    const data = window.infoAlumno;

    function setText(id, valor){
        const el = document.getElementById(id);
        if(el){
            el.textContent = valor ?? "No disponible";
        }
    }

    setText("nombreAlumno", data.nombre);
    setText("matricula", data.matricula);
    setText("carrera", data.carrera);
    setText("cuatrimestre", "5");
    setText("periodo", data.periodoIngreso);
    setText("estatus", data.estatus);

    setText("tutorNombre", data.tutorNombre);
    setText("tutorPuesto", data.tutorPuesto);
    setText("tutorCorreo", data.tutorCorreo);

    setText("direccion", data.direccion);
    setText("telefono", data.telefono);
    setText("correoPersonal", data.emailPersonal);

    setText("correoInstitucional", data.emailInstitucional);
}
cargarInfoAlumno();