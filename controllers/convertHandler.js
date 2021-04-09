function ConvertHandler() {
	this.getNum = (input) => {
		const value = eval(input.replace(/[a-z]/gi, '')); 
		return isNaN(value) ? null : value ? value : 1;
	};

	this.getUnit = (input) => {
		const unit = input.match(/[A-Za-z]+$/)[0].toLowerCase();
		return unit === 'gal'
			? 'gal'
			: unit === 'l'
			? 'L'
			: unit === 'lbs'
			? 'lbs'
			: unit === 'kg'
			? 'kg'
			: unit === 'mi'
			? 'mi'
			: unit === 'km'
			? 'km'
			: null;
	};

	this.getReturnUnit = (initUnit) =>
		initUnit === 'gal'
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

		return initUnit === 'gal'
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
	};

	this.getString = function (initNum, initUnit, returnNum, returnUnit) {
		let result = `${initNum} ${this.spellOutUnit(
			initUnit
		)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

		return result;
	};
}

module.exports = ConvertHandler;
