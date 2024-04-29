// 配列のランダム並び替え
export default function randomShuffle(array: string[]) {
  for (const [index, num] of array.entries()) {
    const tempIndex = Math.floor(Math.random() * array.length); 
    const tempNum = array[index];
    array[index] = array[tempIndex]; 
    array[tempIndex] = tempNum;
  }

  return array;
};

