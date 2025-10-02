export function simpleSearch<T>(search: T[], item: T): number {
    for (let i: number = 0; i < search.length; i++) {
        if (search[i] == item) {
            return i
        }
    }
    return -1
}