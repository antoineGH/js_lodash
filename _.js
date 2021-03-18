const { repeat, findIndex } = require('lodash')

const _ = {
	clamp(number, lower, upper) {
		var lowerClampedValue = Math.max(number, lower)
		var clampedValue = Math.min(lowerClampedValue, upper)
		return clampedValue
	},

	inRange(number, start, end) {
		if (end === undefined) {
			end = start
			start = 0
		}

		if (start > end) {
			const temp = start
			start = end
			end = temp
		}

		return start <= number && number < end
	},

	words(string) {
		return string.split(' ')
	},

	pad(string, length) {
		if (length <= string.length) {
			return string
		}
		const startPaddingLength = Math.floor((length - string.length) / 2)
		const endPaddingLength = Math.floor(length - string.length - startPaddingLength)
		const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
		return paddedString
	},

	has(object, key) {
		const keys = Object.keys(object)
		if (keys.includes(key)) {
			return true
		}
		return false
	},

	invert(object) {
		const invertedObj = {}
		for ([key, value] of Object.entries(object)) {
			invertedObj[value] = key
		}
		return invertedObj
	},

	findKey(object, predicateFunction) {
		for ([key, value] of Object.entries(object)) {
			if (predicateFunction(value)) {
				return key
			}
		}
		return undefined
	},

	drop(myArr, numDrop) {
		if (numDrop === undefined) {
			myArr.shift()
			return myArr
		}
		for (let i = 0; i < numDrop; i++) {
			myArr.shift()
		}
		return myArr
	},

	dropWhile(array, predicate) {
		const callback = (element, index) => {
			return !predicate(element, index, array)
		}
		const dropNumber = array.findIndex(callback)
		let dropArry = this.drop(array, dropNumber)
		return dropArry
	},

	chunk(array, size = 1) {
		arrayChunks = []
		for (let i = 0; i < array.length; i += size) {
			let arrayChunk = array.slice(i, i + size)
			arrayChunks.push(arrayChunk)
		}
		return arrayChunks
	},
}

module.exports = _
