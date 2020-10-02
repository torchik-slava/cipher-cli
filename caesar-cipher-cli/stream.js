const fs = require('fs');
const { Transform } = require('stream');

function runStream(options) {
	const { shift, input, output, action } = options;
	
	const readStream = input ? fs.createReadStream(input, 'utf8') : process.stdin;
	const writeStream = output ? fs.createWriteStream(output, { flags: 'a+', encoding: 'utf8' }) : process.stdout;
	const transformStream = new Transform({
		transform (chunk, encoding, callback) {
			this.push(action(chunk.toString(), shift));
			callback();
		}
	});
	
	readStream
		.pipe(transformStream)
		.on('error', err => console.error(err.message)) 
		.pipe(writeStream)
		.on('error', err => console.error(err.message));  
} 

module.exports = runStream;