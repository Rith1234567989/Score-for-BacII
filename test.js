function show_result() {
  let K = parseFloat(document.getElementById("K").value);
  let M = parseFloat(document.getElementById("M").value);
  let G = parseFloat(document.getElementById("G").value);
  let I = parseFloat(document.getElementById("I").value);
  let H = parseFloat(document.getElementById("H").value);
  let D = parseFloat(document.getElementById("D").value);
  let E = parseFloat(document.getElementById("E").value);
  if (E < 25) {
    E = 0;
  } else if (E >= 25) {
    E = E - 25;
  }
  let total = K + M + G + I + H + D + E;
  document.getElementById("total").innerText = total;
  let mention;
  if (total >= 427 && total <= 475) {
    mention = "A";
  } else if (total >= 380 && total <= 426) {
    mention = "B";
  } else if (total >= 332 && total <= 379) {
    mention = "c";
  } else if (total >= 286 && total <= 331) {
    mention = "D";
  } else if (total >= 237 && total <= 285) {
    mention = "E";
  } else if (total <= 237) {
    mention = "F";
  }
  document.getElementById("mention").innerText = mention;
  let result = total >= 237 ? "ជាប់" : "ធា្លក់";
  document.getElementById("final_result").innerText = result;
}
