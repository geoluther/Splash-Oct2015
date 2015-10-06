// splash.js
// js to generate gift icons in splash page


var tix = {
	"gift": [
		{ 
			"name": "Bill Maher",
			"text": "Bill Maher: Some Monday, Day, Some Location, Some Price",
			"id": "bill-maher",
			"imgSrc":"./splash/img/Bill-Maher.jpg",
			"imgOver": "./splash/img/Bill-Maher-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=200&premium_type=premium_other&premium=Bill%20Maher%20Tickets%20July18"
		},

		{ 
			"name": "Steel Pulse",
			"id": "steel-pulse",
			"imgSrc":"./splash/img/steelpulse-tix.jpg",
			"imgOver": "./splash/img/steelpulse-tix-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Steel%20Pulse%20Tickets%20April14"
		},

		{
			"name": "Greensky Bluegrass March 12",
			"id": "greensky-march12",
			"imgSrc":"./splash/img/greensky-march12.jpg",
			"imgOver": "./splash/img/greensky-march12-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Greensky%20Bluegrass%20Tickets%20March12"

		},

		{
			"name": "Greensky Bluegrass March 13",
			"id": "greensky-march13",
			"imgSrc":"./splash/img/greensky-march13.jpg",
			"imgOver": "./splash/img/greensky-march13-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Greensky%20Bluegrass%20Tickets%20March13"
		},


		{
			"name": "Greensky Bluegrass March 14",
			"id": "greensky-march14",
			"imgSrc":"./splash/img/greensky-march14.jpg",
			"imgOver": "./splash/img/greensky-march14-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Greensky%20Bluegrass%20Tickets%20March14"
		},

		{
			"name": "Punch Brothers",
			"id": "punch-bros",
			"imgSrc": "./splash/img/punch-bros.jpg",
			"imgOver": "./splash/img/punch-bros-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?otherAmount=100&premium_type=premium_other&premium=$100%20Punch%20Brother%20Tickets%20April7"
		},

		{
			"name": "Zion I March 6",
			"id": "zion-i-march6",
			"imgSrc":"./splash/img/zion-i-march6.jpg",
			"imgOver": "./splash/img/zion-i-march6-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Zion%20I%20March6%20Tickets"
		},

		{
			"name": "Zion I March 7",
			"id": "zion-i-march7",
			"imgSrc":"./splash/img/zion-i-march7.jpg",
			"imgOver": "./splash/img/zion-i-march7-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Zion-I%20March7%20Tickets"
		},

		{
			"name": "Stevie Wonder",
			"id": "stevie-wonder",
			"imgSrc": "./splash/img/stevie-wonder-tix.jpg",
			"imgOver": "./splash/img/stevie-wonder-tix-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=200&premium_type=premium_other&premium=Stevie%20Wonder%20Concert%20Tickets%20March17"
		},

				{
			"name": "Avett Brothers July 10",
			"id": "avett-brothers-july10",
			"imgSrc": "./splash/img/avett-bros-july10.jpg",
			"imgOver": "./splash/img/avett-bros-july10-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Avett%20Bros%20Tickets%20July10"
		},

				{
			"name": "Avett Brothers July 11",
			"id": "avett-brothers-july11",
			"imgSrc": "./splash/img/avett-bros-july11.jpg",
			"imgOver": "./splash/img/avett-bros-july11-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Avett%20Bros%20Tickets%20July11"
		},

		{
			"name": "Avett Brothers July 12",
			"id": "avett-brothers-july12",
			"imgSrc": "./splash/img/avett-bros-july12.jpg",
			"imgOver": "./splash/img/avett-bros-july12-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=88.5&premium_type=premium_other&premium=Avett%20Bros%20Tickets%20July12"
		}

	]
};

var cds = {
	"gift": [
		{
			"name": "cd 1",
			"id": "cd-1",
			"imgSrc":"https://placeimg.com/100/100/any",
			"imgOver": "https://placeimg.com/100/100/any",
			"link": "http://placekitten.com"
		},

		{
			"name": "cd 2",
			"id": "cd-2",
			"imgSrc":"https://placeimg.com/100/100/any",
			"imgOver": "https://placeimg.com/100/100/any",
			"link": "http://placekitten.com"
		}
	]
};


