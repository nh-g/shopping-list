// call this file "scripts" not javaScripts

export function sortByString(array, key) {
  const sortedList = [...array].sort((a, b) => {
    const stringA = a[key].toUpperCase();
    const stringB = b[key].toUpperCase();

    return stringA > stringB ? 1 : -1;
  });
  return sortedList;
}

export function sortByNumber(array, key) {
  return [...array].sort((a, b) => b[key] - a[key]);
}
