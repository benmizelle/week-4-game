
$(document).ready(function(){

var nord = null;

var highElf = null;

var khajit = null;

var orc = null;

var hp = 150;

var userAttack = 30;

var counterAttackKhajit = 30;
var counterAttackHighElf = 35;
var counterAttackNord = 40;
var counterAttackOrc = 45;

var attackButton = null;


   $(".img-circle").hover(function() {
    $(this).animate({'height':'170px', 'width':'170px'});
// close hover function
});

 $("#nord").click(function clickFirst(){
    console.log("image is clicked");

if (nord == null) {

	nord = this.value
    document.getElementById("nord").innerHTML = "";

    $('.container').prepend('<img id="nord" class="img-circle" src="assets/images/nord.JPG"/>');
// close if statement
    }

// close click img-circle function
});

$("#high-elf").click(function clickFirst() {
    console.log("image is clicked");


if (highElf == null) {

	highElf = this.value
    document.getElementById("high-elf").innerHTML = "";

   $('.container').prepend('<img id="high-elf" class="img-circle" src="assets/images/high-elf.JPG"/>');
// close if statement
    }
// close clcick img-circle function
});

$("#khajit").click(function clickFirst(){
    console.log("image is clicked");


if (khajit == null) {

	khajit = this.value
    document.getElementById("khajit").innerHTML = "";

    $('.container').prepend('<img id="khajit" class="img-circle" src="assets/images/khajit.JPG"/>');
// close if statement
    }
// close click img-circle function
});

$("#orc").click(function clickFirst(){
    console.log("image is clicked");


if (orc == null) {

	orc = this.value
    document.getElementById("orc").innerHTML = "";

    $('.container').prepend('<img id="orc" class="img-circle" src="assets/images/orc.JPG"/>');
// close if statement
    }
// close click img-circle function
});











});