var other = {
	"gift": [

		{
			"name": "reggae bloodlines shirt",
			"id": "reggae-shrit",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-reggae-shirt.jpg",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-reggae-shirt-over.gif",
			"link": "http://www.kgnu.org/cgi-bin/moreinfo.py?Notice=1363186753"
		},

		{
			"name": "radio waves",
			"id": "radio-waves",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-radiowaves.jpg",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-radiowaves-over.gif",
			"link": "http://www.kgnu.org/cgi-bin/moreinfo.py?Notice=1330474534"
		},

		{
			"name": "honky tonk shirt",
			"id": "hth-shirt",
			"imgSrc":"http://www.kgnu.org/images/2011-spring-splash/gift-honk.jpg",
			"imgOver": "http://www.kgnu.org/images/2011-spring-splash/gift-honk-over.gif",
			"link": "http://www.kgnu.org/cgi-bin/moreinfo.py?Notice=1330479321"
		},

		{
			"name": "news shirt",
			"id": "news-shirt",
			"imgSrc":"http://www.kgnu.org/splash/img/news-shirt.jpg",
			"imgOver": "http://www.kgnu.org/splash/img/news-shirt-over.jpg",
			"link": "http://www.kgnu.org/cgi-bin/moreinfo.py?Notice=1425418822"
		},

		{
			"name": "oggg shirt",
			"id": "oggg-shirt",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-oggg-shirt.jpg",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-oggg-shirt-over.gif",
			"link": "http://www.kgnu.org/cgi-bin/moreinfo.py?Notice=1363187333"
		}
	]
};


var misc = {
	"gift": [
		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		},

		{
			"name": "",
			"imgSrc":"",
			"imgOver": "",
			"link": ""
		}
	]
};


function buildGifts(gifts, id) {

	// console.log("you called buildGifts!");
	// console.log("length " + gifts.gift.length);
	
	for (var i = 0; i < gifts.gift.length; i++) {

		var gift = gifts.gift[i];
		
		// var img = '<img class="gift-img" src="' + gift.imgSrc + '" id="'+ gift.id +'" >';
		// var html = '<a href="' + gift.link + '">' + img + '</a>';
		
		var img = '<img class="gift-img img-responsive" src="' + gift.imgSrc + '" id="'+ gift.id +'" >';
		var html = '<a href="' + gift.link + '">' + img + '</a>';

		elem = document.createElement('div');
		$(elem).attr("class", "col-xs-6 col-sm-4 col-md-3 spec-banner");
		elem.innerHTML = html;

        elem.addEventListener("mouseover", (function(giftCopy) {
            return function() { 
            	swap(giftCopy);
            };
        })(gift));

        elem.addEventListener("mouseout", (function(giftCopy) {
            return function() {
            	swap(giftCopy);
            };
        })(gift));

        elem.addEventListener("touchstart", (function(giftCopy) {
            return function() { 
            	swap(giftCopy);
            };
        })(gift));

        elem.addEventListener("touchcancel", (function(giftCopy) {
            return function() {
            	swap(giftCopy);
            };
        })(gift))

        elem.addEventListener("touchend", (function(giftCopy) {
            return function() {
            	swap(giftCopy);
            };
        })(gift))

        $(id).append(elem);
	}
}

function swap(gift) {
	imgID = '#' + gift.id;
	if ( $(imgID).attr("src") === gift.imgSrc ) {
		$(imgID).attr("src", gift.imgOver);
	} else {
		$(imgID).attr("src", gift.imgSrc);
	}
}


$(document).ready(function () {
	buildGifts(tix, "#tix");
	buildGifts(cds, "#cds");
	buildGifts(other, "#other");
	console.log("Support Independent Community Radio with your donation now at www.kgnu.org!");
});