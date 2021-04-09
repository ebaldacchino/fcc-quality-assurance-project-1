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

		if (inValidNum && !initUnit) {
			return res.status(200).send('invalid number and unit');
		} else if (inValidNum) {
			return res.status(200).send('invalid number');
		} else if (!initUnit) {
			return res.status(200).send('invalid unit');
		}

		const returnUnit = convertHandler.getReturnUnit(initUnit);

		const returnNum =
			Math.round(
				(convertHandler.convert(initNum, initUnit) + Number.EPSILON) * 100000
			) / 100000;

		const string = convertHandler.getString(
			initNum,
			initUnit,
			returnNum,
			returnUnit
		);

		return res.status(200).json({
			initNum,
			initUnit,
			returnNum,
			returnUnit,
			string,
		});
	});
};
