const btnSwitch = document.querySelector('.switch');
//Este codigo es para trabajar el modo dark
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});