export function luckyTickets (obj) {
    
    let resultVal = validationTickets(obj);

    if (typeof (resultVal) === 'object') {
        return resultVal;
    }

    let min = Math.abs(obj.min);
    let max = Math.abs(obj.max);
    let result = {
        winner: '',
        simpleCount: 0,
        hardCount: 0,
    };

    for (let i = min; i <= max; i++) {
        if(firstMethod(i)) {result.simpleCount++;}
        if(secondMethod(i)) {result.hardCount++;}
    }
    
    result.hardCount > result.simpleCount ? result.winner = 'Сложный метод' : result.winner = 'Простой метод';
    result.hardCount == result.simpleCount ? result.winner = 'Ничья' : result;

    return result;
}

function toSixNumeral(number) {
    let str = number.toString();
    let strLength = 6 - str.length;

    for (let i = 0; i < strLength; i++) {
        str = '0' + str;
    }
    return str;
}

function firstMethod (number) {
    let arr = toSixNumeral(number).split('');
    let sum_1 = 0, sum_2 = 0;
    let half = arr.length / 2;

    arr.forEach((el, i, arr) => {
        i < half ? sum_1 += +el : sum_2 += +el;
    });

    return (sum_1 === sum_2) ? true : false;
}

function secondMethod (number) {
    let arr = toSixNumeral(number).split('');
    let sum_1 = 0, sum_2 = 0;

    arr.forEach((el, i, arr) => {
        (i % 2 === 0) ? sum_1 += +el : sum_2 += +el;
    });

    return (sum_1 === sum_2) ? true : false;
}

function validationTickets (obj) {

    // проверка на наличие необходимых аргументов и ноль
    if (arguments.length === 0 || obj == undefined || obj.min == 0 || obj.max == 0) {
        return {
            status: 'failed', 
            reason: "Введите ненулевые данные"
        };
    }
    obj.min = Math.abs(obj.min);
    obj.max = Math.abs(obj.max);
    // являются ли введенные данные числами
    if (typeof obj.min != "number" || typeof obj.max != "number" || isNaN(obj.min) || isNaN(obj.min)) {
        return { 
             status: "failed", 
             reason: "Введённые данные не являются числовыми значениями"
        }; 
    }
    // проверка - являются ли введенные данные числами, с учетом преобразования на фронте в Number
    if (isNaN(obj.min) || isNaN(obj.max)) {
        return {
            status:'failed', 
            reason: 'Введённые данные не являются числовыми значениями'
        }
    }
    // являются ли введенные данные целыми числами
    if (!Number.isInteger(obj.min) || !Number.isInteger(obj.max)) {
        return {
            status: "failed", 
            reason: "Введённые данные не являются целыми числами"
        }; 
    }
    // проверка на min < max
    if (obj.min > obj.max) {
        return {
            status: "failed", 
            reason: "Введите min < max"
        };
    }
    // проверка на шестизначность чисел
    if (obj.min.toString().length > 6 || obj.max.toString().length > 6) {
        return {
            status: "failed", 
            reason: "Введите числа не больше 999999"
        };
    }
}

// console.log('result ticket = ', luckyTickets({min:100000, max:100500}));
// console.log('result ticket = ', luckyTickets({min:100000, max:500000}));
// console.log('result ticket = ', luckyTickets({min:2500, max:5500}));
// console.log('result ticket = ', luckyTickets({min:900, max:995500})); // nich
// console.log('result ticket = ', luckyTickets({})); // не число
// console.log('result ticket = ', luckyTickets({min:'dcdc', max:[1,1]})); //не число
// console.log('result ticket = ', luckyTickets({min:0, max:0})); //не ноль
// console.log('result ticket = ', luckyTickets({min:0, max:500500})); // не ноль
// console.log('result ticket = ', luckyTickets({min:'ggg', max:500}));// не число
// console.log('result ticket = ', luckyTickets({min:-100000, max:-500500})); 
// console.log('result ticket = ', luckyTickets({min:100.54, max:500500.54}));//не целые
// console.log('result ticket = ', luckyTickets({min:500000, max:100500}));//мин меньше макс
// console.log('result ticket = ', luckyTickets({min:100000, max:0}));// не ноль
// console.log('result ticket = ', luckyTickets({min:1000000, max:5005000}));
