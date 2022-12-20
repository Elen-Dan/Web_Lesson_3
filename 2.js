const userName = prompt('Введите ваше имя: ');
greeting(userName);

function greeting(name) {
    console.log(`Приветствую, ${name}!`);
}