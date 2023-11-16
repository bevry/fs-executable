import { equal } from 'assert-helpers'
import kava from 'kava'

import { executable, isExecutable } from './index.js'

const file = 'README.md'
const dir = '.'

kava.suite('@bevry/fs-executable', function (suite, test) {
	test('boolean works as expected', function (done) {
		;(async function () {
			equal(await isExecutable(file), false, 'file is not executable')
			equal(await isExecutable(dir), true, 'dir is executable')
			equal(
				await isExecutable([file, dir]),
				false,
				'file and dir are not both executable'
			)
			equal(await isExecutable('missing'), false, 'missing is not executable')
		})()
			.then(() => done())
			.catch((err: any) => done(err))
	})
	test('throw works as expected (part 1)', function (done) {
		;(async function () {
			await executable(dir)
		})()
			.then(() => done())
			.catch((err: any) => done(err))
	})
	test('throw works as expected (part 2)', function (done) {
		;(async function () {
			await executable('missing')
		})()
			.then(() => done(new Error('failed to fail')))
			.catch(() => done())
	})
	test('throw works as expected (part 3)', function (done) {
		;(async function () {
			await executable([file, dir])
		})()
			.then(() => done(new Error('failed to fail')))
			.catch(() => done())
	})
})
