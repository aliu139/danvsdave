function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getPairOfRandomInts(max) {
    var firstVal = getRandomInt(max);
    var secondVal = getRandomInt(max);

    while(secondVal === firstVal){
        secondVal = getRandomInt(max);
    }

    return [firstVal, secondVal];
}

function loadNewImages(){
    var pairOfInts = getPairOfRandomInts(3);

    document.getElementById('pic1').innerHTML = `<img style="height:100%" src="res/${pairOfInts[0]}.png">`;
    document.getElementById('pic2').innerHTML = `<img style="height:100%" src="res/${pairOfInts[1]}.png">`;
}

window.addEventListener('load', function() {
	var el = document.getElementById('everything');
	var hammertime = Hammer(el);
	hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	hammertime.on('swipe', function(ev) {
	    switch(ev.direction) {
	    	case Hammer.DIRECTION_UP:
                console.log('up');
                loadNewImages();
	    		break;
	    	case Hammer.DIRECTION_DOWN:
                console.log('down');
                loadNewImages();
	    		break;
	    }
    });

    loadNewImages();
}, false);

