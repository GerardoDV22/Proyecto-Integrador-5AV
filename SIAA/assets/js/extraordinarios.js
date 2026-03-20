async function cargarExtraMaterias(){

    try{

        const response = await fetch("api/materias.php");
        const materias = await response.json();

        const extraMaterias = document.getElementById("extraMaterias");

        if(!extraMaterias) return;

        extraMaterias.innerHTML = "";

        materias.forEach(m => {

            extraMaterias.innerHTML += `
            <label class="extra-materia">
                <input type="checkbox" value="${m.nombre}">
                ${m.nombre}
            </label>
            `;

        });

    }catch(error){
        console.error("Error cargando materias para extraordinarios:", error);
    }

}

document.addEventListener("DOMContentLoaded", cargarExtraMaterias);