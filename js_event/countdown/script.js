const endDate = "19 May 2023 11:30 AM";

document.getElementById('end-date').innerText = endDate;

const input = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        return
    }
    // convert into days
    const days = Math.floor(diff / 3600 / 24);
    // convert to hours
    const hours = Math.floor((diff / 3600) % 24)
    // convert minutes
    const minutes = Math.floor((diff / 60) % 60);
    // convert sec
    const sec = Math.floor(diff % 60);

    input[0].value = days;
    input[1].value = hours;
    input[2].value = minutes;
    input[3].value = sec;

}

setInterval(() => {
    clock();
}, 1000);