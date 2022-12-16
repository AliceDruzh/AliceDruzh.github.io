let site, design, adaptive;

let calculator = {
    price:[
        [100, 500, 1000, 2000, 5000],
        [500, 1000, 2000],
        [1000, 2000, 5000],
    ],
    
    days: [
        [1, 2, 3, 6, 8],
        [3, 2, 4],
        [1, 5, 6],
    ],
    run(siteType, designType, adaptiveType){
        let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][designType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][designType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
        alert("Сроки: "+ days + " Стоимость: " + sum);
    
    }
}

function getAnswers (){
site = prompt("Какой тип сайта нужен? \n1 - Сайт-визитка, \n2 - Сайт электронной коммерции, \n3 - Интернет-портал, \n4 - Социальная платформа, \n5 - Вики-сайт");
    if(site == null){
        return;
    }
    if(site != 1 && site != 2 && site != 3 && site != 4 && site != 5){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
design = prompt("Какой тип дизайна нужен? \n1 - Шаблон, \n2 - Уникальный");
    if(design == null){
        return;
    }
        if(design != 1 && design != 2 && design != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }

adaptive = prompt("Какой тип адаптивности нужен? \n1 - ПК, \n2 - ПК + мобильная версия, \n3 - Мобильная версия");
    if(adaptive == null){
        return;
    }
        if(adaptive != 1 && adaptive != 2 && adaptive != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    calculator.run(site, design, adaptive);

}

    
    
setTimeout(getAnswers, 10000);






















