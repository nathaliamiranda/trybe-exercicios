function maxIndexinNumbers (numbers){
    let maxIndex = 0;
for (index in numbers) {
    if (numbers[maxIndex] < numbers [index]) {
        maxIndex = index;
      }
    }
    return maxIndex;
  }
  
  console.log(maxIndexinNumbers([2, 3, 6, 7, 10, 1])); 