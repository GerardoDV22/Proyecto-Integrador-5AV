/* ================================
   DATOS DE MATERIAS
================================ */

let materias = [];

async function cargarMaterias(){
    try{

        const response = await fetch("api/materias.php");
        materias = await response.json();

        cargarTabla();

    }catch(error){
        console.error("Error cargando materias:", error);
    }

}
/* ================================
   VER DETALLE DE UNIDADES
================================ */

function verDetalle(index){

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("tituloModal");
    const detalle = document.getElementById("detalleUnidades");

    titulo.textContent = materias[index].nombre;
    detalle.innerHTML = "";

    materias[index].unidades.forEach((u,i)=>{

        let promedioUnidad = calcularPromedioUnidad(u.componentes);

        detalle.innerHTML += `
        <tr>
            <td>${u.num}</td>
            <td>${u.desc}</td>
            <td>${promedioUnidad}</td>
            <td><button onclick="verComponentes(${index},${i})">Ver desglose</button></td>
        </tr>
        `;
    });

    modal.style.display = "flex";
}
/* ================================
   FUNCIONES DE CÁLCULO
================================ */



function calcularPromedioUnidad(componentes){

    let valores = Object.values(componentes).filter(v => v !== null);

    if(valores.length === 0) return null;

    let suma = valores.reduce((a,b)=>a+b,0);

    return (suma/valores.length).toFixed(2);
}

function calcularPromedio(unidades){

    let suma = 0;
    let contador = 0;

    unidades.forEach(u=>{

        let promedioUnidad = calcularPromedioUnidad(u.componentes);

        if(promedioUnidad !== null){
            suma += parseFloat(promedioUnidad);
            contador++;
        }
    });

    return contador > 0 ? (suma/contador).toFixed(2) : null;
}
/* ================================
   VER COMPONENTES (DESGLOSE)
================================ */



function verComponentes(mIndex,uIndex){

    let unidad = materias[mIndex].unidades[uIndex];
    let componentes = unidad.componentes;

    const contenedor = document.getElementById("contenedorCards");
    contenedor.innerHTML = "";

    Object.keys(componentes).forEach(nombre=>{

        contenedor.innerHTML += `
        <div class="card">
            <h4>${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h4>
            <span>${componentes[nombre]}</span>
        </div>
        `;
    });

    let promedio = calcularPromedioUnidad(componentes);
    document.getElementById("promedioUnidadFinal").textContent = promedio;

    document.getElementById("modalDesglose").style.display = "flex";
}


/* ================================
   CERRAR MODALES
================================ */



function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}

function cerrarDesglose(){
    document.getElementById("modalDesglose").style.display = "none";
}

/* ================================
   CARGAR TABLA
================================ */



function cargarTabla(){

    const tabla = document.getElementById("tablaMaterias");
    if(!tabla)return;
    tabla.innerHTML = "";

    let sumaGeneral = 0;
    let materiasConPromedio = 0;

    materias.forEach((m,index)=>{

        let promedio = calcularPromedio(m.unidades);

        let total = m.unidades.length;

        let evaluadas = m.unidades.filter(u => {
            return calcularPromedioUnidad(u.componentes) !== null;
        }).length;

        let estadoClase = "";
        let estadoTexto = "";

        // 🔹 Sin evaluar
        if(evaluadas === 0){
            estadoClase = "pendiente";
            estadoTexto = "Sin evaluar";
        }

        // 🔹 Parcial
        else if(evaluadas < total){
            estadoClase = "parcial";
            estadoTexto = "Parcial";

            sumaGeneral += parseFloat(promedio);
            materiasConPromedio++;
        }

        // 🔹 Completo
        else{
            estadoClase = "evaluado";
            estadoTexto = "Completo";

            sumaGeneral += parseFloat(promedio);
            materiasConPromedio++;
        }

        tabla.innerHTML += `
        <tr>
            <td>${m.clave}</td>
            <td>${m.nombre}</td>
            <td>${evaluadas} / ${total}</td>
            <td>${promedio !== null ? promedio : "--"}</td>
            <td><span class="estado ${estadoClase}">${estadoTexto}</span></td>
            <td><button onclick="verDetalle(${index})">Ver</button></td>
        </tr>
        `;
    });

    let promedioGeneral = materiasConPromedio > 0 ?
    (sumaGeneral/materiasConPromedio).toFixed(2) : "--";

    document.getElementById("promedioGeneral").textContent = promedioGeneral;
}
/* ================================
   CERRAR AL HACER CLICK FUERA
================================ */



window.addEventListener("click", function(e){

    if(e.target.id === "modal"){
        cerrarModal();
    }

    if(e.target.id === "modalDesglose"){
        cerrarDesglose();
    }

});
window.extraMaterias = [];

function obtenerMateriasExtra(){

    extraMaterias = [];

    materias.forEach(m => {

        const promedio = calcularPromedioUnidad(m.unidades);

        if(promedio !== null && parseFloat(promedio) < 7){
            extraMaterias.push(m.nombre);
        }

    });

    console.log("Materias para extraordinario:", extraMaterias);
}

/* ================================
   INICIAR
================================ */

cargarMaterias();
obtenerMateriasExtra();