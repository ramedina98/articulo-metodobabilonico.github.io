const btnSwitch = document.querySelector('.switch');
const mainElement = document.querySelector('.cont_car_all');
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
function RandomeNumbers() {
    const numAleatorio = Math.random();
    const numEntero = Math.floor(numAleatorio * 24); // Genera números del 0 al 23

    return numEntero;
}
//we open the JSON file... 
const request =  new XMLHttpRequest();
request.open("GET", "/articulos.JSON", true);
request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200) {
        const contentJSON = request.responseText;
        const article = JSON.parse(contentJSON);
        //here we show the info in JSON file...
        let x = 0; 
        do{
            /*I have to writte a function that check if a 
            randome number is repeated or not...*/
            let j = 0;
            j = RandomeNumbers();
            makeArticles(article[j].imagen, article[j].subTitulo, 
                article[j].subLink, article[j].extracto, article[j].linkWeb);
                x++;
        }while(x !== 3);
    }
};
request.send();