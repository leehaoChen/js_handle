// 快速排序
function quicksort(arr){
  sort(arr, 0, arr.length-1);
  function sort(arr, start, end){
  console.log("开始一轮：",start,end);
    if (start >= end) {
      return; 
    }
    var i = start;
    var j = end;
    while (i < j) {
      while (arr[j] >= arr[start] && i<j) {j--;}
      while (arr[i] <= arr[start] && i<j) {i++;}
      console.log(i,j);
      if (i!==j) {
        arr[j] = arr[j] + arr[i];
        arr[i] = arr[j] - arr[i];
        arr[j] = arr[j] - arr[i];
      }
      console.log(arr)
    }
    if (start !==j) {
      arr[j] = arr[j] + arr[start];
      arr[start] = arr[j] - arr[start];
      arr[j] = arr[j] - arr[start];
    }
    console.log(arr)
    sort(arr, start, j-1);
    sort(arr, j+1, end);
  }
}