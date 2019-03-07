function mergeSort(iArr) {
    var n = iArr.length;
    // 若小于两位数，则按顺序排列后返回
    if (n === 2 && iArr[0] > iArr[1]) { return [iArr[1], iArr[0]]; }
    else if (n <= 2) { return iArr; }
    // 若大于两位数，则分成两组，递归处理
    else {
        var p = parseInt(n / 2);
        var iArr1 = mergeSort(iArr.slice(0, p));
        var iArr2 = mergeSort(iArr.slice(p));
        var oArr = [];
        for (var i = 0; i < n; i++) {
            if (iArr1.length && iArr2.length) {
                // 比较最前两个数，取出较小的
                oArr.push(iArr1[0] <= iArr2[0] ? iArr1.splice(0, 1)[0] : iArr2.splice(0, 1)[0]);
            } else {
                // 若其中一组为空，则将另一组剩下的添加到输出尾部
                oArr = oArr.concat(iArr1.length === 0 ? iArr2 : iArr1);
                break;
            }
        }
        return oArr;
    }
}
console.log(mergeSort([5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4,-120,-33,-2,0]));