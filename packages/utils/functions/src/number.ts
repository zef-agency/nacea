const sum = (a: number, b: number) => {
  return a + b;
};

const getRandom = (num: number) => {
  return Math.floor(Math.random() * num);
};

export { getRandom, sum };
