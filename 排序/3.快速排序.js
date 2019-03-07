function fakeQuickSort(iArr) {
    var n = iArr.length;
    // 若只有一个，则返回
    if (n <= 1) { return iArr; }
    // 若有多个，则选择基准进行分组，递归处理
    else {
        var p = parseInt(n - 1);
        var pivot = iArr[p];
        var leftArr = [], rightArr = [], arrVal;
        for (var i = 0; i < n - 1; i++) {
            arrVal = iArr[i];
            if (arrVal <= pivot) {
                // 小于基准放置左侧
                leftArr.push(arrVal);
            } else {
                // 大于基准放置右侧
                rightArr.push(arrVal);
            }
        }
        // 递归计算左边、右边子集，将数组合并返回
        return fakeQuickSort(leftArr).concat([pivot].concat(fakeQuickSort(rightArr)));
    }
}
// 获取基准值
// 将低于基准值的排列在左侧，剩下的排列在右侧
// 分别对左侧和右侧进行递归排序
console.log(fakeQuickSort([5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4]))// [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 12, 34, 134 ]