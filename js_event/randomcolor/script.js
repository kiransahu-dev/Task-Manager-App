const chnageCode = document.getElementById("code");
const getColor = () => {
    const randHex = Math.floor(Math.random() * 16777215);
    const hex = "#" + randHex.toString(16);
    document.body.style.backgroundColor = hex;
    chnageCode.innerText = hex;
    navigator.clipboard.writeText(hex);
}

document.getElementById("btn").addEventListener("click", getColor);

getColor();