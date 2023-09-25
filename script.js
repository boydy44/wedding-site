// Calculate number of days until wedding
let weddingDate = new Date("04/10/2025");
let todayDate = new Date();

let dateDiffTime = weddingDate.getTime() - todayDate.getTime();

let dateDiffDays = Math.ceil(dateDiffTime / (1000 * 3600 * 24));

document.querySelector("#daysCounter").innerHTML = dateDiffDays;