import debug from 'debug'
const { USER_NAME = 'Meow' } = process.env

export default (serviceName: string) => {
	const string = (icon: string) => debug(`${USER_NAME}.${serviceName} ${icon} `)
	return {
		log: string('  '),
		info: string('🐟'),
		warn: string('🦁'),
		err: string('🦀'),
	}
}
