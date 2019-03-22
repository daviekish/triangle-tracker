var a = parseFloat(prompt("Enter dimension of first side"));
var b = parseFloat(prompt("Enter dimension of second side"));
var c = parseFloat(prompt("Enter dimendion of third side"));
var sides = function(a, b, c) {
  return (a + b > c && b + c > a && a + c > b)
}
if (sides(a, b, c) && a === b && b === c) {
  alert("Its an Equiateral triangle.")
} else if (sides(a, b, c) && a === b || b === c || a === c) {
  alert("this forms an isoceles triangle")
} else if (sides(a, b, c) && a != b != c) {
  alert("this is a scalene")
} else {
  alert("INVALID MEASURMENTS!.. NOT A TRIANGLE.")
}
