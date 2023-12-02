console.log('number' + 23 + 32);    // prints 'number2332' as JS tries to make both sides the same data type and 23 and 32 become strings -> 'number' + '23' + '32' = 'number2332'
console.log(41 + 1 + 'number');    // prints '42number': first it's a sum of numbers 41 + 1 = 42 and then 42 becomes a string which concatenates with a string 'number'
console.log(null + 1);    // prints number 1: null is empty value and it's like 0 + 1 = 1
console.log('five' + + 'two');    // prints 'fiveNaN': ++ means an increment and it tries to increment string 'two' but it's not a number -> NaN; then 'five' is 'making' NaN a string and concatenates = 'fiveNaN'
console.log(2 && 7)   // prints 7: as both 2 and 7 are not 0, are both true and so, first 2 will be executed and then 7
console.log(+'40' + +'2');   // prints number 42: +'40' is converting the string '40' to a number 40. The number 40 is then added with ++ to the other number 2 resulting in 42
console.log('10' - 5 === 6);   // prints false: a minus makes a string '10' a number, then 10 - 5 = 5, when we compare 5 and 6 we get false
console.log(true + false);   // prints number 1: true is 1 by default and false is 0 by default -> 1 + 0 = 1
console.log('4px' - 3);   // prints NaN: minus changes a sting '4px' to a number and it becomes NaN as it can't become a number, NaN can't be used further
console.log('4' - 3);   // prints number 1: minus makes '4' a number 4, 4 - 3 = 1;
console.log('2' + 3 ** 2);   // prints string '29': first exponentiation operator works 3 * 3 = 9, then string '2' is making the next value also a string and concatenates with it '2' + '9' = '29'
console.log(12 / '6');   // prints number 2: as we have a devision, string '6' becomes number 6 -> 12 / 6 = 2
console.log(23 + 42 + 'number');   // prints '65number': first 23 + 42 = 65, then + 'number' makes the number 65 a string and concatenate with it
console.log('10' + (5 === 6));   // prints '10false': first we compare 5 and 6 is false, then string '10' and + makes the value false a string 'false', '10' + 'false' = '10false'
console.log('number' + 15 + 3);    // prints 'number153': 'number' + makes 15 a string and concatenates with it -> 'number15' and then it makes number 3 a string and concatenates with it -> 'number15' + '3' = 'number153'
console.log(undefined + 1);    // prints NaN: it's impossible to get a value for the undefined and it's not declared yet
console.log('true' == true);   // prints false: boolean true is 1 in the equality operator, then we compare "true" == 1 and we try to make 'true' a number and get NaN -> NaN == 1 when one of the operants is NaN false is returned
console.log(false == 'false');    // prints false: as false is boolean we take it as 0 -> 0 == false we try to make 'false' a number and get NaN -> 0 == NaN when one of the operants is NaN false is returned
console.log(null == '');    // prints false: comparing any variable with null will always evaluate to false, regardless of it's value
console.log(3 ** (9 / 3));   // prints number 27: first 9 / 3 = 3, then 3 * 3 * 3 = 27
console.log(!!'false' == !!'true');   // prints true: first "false" and "true" are two strings not boolean values, adding !! operator means non-emtry string is true, so they are both true, then !!true == !!true -> they become false and back true -> true = true gives true
console.log(0 || '0' && 1);   // prints number 1: first && goes and as non-empty string '0' is true and number 1 is true -> 1 will be executed last, then 0 || 1 -> as 0 is false the next 1 is executed and returned
console.log(1 < 2 < 3);    // prints true: as 1 < 2 -> true, then true < 3 or 1 < 3 -> true
console.log('foo'+ + +'bar');   // prints 'fooNaN': string 'foo' and + means the next expression becomes a string, the next expression is ++'bar' = NaN as the string can be calculated -> 'foo' + 'NaN' = 'fooNaN'
console.log(3 ** 2 / 3);    // prints number 3: first 3 * 3 = 9, then 9 / 3 = 3
console.log(1 < 2 > 3);   // prints false: as 1 < 2 -> true, then true > 3 or 1 > 3 -> false
console.log((+null == false) < 1);   // prints false: +null makes it 0, then 0 == false is the same as 0 == 0 and gives true, true < 1 is the same as 1 < 1 and this gives false
console.log(false && true || true);   // prints true: first false && true will give false as one of the values is false, then false || true gives true as after the left side the right will be run
console.log(false && (true || true));    // prints false: first true || true gives true as both are true, then false && true will result in false because one of them is false
console.log((+null == false) < 1 ** 5);    // prints false: first +null == false is the same as 0 == false or 0 == 0 and gives true, then 1 ** 5 = 1 * 1 * 1 * 1 * 1 = 1, and last true < 1 is the same as 1 < 1 and gives false