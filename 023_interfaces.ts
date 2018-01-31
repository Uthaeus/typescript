interface User {
  email : string;
  firstName? : string;
  lastName? : string;
}

function profile(user: User) : string {
  return `Welcome, ${user.email}`;
}

var realUser = {
  email: 'test@test.com',
  // firstName: 'Homer',
  // lastName: 'Simpson'
};

console.log(profile(realUser));
console.log(realUser.email);