export function getRandomElement(Arr) {
const randomIndex = Math.floor(Math.random() * Arr.length);
return Arr[randomIndex];
}