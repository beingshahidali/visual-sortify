import { swap } from './helpers';

const selectionSort = (array, position, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      array = swap(array, i, minIndex);
    }

    arraySteps.push(array.slice());
    colorKey[i] = 1;
    colorKey[minIndex] = 1;
    colorSteps.push(colorKey.slice());
    colorKey[i] = 0;
    colorKey[minIndex] = 0;
  }

  colorKey[n - 1] = 2; // Mark the last element as sorted
  arraySteps.push(array.slice());
  colorSteps.push(colorKey.slice());

  return;
};

export default selectionSort;
