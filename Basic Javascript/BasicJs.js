let firstName = 'Apiwat';
let lastName = 'Johntapa';

function fullName(firstName,lastName) {
  if (firstName === "Shippop") {
    return "Best Online Shipping Platform";
  } else {
    return "Hello Shippop, My name is"+" "+ firstName +" "+lastName;
  }
}
console.log(fullName(firstName,lastName));