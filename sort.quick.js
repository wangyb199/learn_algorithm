
/**
 * 快速排序
 * @param data
 */
function sort(data) {
    quickSort(data,0,data.length-1);
    return data;
}

function quickSort(data, p, r) {
    if(p<r){
        let q = partition(data,p,r);
        quickSort(data,p,q-1);
        quickSort(data,q+1,r);
    }
}

/**
 * 将数组分割成以st为左右的数组
 */
function partition(A, p, r) {
    let x = A[r];
    let i = p-1;

    for(let j=p;j<r-1;j++){
        if(A[j]<=x){
            i++;
            [A[i],A[j]] = [A[j],A[i]]
        }
    }
    [A[i+1],A[r]] = [A[r],A[i+1]];
    return i+1;
}

console.log(sort(require("./random.data").genData(1000)));
