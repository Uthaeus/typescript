//Boolean
let paidAccount : boolean = false;

//Number
let age : number = 32;
var taxRate : number = 7.5;

//String
var fullName : string = "Homer Simpson";

//Array
var ages : number[] = [33, 28, 11];

//Tuples
let player : [number, string, number, number];
player = [3, "Correa", .333, 33];

//Enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Pending;

//Any
var apiData : any[] = [123, "Homer", false];

//Void
function printOut(msg: string) : void {
  console.log(msg);
}
