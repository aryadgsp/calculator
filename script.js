// script untuk mendapatkan nilai dari id
var input = document.getElementById("display");

// script untuk mendapatkan nilai input dari tombol
input.addEventListener("keyup", function(event) {

    // skrip untuk mendeteksi jika tombol enter diklik untuk mengevaluasi hasilnya
  
    if (event.keyCode == 13) {
    
      // script untuk mengoperasikan id equal

      document.getElementById("equal").click();
  }
});

// fungsi untuk menghitung hasilnya
function calculate(operation) {
  let result;
  try {
    result = eval(operation);  
  } catch (error) {}

  if ( result === 0 || isFinite(result) && Boolean(result) ) {
    document.getElementById('display').value = result;
  } else {
    document.getElementById('display').value = 'Invalid operation';
  }

} 