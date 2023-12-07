export const cutFirstNChars = (string: string, n: number): string => {
    if (string.length > n) {
        return string.substring(0, 30) + '...'
    }
    return string
}
