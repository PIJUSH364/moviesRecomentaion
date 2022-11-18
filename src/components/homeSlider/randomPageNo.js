function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const pageNo = randomIntFromInterval(1, 100);
export default pageNo
