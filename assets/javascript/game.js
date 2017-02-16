
$(document).ready(function(){

var wins =0;
var losses =0;

var nord = {
	name: "Nord",
	hp: 150, /*HP is Health Points*/
	attpwr: 10,   /*AP is Attack Power*/
	cntratt: 5,   /*CA is Counter Attack*/
	id: "nord", /*ID is actually the photo name.*/
	attack: function(){
		this.attpwr = this.attpwr + 4;
	},
	reset: function(){
		this.attpwr = 10;
		this.hp = 150;
	},
};

var highElf = {
	name: "High Elf",
	hp: 120,
	attpwr: 5,
	cntratt: 10,
	id: "high-elf",
	attack: function(){
		this.attpwr = this.attpwr + 5;
	},
	reset: function(){
		this.attpwr = 5;
		this.hp = 120;
	},
};

var khajit = {
	name: "Khajit",
	hp: 140,
	attpwr: 5,
	cntratt: 10,
	id: "khajit",
	attack: function(){
		this.attpwr = this.attpwr + 3;
	},
	reset: function(){
		this.attpwr = 5;
		this.hp = 140;
	},
};

var orc = {
	name: "Orc",
	hp: 160,
	attpwr: 10,
	cntratt: 10,
	id: "orc",
	attack: function(){
		this.attpwr = this.attpwr + 2;
	},
	reset: function(){
		this.attpwr = 10;
		this.hp = 160;
	},
};

var fighters = [nord, highElf, khajit, orc];
var userCharacter = -1;
var npcIndex = [];
var pickedUC = false;
var pickedNpc = false;
var npc=-1;

function options(){
	for (var i = 0; i < fighters.length; i++) {
	
		var fighterDiv = $("<div>");
		fighterDiv.addClass("fighter col-xs-12 col-sm-5 text-center");
		fighterDiv.attr("id", i);
		$("#choose").append(fighterDiv);
		
		var named = $("<h4>");
		named.addClass("name");
		fighterDiv.append(named);
		var fullName =$(".name");
		fullName[i].append(fighters[i].name);
		
		
		var pic = $("<img src='assets/images/" + fighters[i].id + ".jpg' class = 'img-circle' height = '170px' width = '170px'>");
		fighterDiv.append(pic);

		var healthPoints = $("<h4>");
		healthPoints.addClass("hp");
		healthPoints.attr("id", "track"+i);		
		fighterDiv.append(healthPoints);
		var health = $(".hp");
		health[i].append(fighters[i].hp);
	}
}

function replay(){
	playerCharacter = -1;
	npcIndex = [];
	pickedUC = false;
	pickedNpc = false;
	nord.reset();
	highElf.reset();
	khajit.reset();
	orc.reset();
	$("#clean").html("<div class = 'row center-block' id = 'choose'></div>");
	$("#clean-up").html("<div class = 'col-xs-12' id ='player1'></div>");
	$("#cleaner").html("<div class = 'col-xs-12' id = 'vs' ></div>");
	$("#cleaning").html("<div class = 'col-xs-12' id = 'enemy'></div>");
	$("#messages").html("Click on two warriors to start the game.");
}

function newEnemy(){
	pickedUC = true;
	pickedNpc = false;
}


$(function() { /*According to jQuery's API, this is preferred now.*/
	
	options();
	
	$(document).on("click", ".fighter", function(){
		if(pickedUC===false){
			playerCharacter= this.id;
			pickedUC=true;
			$("#player1").append(this);
			var attackButton = $("<button type='attack' class='btn btn-lg text-center' id='charge'>Attack</button>");
			$("#vs").append(attackButton);
			return pickedUC;
			return playerCharacter;
		}

		if(pickedUC===true && pickedNpc===false){
			if (playerCharacter===this.id) {
				alert("Please pick another character.")
			} else{ 
				npc=this.id;
				pickedNpc=true;
				$("#enemy").append(this);
				return pickedNpc;
				return npc;
			}

			return pickedNpc;
			return npc;

		}
		return pickedPC;
		return pickedNpc;
		return playerCharacter;
		return npc;
	});

	$(document).on("click", "#charge", function(){
		if (pickedNpc===false) {
			alert("You have not picked an opponent");
		}

		$("#track"+ npc).html(fighters[npc].hp -= fighters[playerCharacter].attpwr);
		$("#track"+ playerCharacter).html(fighters[playerCharacter].hp -= fighters[npc].cntratt);
		$("#messages").html(fighters[playerCharacter].name + " attacks for " + 
			fighters[playerCharacter].attpwr + " points worth of damage." + 
			fighters[npc].name + " counter attacks and deals " + 
			fighters[npc].cntratt + " points of damage.");
		fighters[playerCharacter].attack();
		npcIndex.length;
		console.log(npcIndex.length);

	if (fighters[playerCharacter].hp <= 0) {
		$("#messages").html("You Lose!");
		losses++;
		$("#lost").html("Losses: " + losses);
	}

	if(fighters[npc].hp<=0){
		wins++;
		if (npcIndex.length===2) {
			$("#messages").html("You beat the game!");
			$("#won").html("Wins: " + wins);
		}

		npcIndex.push(npc);
		$("#cleaning").html("<div class = 'col-xs-12' id = 'enemy'></div>");
		npc=-1;
		pickedNpc=false;
	}
 
$(document).on("click", "#newGame",function(){
		replay();
		options();
	})
		
		

	});

	
})
})







