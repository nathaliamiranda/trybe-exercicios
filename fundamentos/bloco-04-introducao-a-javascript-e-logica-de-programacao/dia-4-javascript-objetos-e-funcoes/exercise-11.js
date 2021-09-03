function minIndexinNumbers (numbers){
    let minIndex = 0;
for (index in numbers) {
    if (numbers[minIndex] > numbers[index]) {
        minIndex = index;
      }
    }
    return minIndex;
  }
  
  console.log(minIndexinNumbers([2, 3, 6, 7, 10, 1])); 