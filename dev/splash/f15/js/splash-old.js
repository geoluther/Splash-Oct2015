// splash.js
// js to generate gift icons in splash page


var tix = [

		{
			"name": "Avett Brothers July 10",
			"id": "avett-brothers-july10",
			"imgSrc": "./splash/f15/img/avett-bros-july10.jpg",
			"imgOver": "./splash/f15/img/avett-bros-july10-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Avett%20Bros%20Tickets%20July10"
		},

		{
			"name": "Avett Brothers July 11",
			"id": "avett-brothers-july11",
			"imgSrc": "./splash/f15/img/avett-bros-july11.jpg",
			"imgOver": "./splash/f15/img/avett-bros-july11-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Avett%20Bros%20Tickets%20July11"
		},

		{
			"name": "Avett Brothers July 12",
			"id": "avett-brothers-july12",
			"imgSrc": "./splash/f15/img/avett-bros-july12.jpg",
			"imgOver": "./splash/f15/img/avett-bros-july12-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Avett%20Bros%20Tickets%20July12"
		},

		{
			"name": "Riot Fest Weekend",
			"id": "riot-fest-wknd",
			"imgSrc": "./splash/f15/img/riot-fest-wknd.jpg",
			"imgOver": "./splash/f15/img/riot-fest-wknd-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=300&premium_type=premium_other&premium=iot%20Fest%20Weekend"
		},

		{
			"name": "Phish Sept 4",
			"id": "phish-sept4",
			"imgSrc": "./splash/f15/img/phish-sept4.jpg",
			"imgOver": "./splash/f15/img/phish-sept4-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Phish%20Tix%20Sept4"
		},

		{
			"name": "Phish Sept 5",
			"id": "phish-sept5",
			"imgSrc": "./splash/f15/img/phish-sept5.jpg",
			"imgOver": "./splash/f15/img/phish-sept5-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Phish%20Tix%20Sept5"
		},

		{
			"name": "Phish Sept 6",
			"id": "phish-sept6",
			"imgSrc": "./splash/f15/img/phish-sept6.jpg",
			"imgOver": "./splash/f15/img/phish-sept6-over.jpg",
			"link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Phish%20Tix%20Sept6"
		}

		// ,{
		// 	"name": "Jimmy Cliff",
		// 	"id": "jimmy-cliff-july28",
		// 	"imgSrc": "./splash/f15/img/jimmy-cliff-july28.jpg",
		// 	"imgOver": "./splash/f15/img/jimmy-cliff-july28-over.jpg",
		// 	"link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Jimmy%20Cliff%20Tix%20July28"
		// }
	];

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


var other = [

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
			"imgSrc":"./splash/f15/img/news-shirt.jpg",
			"imgOver": "./splash/f15/img/news-shirt-over.jpg",
			"link": "http://www.kgnu.org/cgi-bin/moreinfo.py?Notice=1425418822"
		},

		{
			"name": "oggg shirt",
			"id": "oggg-shirt",
			"imgSrc":"http://www.kgnu.org/images/img-f14/gift-oggg-shirt.jpg",
			"imgOver": "http://www.kgnu.org/images/img-f14/gift-oggg-shirt-over.gif",
			"link": "http://www.kgnu.org/cgi-bin/moreinfo.py?Notice=1363187333"
		}
	];


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

	for (var i = 0; i < gifts.length; i++) {

		var gift = gifts[i];

		var img = '<img class="gift-img" src="' + gift.imgSrc + '" id="'+ gift.id +'" >';
		var html = '<a href="' + gift.link + '">' + img + '</a>';

		elem = document.createElement('li');
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
