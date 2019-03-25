function checkpoint() {
  /* var = parseInt(documents.Name_of_element_Form.Field_Name(input).value);*/
  /*Input Felds*/
  a = parseInt(document.Triangle_inputs.input1.value);
  b = parseInt(document.Triangle_inputs.input2.value);
  c = parseInt(document.Triangle_inputs.input3.value);
  /*var sides = function(a,b,c){
  return ( a+b>c && b+c>a && a+c>b)
  }*/
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
