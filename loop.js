function binarySearch(array, start, end, element) {
  let left = start;
  let right = end;
  let mid;

  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);

    if (array[mid] == element) return mid;

    if (array[mid] > element) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
