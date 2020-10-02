const fs = require('fs');
const { encodeFn, decodeFn } = require('./encrypt');

async function checkOptions(options) {
	let { shift, input, output, action } = options;

	shift = parseInt(shift, 10);

	if (shift < 0) {
		process.stderr.write('error: option -s, --shift <number> should be positive');
		process.exit(9);
	}

	if(action === 'encode') {
		action = encodeFn;
	} else if (action === 'decode') {
		action = decodeFn;
	} else {
		process.stderr.write('error: option -a, --action <type> invalid value');
		process.exit(1);
	}

	if (input) {
    try {
      await fs.access(input, fs.constants.R_OK);
    } catch (error) {
      process.stderr.write('error: input file doesn\'t exist or is not readable');
			process.exit(1);
    }
	}

	if (output) {
		try {
			await fs.access(output, fs.constants.W_OK);
		} catch (error) {
			process.stderr.write('error: output file doesn\'t exist or is not writable');
			process.exit(1);
		}
	}

	return { shift, input, output, action };
}

module.exports = checkOptions
