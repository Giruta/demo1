import {chessBoard} from '../../modules/task_1.js';

export function testChessBoard(assert) {
    describe('Tests for Task_1', () => {
        it('should return str = "*" if chessBoard called 1, 1, "*"', function () {
            //Given
            const val_1 = 1;
            const val_2 = 1;
            const val_3 = '*';
            const expected = '\n* \n';
        
            //When
            let actual = chessBoard(val_1, val_2, val_3);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return str = ... if chessBoard called 5, 5, ":"', function () {
            //Given
            const val_1 = 5;
            const val_2 = 5;
            const val_3 = ':';
            const expected = "\n: : : : : \n : : : : :\n: : : : : \n : : : : :\n: : : : : \n"
            //When
            let actual = chessBoard(val_1, val_2, val_3);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "~ ~ ~ ~ ~ " if chessBoard called 5, 1, "~"', function () {
            //Given
            const val_1 = 5;
            const val_2 = 1;
            const val_3 = '~';
            const expected = "\n~ ~ ~ ~ ~ \n"
            //When
            let actual = chessBoard(val_1, val_2, val_3);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "\n+ \n +\n+ \n" if chessBoard called 1, 3, "+"', function () {
            //Given
            const val_1 = 1;
            const val_2 = 3;
            const val_3 = '+';
            const expected = "\n+ \n +\n+ \n"
            //When
            let actual = chessBoard(val_1, val_2, val_3);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "\n77 77 77 \n 77 77 77\n" if chessBoard called -3, 2, "77" ', function () {
            //Given
            const val_1 = -3;
            const val_2 = 2;
            const val_3 = '77';
            const expected = "\n77 77 77 \n 77 77 77\n"
            //When
            let actual = chessBoard(val_1, val_2, val_3);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введите ширину и высоту в диапазоне от 1 до 50 " if chessBoard called 0, 0, "*"', function () {
            //Given
            const val_1 = 0;
            const val_2 = 0;
            const val_3 = '*';
            const expected = "Введите ширину и высоту в диапазоне от 1 до 50"
            //When
            let actual = chessBoard(val_1, val_2, val_3).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введите ширину и высоту в диапазоне от 1 до 50 " if chessBoard called 0, 1, "*"', function () {
            //Given
            const val_1 = 0;
            const val_2 = 1;
            const val_3 = '*';
            const expected = "Введите ширину и высоту в диапазоне от 1 до 50"
            //When
            let actual = chessBoard(val_1, val_2, val_3).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введены не все данные" if chessBoard called 5, "*"', function () {
            //Given
            const val_1 = 5;
            const val_3 = '*';
            const expected = "Введены не все данные"
            //When
            let actual = chessBoard(val_1, val_3).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введены не все данные" if chessBoard called 5, 3', function () {
            //Given
            const val_1 = 5;
            const val_3 = 3;
            const expected = "Введены не все данные"
            //When
            let actual = chessBoard(val_1, val_3).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введённый разделительный символ не является строкой" if chessBoard called 3, 3, 1', function () {
            //Given
            const val_1 = 3;
            const val_2 = 3;
            const val_3 = 1;
            const expected = "Введённый разделительный символ не является строкой"
            //When
            let actual = chessBoard(val_1, val_2, val_3).reason;
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return "Введённые ширина и высота не являются целыми числами" if chessBoard called 5, 1.5, "*"', function () {
            //Given
            const val_1 = 5;
            const val_2 = 1.5;
            const val_3 = '*';
            const expected = "Введённые ширина и высота не являются целыми числами"
            //When
            let actual = chessBoard(val_1, val_2, val_3).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введите разделительный символ" if chessBoard called 1, 2, "" ', function () {
            //Given
            const val_1 = 1;
            const val_2 = 2;
            const val_3 = '';
            const expected = "Введите разделительный символ";
            //When
            let actual = chessBoard(val_1, val_2, val_3).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введите разделительный символ" if chessBoard called 2, 3, "   " ', function () {
            //Given
            const val_1 = 2;
            const val_2 = 3;
            const val_3 = '   ';
            const expected = "Введите разделительный символ";
            //When
            let actual = chessBoard(val_1, val_2, val_3).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введите разделительный символ" if chessBoard called 5, 3, """" ', function () {
            //Given
            const val_1 = 5;
            const val_2 = 3;
            const val_3 = '""';
            const expected = '\n"" "" "" "" "" \n "" "" "" "" ""\n"" "" "" "" "" \n';
            //When
            let actual = chessBoard(val_1, val_2, val_3);
        
            //Then
            assert.equal(actual, expected);
        });
    })
}