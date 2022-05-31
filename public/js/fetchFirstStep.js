window.url = "https://cvapicurriculum.herokuapp.com"

if (window.location.href.includes('netlify')){
    window.url = "https://cvapicurriculum.herokuapp.com"
} else {
    window.url = "http://localhost:1337"
}
//malas practicas mejorar despues con un estado en pinia
window.strapi = {}
// https://cvapicurriculum.herokuapp.com/
let url2 = "https://cvapicurriculum.herokuapp.com/api/cvs?populate=*";
const fetchUrl = `${window.url}/api/cvs?populate=*`;
// let url2 = "http://localhost:1337/api/cvs?populate=*";


function addDom(selector, contenido) {
    try {
      const item = document.querySelector(selector);
      if (!item) return; 
      item.innerText = contenido;
    } catch (error) {
      console.log('🚀error >>',error);
    }
}


function populateHome(respuesta){

    const nombre = respuesta.data[0]?.attributes?.nombre;
    const subtitulo = respuesta.data[0]?.attributes?.subtitulo;
    const subtitulo2 = respuesta.data[0]?.attributes?.subtitulo2;
    const linkedin = respuesta.data[0]?.attributes?.Linkedin;
    console.log('🚀respuesta >>',respuesta);
    const url = window.url;   
    const fileUrl = url + respuesta.data[0]?.attributes?.hojadevida?.data?.attributes?.url;
    const fileName = respuesta.data[0]?.attributes?.hojadevida?.data?.attributes?.name;
    const downloadButton = document.querySelector("#download-file");
    if (!downloadButton) return
    downloadButton.setAttribute("href",fileUrl);
    downloadButton.setAttribute("download",fileName);

    addDom("#name-user", nombre);
    addDom("#name-user-2", nombre);
    addDom("#subtitulo", subtitulo);
    addDom("#subtitulo-2", subtitulo2);
    // addDom("#linkedin-link", linkedin || "");
    const linkedinDom = document.querySelector("linkedin-link");
    console.log('🦁linkedin >>',linkedin);
    linkedinDom?.setAttribute("href",linkedin || "");
    const acerca = respuesta.data[0]?.attributes?.acerca;
    //cargar foto
    const foto = respuesta.data[0]?.attributes?.foto;
    const urlFoto =
    url + foto?.data?.attributes?.url;
    // const picDom = document.querySelector("#profile-picture");
    // picDom.setAttribute("src", urlFoto);
    if (!acerca || !foto) return;
    // acerca
    const {
      titulo,
      descripcion,
      edad,
      residencia,
      direccion,
      email,
      telefono,
    } = respuesta.data[0]?.attributes?.acerca;
    window.strapi.acerca = {...respuesta.data[0]?.attributes?.acerca};
    addDom("#acerca-titulo", titulo || "no-content");
    addDom("#acerca-desc", descripcion || "no-content");
    addDom("#acerca-year", edad || "no-content");
    addDom("#acerca-lugar", residencia || "no-content");
    addDom("#acerca-direccion", direccion || "no-content");
    addDom("#acerca-email", email || "no-content");
    addDom("#acerca-telefono", telefono || "no-content");

}

function populateTareas(respuesta){
    const tareas = respuesta.data[0]?.attributes?.tareas;
    window.strapi.tareas = {...tareas};
    if (!tareas) return;
    const {
      titulo,
      titulo1,
      desc1,
      titulo2,
      desc2,
      titulo3,
      dec3,
      titulo4,
      desc4,
    } = tareas;
    addDom("#tareas-titulo", titulo ||"no-content");
    addDom("#tareas-titulo1", titulo1 ||"no-content");
    addDom("#tareas-desc1", desc1 ||"no-content");
    addDom("#tareas-titulo2", titulo2 ||"no-content");
    addDom("#tareas-desc2", desc2 ||"no-content");
    addDom("#tareas-titulo3", titulo3 ||"no-content");
    addDom("#tareas-desc3", dec3 ||"no-content");
    addDom("#tareas-titulo4", titulo4 ||"no-content");
    addDom("#tareas-desc4", desc4 ||"no-content");
}

