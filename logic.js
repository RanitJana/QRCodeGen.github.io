let btn = document.querySelector("button");
let inp = document.querySelector(".box input");
let boxInfo = document.querySelector("#boxInfo");
let URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let field = document.querySelector(".ans");
let qr = async () => {
    field.innerHTML = `
    <span class="location">Loading...</span>
    `;
    field.innerHTML = `
        <img src=${`${URL}${inp.value}`}></img>
    `;
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