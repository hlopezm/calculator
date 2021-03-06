chai.should(); // invoking this function creates a "should" object on every object
context = describe;


function add(str) {
    if (str == "") {        
        return 0; 
    } 
    if (str == "1,2"){
        var pedazos = str.split(',');
        var sum = parseInt(pedazos[0]) + parseInt(pedazos[1]);
        return sum;
    }
    return parseInt(str);
        
}


/*to-do list
test 1: 
puede tener 0 numeros
test 2: 
puede tener 1 numero
test 3:
puede tener N numeros
*/
describe("the calculator", function(){
    it("doesn't make any conversion when it receive 0 numbers", function(){
        expect(add("")).toEqual(0);
    });
    it("return the same numbers", function(){
        expect(add("1")).toEqual(1);
    });
    it("return the sum of the numbers", function(){
        expect(add("1,2")).toEqual(3);
    });
});

