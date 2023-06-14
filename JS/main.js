const btnSwitch = document.querySelector('.switch');
const mainElement = document.querySelector('.cont_car_all');
//Este codigo es para trabajar el modo dark
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
//this function helps us to show in little articles the info...
function makeArticles(imagen, subT, extracto, link){
    //start creating the elements... 
    const father = document.createElement('div');
    father.classList.add('cont_car');
}
//we open the JSON file... 
const request =  new XMLHttpRequest();
request.open("GET", "/articulos.JSON", true);
request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200) {
        const contentJSON = request.responseText;
        const article = JSON.parse(contentJSON);
        //here we show the info in JSON file...
        makeArticles(article[0].imagen,article[0].subTitulo, 
            article[0].extracto, article[0].linkWeb)

        console.log("Imagen: " + article[0].imagen);
        console.log("Sub titulo: " + article[0].subTitulo);
        console.log("Extracto: " + article[0].extracto);
        console.log("Link al articulo: " + article[0].linkWeb);
    }
};
request.send();