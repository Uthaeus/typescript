//Boolean
var paidAccount = false;
//Number
var age = 32;
var taxRate = 7.5;
//String
var fullName = "Homer Simpson";
//Array
var ages = [33, 28, 11];
//Tuples
var player;
player = [3, "Correa", .333, 33];
//Enum
var Stage;
(function (Stage) {
    Stage[Stage["Approved"] = 0] = "Approved";
    Stage[Stage["Pending"] = 1] = "Pending";
    Stage[Stage["Rejected"] = 2] = "Rejected";
})(Stage || (Stage = {}));
;
var job = Stage.Pending;
//Any
var apiData = [123, "Homer", false];
//Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=007_types.js.map