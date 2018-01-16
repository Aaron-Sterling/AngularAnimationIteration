// helper function for homepage

export function isPositiveInteger(numberToTest: number): boolean {
    return numberToTest && numberToTest > 0 && Number.isInteger(numberToTest);
}