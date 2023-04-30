export function extractObjects(array) {
  return array.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}
