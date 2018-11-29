var songs=[];

var titleDiv=document.getElementById('title');
var videoDiv=document.getElementById('video');
var artistDiv=document.getElementById('artist');
var listDiv=document.getElementById('list');

var dream={
	artist:"Anne Hathaway",
	title:"I dreamed a dream",
	image:"url(img/dream.jpeg)",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/86lczf7Bou8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    load:function(){
    	artistDiv.innerHTML=this.artist; 
    	titleDiv.innerHTML=this.title;
        videoDiv.innerHTML=this.video;
    	document.body.style.backgroundImage=this.image;
    }
};

var spongeBob={
	artist:"Dj Suede",
	title:"SpongeBob Fun Song Trap Remix",
	image:"url(img/spongebob.jpeg)",
	video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/tdOflj-esBA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
	load:function(){
		artistDiv.innerHTML=this.artist; 
    	titleDiv.innerHTML=this.title;
        videoDiv.innerHTML=this.video;
    	document.body.style.backgroundImage=this.image;
	}
};

var desposito={
	artist:"Luis",
	title:"desposito",
	image:"url(img/des.jpeg)",
    video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/kJQP7kiw5Fk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    load:function(){
    	artistDiv.innerHTML=this.artist; 
    	titleDiv.innerHTML=this.title;
        videoDiv.innerHTML=this.video;
    	document.body.style.backgroundImage=this.image;
    }
};
var sherlock={
	artist:"Ultimecia",
	title:"the game is on and Irene's theme",
	image:"url(img/sherlock.jpeg)",
	video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/qrl9im7A-bI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
	load:function(){
        artistDiv.innerHTML=this.artist; 
    	titleDiv.innerHTML=this.title;
        videoDiv.innerHTML=this.video;
    	document.body.style.backgroundImage=this.image;
	}
};
var atonement={
	artist:"Sia",
	title:"To Be Human",
	image:"url(img/atonement.jpeg)",
	video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/xw-QIZZwDBg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
	load:function(){
        artistDiv.innerHTML=this.artist; 
    	titleDiv.innerHTML=this.title;
        videoDiv.innerHTML=this.video;
    	document.body.style.backgroundImage=this.image;
	}
};

songs.push(dream);
songs.push(spongeBob);
songs.push(desposito);
songs.push(sherlock);
songs.push(atonement);

function add(){
	var newSong={
		artist:prompt("Artist name?"),
	    title:prompt("Song title?"),
	    image:prompt("image URL?"),
	    video:prompt("Youtube embed code?"),
        load:function(){
	        artistDiv.innerHTML=this.artist; 
	    	titleDiv.innerHTML=this.title;
	        videoDiv.innerHTML=this.video;
	    	document.body.style.backgroundImage=this.image;
	    }
	};
    songs.push(newSong);
    listDiv.innerHTML="";
    for (var i = 0; i < songs.length; i++) {
    	listDiv.innerHTML+='<button onclick="songs['+i+'].load()">'+songs[i].title+'</button>';
    }
    
};




