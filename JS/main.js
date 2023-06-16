const btnSwitch = document.querySelector('.switch');
const mainElement = document.querySelector('.cont_car_all');
const mainEtiquetas = document.querySelector('.etiquetas');
const btnShowMoere = document.querySelector('.vermas');
const publicidad = document.querySelector('.cont_publicidad');
//This array has a lot of img of publicity...
const publicityImges = [
    "https://cdn.milenio.com/uploads/media/2019/09/19/estima-proximas-semanas-servicio-comida.jpg",
    "https://pbs.twimg.com/media/FPv_RiIVUA4FqwE.png:large",
    "https://controlpublicidad.com/uploads/2019/11/subway-sandwich-102910.jpg",
    "https://mktadstrategies.files.wordpress.com/2017/10/m24.png",
    "https://controlpublicidad.com/uploads/2020/06/ambar-muy-muy-especial-111913.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/444/427/non_2x/beer-advertisement-design-poster-template-for-classic-white-beer-ad-package-design-vector.jpg",
    "https://imagenes.elpais.com/resizer/YBoqMESBgeU0dCNyGerEsX4FE9U=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNBPUFT4G2P53NY76R2X2SM2DQ.jpg",
    "https://www.marketingdirecto.com/wp-content/uploads/2015/06/apple_watch.jpg",
    "https://controlpublicidad.com/includes/thumb.php?src=https://controlpublicidad.com/uploads/2022/01/subway-lanza-queso-vegano-120532.jpg&h=400&zc=1&q=90&a=t"
]
//Este codigo es para trabajar el modo dark
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
//this function helps us to show in little articles the info...
function makeArticles(imagen, subT, sublink , axtracto, link){
    //start creating the elements...
    //This is the main div that content all the itemes of the article...
    const father = document.createElement('div');
    father.classList.add('cont_car');
    //
    const linkWeb = document.createElement('a');
    linkWeb.classList.add('linkWeb');
    linkWeb.href = `${link}`;
    //this div content the img...
    const imgDestacada = document.createElement('div');
    imgDestacada.classList.add('cont_img');
    imgDestacada.style.backgroundImage = `url(${imagen})`;
    //this div content the sub title and the abstract...
    const abstractNtitle = document.createElement('div');
    abstractNtitle.classList.add('cont_info_car');
    //child div of abstracNtitle, this has the sub title... 
    const subDiv = document.createElement('div');
    subDiv.classList.add('tema');
    //
    const tema = document.createElement('a');
    tema.classList.add('etiquetass');
    tema.href = `${sublink}`;
    //this is the span that is in subDiv...
    const subTitle = document.createElement('span');
    subTitle.innerText = `${subT}`;
    //child div of abstracNtitle, this has the abstrac...
    const abstractDiv = document.createElement('div');
    abstractDiv.classList.add('pre');
    //this is the <p></p> (abstrac)...
    const abstracText = document.createElement('p');
    abstracText.innerText = `${axtracto}`;

    mainElement.appendChild(father);
    father.appendChild(linkWeb);
    linkWeb.appendChild(imgDestacada);
    father.appendChild(abstractNtitle);
    abstractNtitle.appendChild(subDiv);
    subDiv.appendChild(tema);
    tema.appendChild(subTitle);
    abstractNtitle.appendChild(abstractDiv);
    abstractDiv.appendChild(abstracText);
}
//this function makes randonme numbers...
function RandomeNumbers(rango) {
    const numAleatorio = Math.random();
    const numEntero = Math.floor(numAleatorio * rango); // Genera números del 0 al 23

    return numEntero;
}
//This function helps us to clean the sider if there are articles whem we click btn ver mas...
function deleteArticles(){
    mainElement.innerHTML = "";
}
function calls(){
    //we open the JSON file... 
    const url = "https://ramedina98.github.io/api_nat/db.json";
    const request =  new XMLHttpRequest();
    request.open("GET", url, true);

    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200) {
            const contentJSON = request.responseText;
            const article = JSON.parse(contentJSON);
            //here we show the info in JSON file...
            let x = 0;
            const usedNumbers = []; // Array para almacenar los números utilizados
            do {
                let j = 0;
                do {
                    j = RandomeNumbers(24);
                }while (usedNumbers.includes(j)); // Verifica si el número ya ha sido utilizado
                usedNumbers.push(j); // Agrega el número al array de números utilizados
                makeArticles(article[j].imagen, article[j].subTitulo, article[j].subLink, article[j].extracto, article[j].linkWeb);
                x++;
            }while (x !== 3);
        }
    };
    request.send();
}
calls();
//this btn refreshes the sider and shows new articles...
btnShowMoere.addEventListener('click', (e) => {
    e.preventDefault();
    deleteArticles();
    calls();
})
//this funtion makes
let x = 0; 
let j = 0;
function rotateAdvertinsing(){
    let i;
    i = RandomeNumbers(publicityImges.length);
    while(i === x || i === j){
        i = RandomeNumbers(publicityImges.length);
    }
    j = x;
    x = i;
    publicidad.style.backgroundImage = `url(${publicityImges[i]})`;
}
rotateAdvertinsing();
setInterval(rotateAdvertinsing, 30000);