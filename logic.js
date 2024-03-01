let btn = document.querySelector(".submit");
let inp = document.querySelector(".box input");
let boxInfo = document.querySelector("#boxInfo");
let URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let field = document.querySelector(".ans");
let qr = () => {
    field.innerHTML = `
    <span class="location">Loading...</span>
    `;
    setTimeout(() => {
        field.innerHTML = `
        <img src=${`${URL}${inp.value}`}></img>
        `;
    }, 1500);
}
btn.addEventListener('click', () => {
    if (inp.value == '') {
        field.innerHTML = `
    <span class="shake">Please fill the input.</span>
    `;
        return;
    }
    qr();
});