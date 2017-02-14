
$(document).ready(function(){

var nord = null;
var highElf = null;
var khajit = null;
var orc = null;

   $(".img-circle").hover(function() {
    $(this).animate({'height':'170px', 'width':'170px'});
// close hover function
});

 $("#nord").click(function(){
    console.log("image is clicked");

if (nord == null) {

	nord = this.value
    document.getElementById("nord").innerHTML = "";
    }

// close img-circle function
});

$("#high-elf").click(function(){
    console.log("image is clicked");


if (highElf == null) {

	highElf = this.value
    document.getElementById("high-elf").innerHTML = "";
// close if statement
    }
// close img-circle function
});

$("#khajit").click(function(){
    console.log("image is clicked");


if (khajit == null) {

	khajit = this.value
    document.getElementById("khajit").innerHTML = "";
// close if statement
    }
// close img-circle function
});

$("#orc").click(function(){
    console.log("image is clicked");


if (orc == null) {

	orc = this.value
    document.getElementById("orc").innerHTML = "";
// close if statement
    }
// close img-circle function
});








// close document ready function
});