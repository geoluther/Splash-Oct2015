

var tix = [

	{
		"name": "Israel Vibration",
		"id": "israelvibe-oct20",
		"imgSrc":,
		"imgOver":,
		"amt": "$60",
		"venue": "Fox Theater",
		"date": "Oct 15",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "Israel Vibration",
		"id": "israelvibe-oct22",
		"imgSrc":,
		"imgOver":,
		"amt": "$60",
		"venue": "Ogden",
		"date": "Oct 22",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "Youssou N'Dour",
		"id": "Youssou",
		"imgSrc":,
		"imgOver":,
		"amt": "$88.5",
		"venue": "Boulder Theater",
		"date": "Nov 11",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "Travelin' McCourys",
		"id": "McCourys",
		"imgSrc":,
		"imgOver":,
		"amt": "$60",
		"venue": "Fox Theater",
		"date": "Nov 5",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "Greensky Bluegrass",
		"id": "Greensky-Nov19",
		"imgSrc":,
		"imgOver":,
		"amt": "$88.5",
		"venue": "Ogden Theater",
		"date": "Nov 19",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "Greensky Bluegrass",
		"id": "Greensky-Nov20",
		"imgSrc":,
		"imgOver":,
		"amt": "$88.5",
		"venue": "Ogden Theater",
		"date": "Nov 20",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "Greensky Bluegrass",
		"id": "Greensky-Nov21",
		"imgSrc":,
		"imgOver":,
		"amt": "$88.5",
		"venue": "Ogden Theater",
		"date": "Nov 21",
		"link": "http://placehold.it/350x150"
	},


	{
		"name": "Bad Plus with Joshua Redman",
		"id": "josh-redman",
		"imgSrc":,
		"imgOver":,
		"amt": "$88.5",
		"venue": "Boulder Theater",
		"date": "Dec 12",
		"link": "http://placehold.it/350x150"
	},


	{
		"name": "Rebirth Brass Band",
		"id": "Rebirth",
		"imgSrc":,
		"imgOver":,
		"amt": "$88.5",
		"venue": "Gothic Theater",
		"date": "Dec 12",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "String Cheese Incident",
		"id": "sci-dec31",
		"imgSrc":,
		"imgOver":,
		"amt": "$139",
		"venue": "1st Bank Center",
		"date": "Dec 31",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "String Cheese Incident",
		"id": "sci-jan1",
		"imgSrc":,
		"imgOver":,
		"amt": "$139",
		"venue": "1st Bank Center",
		"date": "Jan 31",
		"link": "http://placehold.it/350x150"
	},

	{
		"name": "String Cheese Incident",
		"id": "sci-jan2",
		"imgSrc":,
		"imgOver":,
		"amt": "$139",
		"venue": "1st Bank Center",
		"date": "Jan 2",
		"link": "http://placehold.it/350x150"
	}
];

var shirts = [

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


// "name": "Avett Brothers July 11",
// "id": "avett-brothers-july11",
// "imgSrc": "./splash/f15/img/avett-bros-july11.jpg",
// "imgOver": "./splash/f15/img/avett-bros-july11-over.jpg",
// "link": "https://kgnu.org/ht/quickjoin.html?level=150&premium_type=premium_other&premium=Avett%20Bros%20Tickets%20July11"

// Israel Vibration with Roots Radics 10/20 Fox - $60
// Israel Vibration 10/22 Ogden - $60
// Youssou N'Dour 11/4 Boulder Thtr - $88.50
// Travelin' McCourys 11/5 Fox - $60
// Greensky Bluegrass 11/19 Ogden - $88.50
// Greensky Bluegrass 11/20 Ogden - $88.50
// Greensky Bluegrass 11/21 Ogden - $88.50
// Bad Plus with Joshua Redman 12/2 Boulder Thtr - $88.50
// Rebirth Brass Band Gothic 12/12 - $88.50
// String Cheese Incident 12/31 1st Bank Center - $139
// String Cheese Incident 1/1 1st Bank Center - $139
// String Cheese Incident 1/2 1st Bank Center - $139


// images to do:
// israel vibe
// mcourys
// youssou
// rebirh
// Bad Plus
// should already have: SCI, Greensky