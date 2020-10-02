const { program } = require('commander');

function parseOptions() {
	program
		.storeOptionsAsProperties(false)
		.passCommandToAction(false)
		.requiredOption('-s, --shift <number>', 'a shift')
		.option('-i, --input [file path]', 'an input file')
		.option('-o, --output [file path]', 'an output file')
		.requiredOption('-a, --action <type>', 'an action encode/decode')
		.parse(process.argv);
	
	return program.opts();
}

module.exports = parseOptions;