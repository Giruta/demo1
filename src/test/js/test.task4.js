import {polindrom} from '../../modules/task_4.js';

export function testPolindrom(assert) {
    describe('Tests for Task_4', () => {
        it('should return  9999999   if polindrom called 1234599999998744789', function () {
            //Given
            const num = '1234599999998744789';
            const expected = 9999999;
        
            //When
            let actual = polindrom(num);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  98744789   if polindrom called 123459998744789', function () {
            //Given
            const num = '123459998744789';
            const expected = 98744789;
        
            //When
            let actual = polindrom(num);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  123321   if polindrom called 123321', function () {
            //Given
            const num = '123321';
            const expected = 123321;
        
            //When
            let actual = polindrom(num);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  874478   if polindrom called 568744789', function () {
            //Given
            const num = '568744789';
            const expected = 874478;
        
            //When
            let actual = polindrom(num);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  "Введите число"  if polindrom called "vzdcz"', function () {
            //Given
            const num = 'vzdcz';
            const expected = 'Введите число';
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  "Введите число"  if polindrom called "[]" ', function () {
            //Given
            const num = '[]';
            const expected = "Введите число";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  "Введите число"  if polindrom called NaN ', function () {
            //Given
            const num = NaN;
            const expected = "Введите число";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        }); 
        it('should return  "Введите ненулевые данные"  if polindrom called null', function () {
            //Given
            const num = null;
            const expected = "Введите ненулевые данные";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  "Введите ненулевые данные"  if polindrom called "" ', function () {
            //Given
            const num = '';
            const expected = "Введите ненулевые данные";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        });  
        it('should return  "Введите ненулевые данные"  if polindrom called [] ', function () {
            //Given
            const num = [];
            const expected = "Введите ненулевые данные";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  "Введите ненулевые данные"  if polindrom called 0 ', function () {
            //Given
            const num = 0;
            const expected = "Введите ненулевые данные";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        });  
        it('should return  "Введите целое число"  if polindrom called  10.255 ', function () {
            //Given
            const num = 10.255;
            const expected = "Введите целое число";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        }); 
        it('should return  0  if polindrom called  -123 ', function () {
            //Given
            const num = -123;
            const expected = 0;
        
            //When
            let actual = polindrom(num);
        
            //Then
            assert.equal(actual, expected);
        });  
        it('should return  "Введите число большее 10"  if polindrom called  4 ', function () {
            //Given
            const num = 4;
            const expected = "Введите число большее 10";
        
            //When
            let actual = polindrom(num).reason;
        
            //Then
            assert.equal(actual, expected);
        });        
    })
}