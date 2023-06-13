const btnSwitch = document.querySelector('.switch');
//Este codigo es para trabajar el modo dark
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

//we open the JSON file... 
const request =  new XMLHttpRequest();
request.open("GET", "/articulos.JSON", true);
request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200) {
        const contenidoJSON = request.responseText;
        const objetoJSON = JSON.parse(contenidoJSON);
    
        // Procesar el objeto JSON
        console.log("Imagen: " + objetoJSON[11].imagen);
        console.log("Extracto: " + objetoJSON[11].extracto);
    }
};
request.send();