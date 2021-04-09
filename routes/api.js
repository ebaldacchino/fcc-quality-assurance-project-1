'use strict';
const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
	let convertHandler = new ConvertHandler();

	app.route('/api/convert').get((req, res) => {
		const { input } = req.query;

		if (!input) {
			return res.status(200).send('invalid unit');
		}

		const initNum = convertHandler.getNum(input);
		const initUnit = convertHandler.getUnit(input);

		const inValidNum = !initNum || input.match(/.*\s+.+$/);

		const inValidUnit = !initUnit || input.match(/.*\s+\S+\s+$/);

		if (inValidNum && inValidUnit) {
			return res.status(200).send('invalid number and unit');
		} else if (inValidNum) {
			return res.status(200).send('invalid number');
		} else if (inValidUnit) {
			return res.status(200).send('invalid unit');
		}

		const returnUnit = convertHandler.getReturnUnit(initUnit);

		const returnNum = convertHandler.convert(initNum, initUnit);

		const string = convertHandler.getString(
			initNum,
			initUnit,
			returnNum,
			returnUnit
		);
		console.log(input);
		console.log(string);

		return res.status(200).json({
			initNum,
			initUnit,
			returnNum,
			returnUnit,
			string,
		});
	});
};
