function randomNumGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const rndInt = randomNumGenerator(1, 16);
export default rndInt;
