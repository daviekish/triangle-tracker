function triangleTracker() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);


  if(isNaN(a,b,c) === true || (a<=0 || b<=0 || c<=0)){
    alert("NOTHING")
  }
   else if ( a === b && b === c) {
    alert("It's an Equiateral triangle.")
  }

  else if ( a === b || b === c || a === c) {
    alert("This forms an isoceles triangle")
  }
  else if ((a+b)<=c || (b+c)<=a || (a+c)<=b ){
    alert("INVALID MEASURMENTS!.. NOT A TRIANGLE.")
  }
  else if ( a !== b !== c) {
    alert("this is a scalene")
  }
}

function reset(){
  location.reload();
}
