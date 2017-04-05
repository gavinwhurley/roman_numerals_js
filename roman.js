// roman numeral parser by gavin

function makeRoman(decimal) {
	var solution = '';
	if (isNaN(decimal)) {
		solution = 'not a number';
	}
	else if (decimal > 4999 || decimal < 1) {
		solution = 'number out of range'
	}
	else {
		var expandedNotation = breakIntoParts(decimal);
		solution = convertToRoman(expandedNotation);
	}
	return solution;
}

function getPlace(decimal, place) {
	if (decimal >= place) {
		 return Math.floor(decimal/place);
	}
	else {
		return 0;
	}
}

function breakIntoParts(decimal) {
	// break it out into expanded notation
	var places = [1000,900,500,400,100,90,50,40,10,9,5,4];
	var results = [];
	var counter = decimal * 1;
	for (p in places) {
		results.push(getPlace(counter, places[p]));
		counter -= (results[results.length - 1] * places[p]);
	}
	// the only thing left that should be left are ones
	results.push(counter);
	return results;
}

function convertToRoman(results) {
	// map the results to roman numerals; the indexes line up with places
	var returnThis = '';
	var roman = ['M','CM','D','CD','C','XC','L','LX','X','IX','V','IV','I'];
	var newChar;
	for (r in roman) {
	// repeat the character for the number of times in results
		newChar = '';
		for (var i=0;i < results[r]; i++) {
			newChar += roman[r];
		}
		returnThis += newChar;
	}
	return returnThis;
}
