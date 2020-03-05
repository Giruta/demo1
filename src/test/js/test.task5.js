import {luckyTickets} from '../../modules/task_5.js';

export function testLuckyTickets(assert) {
    describe('Tests for Task_5', () => {
        it('should return {winner: "Сложный метод", simpleCount: 3, hardCount: 43} if luckyTickets called {min:100000, max:100500}', function () {
            //Given
            const num = {min:100000, max:100500};
            const expected = {winner: "Сложный метод", simpleCount: 3, hardCount: 43};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {winner: "Ничья", simpleCount: 22786, hardCount: 22786} if polindrom called {min:100000, max:500000}', function () {
            //Given
            const num = {min:100000, max:500000};
            const expected = {winner: "Ничья", simpleCount: 22786, hardCount: 22786};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {winner: "Сложный метод", simpleCount: 46, hardCount: 209} if polindrom called {min:2500, max:5500}', function () {
            //Given
            const num = {min:2500, max:5500};
            const expected = {winner: "Сложный метод", simpleCount: 46, hardCount: 209};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {winner: "Простой метод", simpleCount: 55216, hardCount: 54899} if polindrom called {min:900, max:995500}', function () {
            //Given
            const num = {min:900, max:995500};
            const expected = {winner: "Простой метод", simpleCount: 55216, hardCount: 54899};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введённые данные не являются числовыми значениями"} if polindrom called {min:"dcdc", max:[1,1]}', function () {
            //Given
            const num = {min:'dcdc', max:[1,1]};
            const expected = {status: "failed", reason: "Введённые данные не являются числовыми значениями"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите ненулевые данные"} if polindrom called {min:0, max:0}', function () {
            //Given
            const num = {min:0, max:0};
            const expected = {status: "failed", reason: "Введите ненулевые данные"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите ненулевые данные"} if polindrom called {min:0, max:500500}', function () {
            //Given
            const num = {min:0, max:500500};
            const expected = {status: "failed", reason: "Введите ненулевые данные"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введённые данные не являются числовыми значениями"} if polindrom called {min:"ggg", max:500}', function () {
            //Given
            const num = {min:'ggg', max:500};
            const expected = {status: "failed", reason: "Введённые данные не являются числовыми значениями"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {winner: "Сложный метод", simpleCount: 22807, hardCount: 22822} if polindrom called {min:-100000, max:-500500}', function () {
            //Given
            const num = {min:-100000, max:-500500};
            const expected = {winner: "Сложный метод", simpleCount: 22807, hardCount: 22822};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введённые данные не являются целыми числами"} if polindrom called {min:100.54, max:500500.54}', function () {
            //Given
            const num = {min:100.54, max:500500.54};
            const expected = {status: "failed", reason: "Введённые данные не являются целыми числами"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите min < max"} if polindrom called {min:500000, max:100500}', function () {
            //Given
            const num = {min:500000, max:100500};
            const expected = {status: "failed", reason: "Введите min < max"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите ненулевые данные"} if polindrom called {min:100000, max:0}}', function () {
            //Given
            const num = {min:100000, max:0};
            const expected = {status: "failed", reason: "Введите ненулевые данные"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите числа не больше 999999"} if polindrom called {min:1000000, max:5005000}}', function () {
            //Given
            const num = {min:1000000, max:5005000};
            const expected = {status: "failed", reason: "Введите числа не больше 999999"};
        
            //When
            let actual = luckyTickets(num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
    }
)}