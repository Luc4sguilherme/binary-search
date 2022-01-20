function binarySearch(array, start, end, element) {
  if (end >= start) {
    const mid = parseInt(start + (end - start) / 2);

    if (array[mid] === element) return mid;

    if (array[mid] > element) {
      return binarySearch(array, start, mid - 1, element);
    } else {
      return binarySearch(array, mid + 1, end, element);
    }
  }

  return -1;
}
