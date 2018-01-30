console.log(fullName("Homer", "Simpson"));
// console.log(otherFullName("Homer", "Simpson"));
// console.log(thirdFullName("Homer", "Simpson"));

// Function declaration

function fullName(first: string, last: string) : string {
  return first + " " + last;
}

// Function expression

var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}

