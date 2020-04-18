const debug = require('debug')
const { USER_NAME = 'Meow' } = process.env

const lib = serviceName => {
	const string = icon => debug(`${USER_NAME}.${serviceName} ${icon} `)
	return {
		log: string('  '),
		info: string('🐟'),
		warn: string('🦁'),
		err: string('🦀'),
	}
}

module.exports = lib
