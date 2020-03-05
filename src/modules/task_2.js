export function envelope (env1, env2) {     

    //по договоренности берем числа по модулю
    let a = Math.abs(env1.w);
    let b = Math.abs(env1.h);
    let c = Math.abs(env2.w);
    let d = Math.abs(env2.h);

    let result = validationEnvelope(a,b,c,d);

    if (typeof (result) === 'object') {
        return result;
    }

    // запишим в высоту мин значение из двух введенных параметров письма
    // а в ширину макс значение для каждого конверта
    let h1 = a < b ? a : b;
    let w1 = a > b ? a : b;
    let h2 = c < d ? c : d;
    let w2 = c > d ? c : d;

    // проверка вложенности конвертов при параллельном вложении 
    // и при произвольном - по формуле
    if ((h1 > h2 && w1 > w2) || 
        (w2 > w1 && h1 >= (2 * w2 * h2 * w1 + (w2 * w2 - h2 * h2) * Math.sqrt(w2 * w2 + h2 * h2 - w1 * w1)) / (w2 * w2 + h2 * h2))) {
        result = 1;
    } else if ((h2 > h1 && w2 > w1) || 
        (w1 > w2 && h2 >= (2 * w1 * h1 * w2 + (w1 * w1 - h1 * h1) * Math.sqrt(w1 * w1 + h1 * h1 - w2 * w2))/ (w1 * w1 + h1 * h1))) {
        result = 2;
    } else result = 0;
    
    return result;
}

function validationEnvelope (a,b,c,d) {

    // проверка на наличие необходимых аргументов
    if (arguments.length < 4 || a == undefined || b == undefined || c == undefined || d == undefined) {
        return {
            status: 'failed', 
            reason: "Введены не все данные"
        };
    }
    // являются ли введенные данные числами
    if (typeof a != "number" || typeof b != "number" || typeof c != "number" || typeof d != "number") {
       return { 
            status: "failed", 
            reason: "Введённые данные не являются числовыми значениями"
        }; 
    }
    // проверка на пустые строки и нули, с учетом того, что на фронте есть преобразование в Number
    if (a == 0 || b == 0 || c == 0 || d == 0) {
        return { 
            status: "failed", 
            reason: "Введите ненулевые данные"
        }
    }
    // проверка - являются ли введенные данные числами, с учетом преобразования на фронте в Number
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return {
            status:'failed', 
            reason: 'Введённые данные не являются числовыми значениями'
        }
    }
    return true;
}

//console.log('result = ', envelope({w:80,h:80}, {w:80,h:80}));
// console.log('result = ', envelope({w:100,h:80}, {w:20,h:60}));
// console.log('result = ', envelope({w:2,h:12}, {w:9,h:80}));
// console.log('result = ', envelope({w:'35',h:71}, {w:4,h:6}));
// console.log('result = ', envelope({w:10.56,h:80.5}, {w:10.3,h:-80}));
// console.log('result = ', envelope({w:0,h:80}, {w:20,h:0}));
// console.log('result = ', envelope({w:'',h:80}, {w:2,h:6}));
// console.log('result = ', envelope({w:-100,h:15}, {w:20,h:60}));
// console.log('result = ', envelope({w:'sdfsd',h:15.4}, {w:20,h:60}));
// console.log('result = ', envelope({w:'20,3',h:15.4}, {w:20,h:60}));
// console.log('result = ', envelope({w:88,h:null}, {w:20,h:60}));
// console.log('result = ', envelope({w:88,h:undefined}, {w:20,h:60}));
// console.log('result = ', envelope({w:20,h:60}));
