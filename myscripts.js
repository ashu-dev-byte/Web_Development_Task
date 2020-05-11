let value = 0;
let chk1 = 0.5;
let chk2 = 1;
let ftp = false;
let btn_id = "25serve";

$(document).ready(function () {
  $("#25serve").click();
  $("#25serve").focus();
});

function func_one() {
  value = $(this).val();
  btn_id = this;
  $("#one").text("$" + value * chk1);
  $("#two").text("$" + value * chk2);
  $("#three").text("$" + (value * chk2 - value * chk1));
  $("#four").text("For " + value + " serving");
  $("#five").text("For " + value + " serving");
}

$("button").click(func_one);

function func_two() {
  $(btn_id).focus();
  $("#one").text("$" + value * chk1);
  $("#two").text("$" + value * chk2);
  $("#three").text("$" + (value * chk2 - value * chk1));
  $("#four").text("For " + value + " serving");
  $("#five").text("For " + value + " serving");
}

function calAmount(bid) {
  ftp = !ftp;

  if (ftp == false) {
    chk1 = 0.5;
    chk2 = 1;
  } else {
    chk1 = 1;
    chk2 = 2;
  }
  func_two();
}
