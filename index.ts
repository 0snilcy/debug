import debug from 'debug'

const wrap = (icon: string) => debug(`${icon} --> `)

export default {
	log: wrap(''),
	info: wrap('🌀'),
	warn: wrap('🔅'),
	err: wrap('❌'),
}
