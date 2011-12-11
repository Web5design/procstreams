var assert = require('assert')
	, exec = require('child_process').exec
	, $p = require(__dirname + '/..')

var version = process.version
exec('node --version', function(err, output){
	if(err) { throw err }

	assert.equal(version, output.trim())

	var opts = { out: false }
	$p('node --version', opts)
		.stdout.on('data', function(output) {
			assert.equal(version, output.toString().trim())
		})

	$p('node',  '--version', opts)
		.stdout.on('data', function(output) {
			assert.equal(version, output.toString().trim())
		})

	$p('node',  ['--version'], opts)
		.stdout.on('data', function(output) {
			assert.equal(version, output.toString().trim())
		})
})
