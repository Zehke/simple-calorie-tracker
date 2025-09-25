export interface Meal {
    id: number,
    title: string,
    date: string, //localeString
}

export function getPregeneratedString(): string {
    let mealStrings: string[] = [
        "potatos",
        "cucumber",
        "pork",
        "cheese",
        "milk"
    ];
    return mealStrings[Math.floor(Math.random() * mealStrings.length)];
}