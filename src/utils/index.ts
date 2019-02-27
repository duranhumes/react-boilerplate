/**
 * Returns the value from a promise and an error if it exists.
 * 
 * @param {promise} promise
 *
 * @returns {array} [value, error]
 */
interface CustomError extends Error {
    code: string | number
}
export async function promiseWrapper<E = CustomError>(
    promise: Promise<any>
): Promise<[any | undefined, undefined | E]> {
    try {
        return [await promise, undefined]
    } catch (e) {
        return [undefined, e]
    }
}
