export function chessBoard(high, width, symbol) {
    high = Math.abs(high); 
    width = Math.abs(width); 

    let result = validationChessBoard(high, width, symbol);

    if (typeof (result) === 'object') {
        return result;
    }
    
    result = '\n';
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < high; j++) {
            result = i%2 === 1 ? result + ' ' + symbol : result + symbol + ' ';
        }
        result += '\n'
    }
    return result;
}

function validationChessBoard(high, width, symbol) {
    // проверка на наличие необходимых аргументов
    if (arguments.length < 3 || high == undefined || width == undefined || symbol == undefined) {
        return {
            status: 'failed', 
            reason: "Введены не все данные"
        };
    }
    // являются ли ширина и высота числами
    if (typeof width != "number" || typeof high != "number") {
        return { 
            status: "failed", 
            reason: "Введённые ширина или высота не являются числовыми значениями"
        }; 
    }
    // является ли разделитель строкой
    if (typeof symbol != "string") {
        return { 
            status: "failed", 
            reason: "Введённый разделительный символ не является строкой"
        }; 
    }
    // являются ли введенные данные целыми числами
    if (!Number.isInteger(high) || !Number.isInteger(width)) {
        return {
            status: "failed", 
            reason: "Введённые ширина и высота не являются целыми числами"
        }; 
    }
    // проверка на диапазон
    if (high == 0 || high > 50 || width == 0 || width > 50) {
        return {
            status: "failed", 
            reason: "Введите ширину и высоту в диапазоне от 1 до 50"
        };
    }
    // проверка на ввод разделительного символа
    if(symbol.trim() === '') {
        return {
            status: "failed", 
            reason: "Введите разделительный символ"};
    }
    return true;
}

//console.log('result str = ', chessBoard(1, 1, '*'));
//console.log('result str = ', chessBoard(5, 5, ':'));
//console.log('result str = ', chessBoard(0, 0, '*'));
//console.log('result str = ', chessBoard(0, 1, '*'));
//console.log('result str = ', chessBoard(5, 1, '~'));
//console.log('result str = ', chessBoard(1, 3, '+'));
//console.log('result str = ', chessBoard(5, '*'));
//console.log('result str = ', chessBoard(5, 3));
//console.log('result str = ', chessBoard(3, 3, 1));
//console.log('result str = ', chessBoard(-3, 2, '77'));
//console.log('result str = ', chessBoard(1, 2, ''));
//console.log('result str = ', chessBoard(2, 3, '   '));
//console.log('result str = ', chessBoard(5, 3, '""'));

//console.log('result str = ', chessBoard(5, 1.5, '*'));
// console.log('result str = ', chessBoard(5, 5, '*'));

