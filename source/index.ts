// external
import accessible, { isAccessible, X_OK } from '@bevry/fs-accessible'

/** Returns a Promise that rejects with an error if the path is not executable. */
export function executable(path: string | Array<string>): Promise<void> {
	return accessible(path, X_OK)
}
export default executable

/** Returns a Promise that resolves to a boolean indicating if the path is executable or not. */
export function isExecutable(path: string): Promise<boolean>
export function isExecutable(path: Array<string>): Promise<Array<boolean>>
export function isExecutable(
	path: string | Array<string>
): Promise<boolean | Array<boolean>> {
	if (Array.isArray(path)) {
		return Promise.all(path.map((i) => isExecutable(i)))
	}
	return isAccessible(path, X_OK)
}
