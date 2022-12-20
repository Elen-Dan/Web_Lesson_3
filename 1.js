const cels = Number.parseFloat(prompt('Введите температуру в градусах Цельсия: '));


/* Преобразовываем в градусы Фаренгейта с округлением */
function convertCelsToFarenh(a) {
    return Number((cels * (9 / 5) + 32).toFixed(1));
}
alert(`По Цельсию: ${cels}, По Фаренгейту: ${convertCelsToFarenh(cels)}`);