const parseOptions = require('./parse');
const checkOptions = require('./check');
const runStream =require('./stream');

async function runCli () {
  const opts = parseOptions();
  const optsChecked = await checkOptions(opts);
  runStream(optsChecked);
}

runCli();

