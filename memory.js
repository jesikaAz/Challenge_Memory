var paire=0;
var html="";
var tileId1=0;
var tileId2=0;

function tile(id,img) {
	this.id = id;
	this.img = img;
}

	var tile1 = new tile(1, "img/facebook.png");
	var tile2 = new tile(2, "img/google-plus.png");
	var tile3 = new tile(3, "img/skype.png");
	var tile4 = new tile(4, "img/linkedin.png");
	var tile5 = new tile(5, "img/whatsapp.png");
	var tile6 = new tile(6, "img/instagram.png");
	var tile7 = new tile(7, "img/twitter.png");
	var tile8 = new tile(8, "img/rss.png");

//tableau de cartes 
var tileTab =[tile1, tile1, tile2, tile2, tile3, tile3, tile4, tile4, tile5, tile5, tile6, tile6, tile7, tile7, tile8, tile8];

//mélange du paquet
	function shuffle(array) {

	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];

	        array[i] = array[j];
	        array[j] = temp;
	    }

	    return array;
	}
	
	tileTab = shuffle(tileTab);	

//affichage des cartes 
	var i = 0;

	while(i < tileTab.length){
		html += "<div class='tile' id="+i+" data-card="+tileTab[i].id+" onclick = 'memory("+ i +", "+tileTab[i].id+", \""+tileTab[i].img+"\")'><img class=\"tile-img\" src=\"img/telegram.png\"></div>"
		i++;
	}

//comparaison des cartes
	function memory(id, tileId, img){

		if(paire == 0){
			document.getElementById(id).innerHTML = "<img class=\"tile-img\" src="+img+">";
			id1 = id;
			tileId1 =tileId;
			paire ++;

			return array;
		}

		else if(paire == 1)
			document.getElementById(id).innerHTML = "<img class=\"tile-img\" src="+img+">";
			id2 = id;
			tileId2 =tileId;

			if(tileId1 == tileId2 && id1 != id2){
				paire = 0;
			}
			else{
				
				setTimeout(function(){
					document.getElementById(id1).innerHTML = "<img class=\"tile-img\" src=\"img/telegram.png\"></div>";
					document.getElementById(id2).innerHTML = "<img class=\"tile-img\" src=\"img/telegram.png\"></div>";
					paire = 0;
				},1000);
			}
	}

	console.log(html);
document.getElementById("memory").innerHTML = html;

