import { accessible, isAccessible, X_OK } from '@bevry/fs-accessible'

/** Returns a Promise that rejects with an error if the path is not executable. */
export function executable(path: string): Promise<void> {
	return accessible(path, X_OK)
}

/** Returns a Promise that resolves to a boolean indicating if the path is executable or not. */
export function isExecutable(path: string): Promise<boolean> {
	return isAccessible(path, X_OK)
}
