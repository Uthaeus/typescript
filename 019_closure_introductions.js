//Functions have access to any public variables in the outer scope
// function nameFunction(name: string) : void {
//   var n : string = name;
//   function printName() {
//     console.log(n);
//   }
//   printName();
// }
// nameFunction("Homer");
//_____________________________
// Inner functions maintain acess to the outer scope even AFTER the values are returned!
// function nameFunction(name: string) {
//   var n : string = name;
//   return function() {
//     console.log(n);
//   }
// }
// var nameAgain = nameFunction('Homer');
// nameAgain();
//______________________________
// 
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
//# sourceMappingURL=019_closure_introductions.js.map