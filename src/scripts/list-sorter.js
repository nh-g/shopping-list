export function sortByString(array, key) {
  const sortedList = [...array].sort((a, b) => {
    const stringA = a[key];
    const stringB = b[key];

    return stringA > stringB ? 1 : -1;
  });
  return sortedList;
}

export function sortByNumberDescending(array, key) {
  return [...array].sort((a, b) => b[key] - a[key]);
}
export function sortByNumberAscending(array, key) {
  return [...array].sort((a, b) => a[key] - b[key]);
}