function populateEducation(respuesta){
    const educacion = respuesta.data[0]?.attributes?.educacion;
    if (!educacion) return;
    const {
      titulo1,
      desc1,
      lugar1,
      year1,
      titulo2,
      desc2,
      lugar2,
      year2,
    } = educacion;    
    addDom("#educacion-titulo1", titulo1 || "no-content");
    addDom("#educacion-desc1", desc1 || "no-content");
    addDom("#educacion-year1", year1 || "no-content");
    addDom("#educacion-lugar1", lugar1 || "no-content");

    addDom("#educacion-titulo2", titulo2 || "no-content");
    addDom("#educacion-desc2", desc2 || "no-content");
    addDom("#educacion-year2", year2 || "no-content");
    addDom("#educacion-lugar2", lugar2 || "no-content");
}

function populateTrabajo(respuesta){
    const { id, ...trabajo } = respuesta.data[0]?.attributes?.trabajo;
    window.strapi.trabajo = trabajo;
    for (const key in trabajo) {
      addDom(`#trabajo-${key}`, trabajo[key] || "no-content");
    }
    const conocimientos = respuesta.data[0]?.attributes?.conocimientos;
    console.log('🦁conocimientos >>',conocimientos);

    addDom("#conocimientos-titulo", conocimientos.titulo || "no-content");

    const ulConociomientos = document.querySelector(
      "#conocimientos-lista"
    );
    if(!ulConociomientos) return


    //contacto populate
    const { ...contacto } = respuesta.data[0]?.attributes?.contacto;
    window.strapi.contacto = {...respuesta.data[0]?.attributes?.contacto};
    
    window.strapi.conocimientos = {...respuesta.data[0]?.attributes?.conocimientos};
    window.strapi.educacion = {...respuesta.data[0]?.attributes?.educacion};
    for (const key in contacto) {
      if (key === "id") continue;
      addDom(`#contacto-${key}`, contacto[key] || "no-content");
    }
}

function populateConocimientos(respuesta){
    const { id, ...trabajo } = respuesta.data[0]?.attributes?.trabajo;
    for (const key in trabajo) {
      addDom(`#trabajo-${key}`, trabajo[key] || "no-content");
    }
    const conocimientos = respuesta.data[0]?.attributes?.conocimientos;
    console.log('🦁conocimientos >>',conocimientos);
    addDom("#conocimientos-titulo", conocimientos.titulo || "no-content");

    //contacto populate
    const { ...contacto } = respuesta.data[0]?.attributes?.contacto;
    for (const key in contacto) {
      if (key === "id") continue;
      addDom(`#contacto-${key}`, contacto[key] || "no-content");
    }
    window.strapi.conocimientos = {...respuesta.data[0]?.attributes?.conocimientos};
    window.strapi.contacto = {...respuesta.data[0]?.attributes?.contacto};

}

function populateSkills(respuesta){
    console.log('🦁respuesta >>',respuesta);
    const skills = respuesta.data[0]?.attributes?.skills;
    if (!skills) return;
    const {
      titulo,
      titulo1,
      porcentaje1,
      titulo2,
      porcentaje2,
      titulo3,
      porcentaje3,
      titulo4,
      porcentajr4,
    } = skills;
    window.strapi.skills = skills;
    addDom("#skill-titulo", titulo);

    addDom("#skill-titulo1", titulo1 || "null");
    addDom("#skill-porc1", porcentaje1 || "null");

    addDom("#skill-titulo2", titulo2 || "null");
    addDom("#skill-porc2", porcentaje2 || "null");

    addDom("#skill-titulo3", titulo3 || "null");
    addDom("#skill-porc3", porcentaje3 || "null");

    addDom("#skill-titulo4", titulo4 || "null");
    addDom("#skill-porc4", porcentajr4 || "null");

}

function populateAboutMe(){

}

function populateResume(){

}

function populateContact(){}

function fetchAndSetAll(...fnList){
    return function (respuesta){
        for (const fn of fnList){
            fn(respuesta)
        }
    }
}
// first page
fetch(fetchUrl)
  .then((response) => response.json())
  .then((respuesta) => {
    fetchAndSetAll(
        populateHome,
        populateTareas,
        populateEducation,
        populateTrabajo,
        populateConocimientos,
        populateSkills
    )(respuesta); //closure
  });

console.log('🚀window.strapi >>',window.strapi);





