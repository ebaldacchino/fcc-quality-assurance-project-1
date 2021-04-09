const e = require('cors');

function ConvertHandler() {
	this.getNum = (input) => {
		const value = input.replace(/[a-z]/gi, '');

		const nonNumericCharacters = value.replace(/[0-9.]/gi, '');

		console.log('non numeric characters', nonNumericCharacters);

		if (!nonNumericCharacters) return value || 1;
		if (nonNumericCharacters === '/') return eval(value);
		return null
	};

	this.getUnit = (input) => {
		let unit = input.match(/[A-Za-z]+$/);
		if (!unit) return null;
		unit = unit[0].toLowerCase();
		if (!['l', 'gal', 'km', 'mi', 'lbs', 'kg'].find((u) => unit === u))
			return null;
		return unit === 'l' ? 'L' : unit;
	};

	this.getReturnUnit = (initUnit) => {
		return initUnit === 'gal'
			? 'L'
			: initUnit === 'L'
			? 'gal'
			: initUnit === 'lbs'
			? 'kg'
			: initUnit === 'kg'
			? 'lbs'
			: initUnit === 'mi'
			? 'km'
			: initUnit === 'km'
			? 'mi'
			: null;
	};

	this.spellOutUnit = (unit) =>
		unit === 'gal'
			? 'gallons'
			: unit === 'L'
			? 'litres'
			: unit === 'lbs'
			? 'pounds'
			: unit === 'kg'
			? 'kilograms'
			: unit === 'mi'
			? 'miles'
			: 'kilometers';

	this.convert = (initNum, initUnit) => {
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;

		let value =
			initUnit === 'gal'
				? initNum * galToL
				: initUnit === 'L'
				? initNum / galToL
				: initUnit === 'lbs'
				? initNum * lbsToKg
				: initUnit === 'kg'
				? initNum / lbsToKg
				: initUnit === 'mi'
				? initNum * miToKm
				: initUnit === 'km'
				? initNum / miToKm
				: null;

		return value
			? Math.round((value + Number.EPSILON) * 100000) / 100000
			: null;
	};

	this.getString = function (initNum, initUnit, returnNum, returnUnit) {
		let result = `${initNum} ${this.spellOutUnit(
			initUnit
		)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

		return result;
	};
}

module.exports = ConvertHandler;
