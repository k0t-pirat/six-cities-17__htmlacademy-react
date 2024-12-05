const STARS_MULTIPLIER = 20;

export const getRatingInPercents = (rating: number) => `${Math.round(rating) * STARS_MULTIPLIER}%`;
export const upFirstLetter = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;
