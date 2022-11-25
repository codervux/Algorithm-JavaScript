const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (value) => {
  input.push(value);
  if(input.length==2) {
  var tong = input[0].split(" ");
  var tgxem = input[1].split(" ");
  var tonggio = parseInt(tong[0]) * 60 * 60;
  var tongphut = parseInt(tong[1]) * 60;
  var tonggiay = parseInt(tong[2]);
  var gioxem = parseInt(tgxem[0]) * 60 * 60;
  var phutxem = parseInt(tgxem[1]) * 60;
  var giayxem = parseInt(tgxem[2]);
  
  var tgtong = tonggio + tongphut + tonggiay;
  var tgthuc = gioxem + phutxem + giayxem;
  function UCLN(a, b) {
    if (a == 0 || b == 0) {
      return a + b;
    }
    while (a != b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    return a;
  }
  var uc = UCLN(tgtong, tgthuc);
  var tu = tgthuc / uc;
  var mau = tgtong / uc;
  console.log(tu + " " + mau);
  rl.close();
}
});
