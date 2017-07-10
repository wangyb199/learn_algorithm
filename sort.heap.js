
/**
 * 堆排序
 * @param data
 */
function sort(data) {
    buildMaxHeap(data);

    let length = data.length;
    let result = [];

    for(let i=length-1;i>0;i--){
        [data[i],data[0]] = [data[0],data[i]];
        result.push(data.pop());
        maxHeapify(data,0)
    }

    result.push(data.pop());

    return result;
}

function maxHeapify(data, index) {
    let left = (index<<1)+1,
        right = (index<<1)+2,
        length = data.length,
        max = index;

    if(left<length && data[left]>data[max]){
        max = left;
    }

    if(right<length && data[right]>data[max]){
        max = right;
    }

    if(max!==index){
        [data[max],data[index]] = [data[index],data[max]];
        maxHeapify(data,max);
    }
}

function buildMaxHeap(data) {
    let length = data.length,
        nodeStart = (length>>1)-1;

    for(let i=nodeStart;i>=0;i--){
        maxHeapify(data,i);
    }

    return data;
}

console.log(sort(require("./random.data").genData(50)));
