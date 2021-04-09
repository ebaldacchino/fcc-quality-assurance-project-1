const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();
suite('Unit Tests', function () {
	test('convertHandler should correctly read a whole number input.', () => {
		assert.equal(
			convertHandler.getNum('1'),
			1,
			'convertHandler should correctly read a whole number input.'
		);
	});

	test('convertHandler should correctly read a decimal number input.', () => {
		assert.equal(
			convertHandler.getNum('0.5'),
			0.5,
			'convertHandler should correctly read a decimal number input.'
		);
	});

	test('Should read fractions.', () => {
		assert.equal(convertHandler.getNum('1/2'), 0.5, 'Should read fractions.');
	});

	test('Should read fractions with decimals.', () => {
		assert.equal(
			convertHandler.getNum('1.5/3'),
			0.5,
			'Should read fractions with decimals.'
		);
	});

	// convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
	test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
		assert.equal(
			convertHandler.getNum('3/2/3'),
			null,
			'Should return errors on double fractions.'
		);
	});

	test('Should default to 1.', () => {
		assert.equal(convertHandler.getNum(''), 1, 'Should default to 1.');
	});
	
	test('Should read default inputs.', () => {
		assert.equal(
			convertHandler.getUnit('kM'),
			'km',
			'Should read default inputs.'
		);
	});
	// test('Should read default inputs.', () => {
	// 	assert.equal(
	// 		convertHandler.getUnit('l'),
	// 		'L',
	// 		'Should read default inputs.'
	// 	);
	// });

	// test('Should read default inputs.', () => {
	// 	assert.equal(
	// 		convertHandler.getUnit('kg'),
	// 		'kg',
	// 		'Should read default inputs.'
	// 	);
	// });

	// test('Should read default inputs.', () => {
	// 	assert.equal(
	// 		convertHandler.getUnit('lbs'),
	// 		'lbs',
	// 		'Should read default inputs.'
	// 	);
	// });

	// test('Should read default inputs.', () => {
	// 	assert.equal(
	// 		convertHandler.getUnit('gal'),
	// 		'gal',
	// 		'Should read default inputs.'
	// 	);
	// });
	// test('Should read default inputs.', () => {
	// 	assert.equal(
	// 		convertHandler.getUnit('mi'),
	// 		'mi',
	// 		'Should read default inputs.'
	// 	);
	// });

	// convertHandler should correctly return an error for an invalid input unit.

	test('convertHandler should correctly return an error for an invalid input unit.', () => {
		assert.equal(
			convertHandler.getUnit('min'),
			null,
			'Should read default inputs'
		);
	});

	test('convertHandler should return the correct unit for each valid input unit.', () => {
		assert.equal(
			convertHandler.getReturnUnit('mi'),
			'km',
			'Should read default inputs'
		);
	});

	// test('convertHandler should return the correct unit for each valid input unit.', () => {
	// 	assert.equal(
	// 		convertHandler.getReturnUnit('mi'),
	// 		'km',
	// 		'Should read default inputs'
	// 	);
	// });

	// test('convertHandler should return the correct unit for each valid input unit.', () => {
	// 	assert.equal(
	// 		convertHandler.getReturnUnit('km'),
	// 		'mi',
	// 		'Should read default inputs'
	// 	);
	// });

	// test('convertHandler should return the correct unit for each valid input unit.', () => {
	// 	assert.equal(
	// 		convertHandler.getReturnUnit('gal'),
	// 		'L',
	// 		'Should read default inputs'
	// 	);
	// });

	// test('convertHandler should return the correct unit for each valid input unit.', () => {
	// 	assert.equal(
	// 		convertHandler.getReturnUnit('L'),
	// 		'gal',
	// 		'Should read default inputs'
	// 	);
	// });

	// test('', () => {
	// 	assert.equal(
	// 		convertHandler.getReturnUnit('kg'),
	// 		'lbs',
	// 		'Should read default inputs'
	// 	);
	// });

	// test('convertHandler should return the correct return unit for each valid input unit.', () => {
	// 	assert.equal(
	// 		convertHandler.getReturnUnit('lbs'),
	// 		'kg',
	// 		'Should read default inputs'
	// 	);
	// });

	// convertHandler should correctly return the spelled-out string unit for each valid input unit.

	test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', () => {
		assert.equal(
			convertHandler.getString('19', 'km', 11.80608, 'mi'),
			'19 kilometers converts to 11.80608 miles',
			'String should match inputs'
		);
	});

	test('convertHandler should correctly convert gal to L.', () => {
		assert.equal(
			convertHandler.convert('1', 'gal'),
			3.78541,
			'gal should convert to litres correctly'
		);
	});

	test('convertHandler should correctly convert L to gal.', () => {
		assert.equal(
			convertHandler.convert('1', 'L'),
			0.26417,
			'litres should convert to gallons correctly'
		);
	});

	test('convertHandler should correctly convert km to mi.', () => {
		assert.equal(
			convertHandler.convert('1', 'km'),
			0.62137,
			'km should convert to miles correctly'
		);
	});

	test('convertHandler should correctly convert mi to km.', () => {
		assert.equal(
			convertHandler.convert('1', 'mi'),
			1.60934,
			'mi should convert to km correctly'
		);
	});

	test('convertHandler should correctly convert lbs to kg.', () => {
		assert.equal(
			convertHandler.convert('1', 'lbs'),
			0.45359,
			'kg should convert to kg correctly'
		);
	});

	test('convertHandler should correctly convert kg to lbs.', () => {
		assert.equal(
			convertHandler.convert('1', 'kg'),
			2.20462,
			'kg should convert to lbs correctly'
		);
	}); 
});
