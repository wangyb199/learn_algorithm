// 原地排序算法

/**
 *
 * @param data 待排序数组
 */
function sort(data) {
    let length = data.length;
    for(let i=1;i<length;i++){
        for(let j=0;j<i;j++){
            if(data[j]>data[i]){
                [data[j],data[i]] = [data[i],data[j]];
            }
        }
    }
    return data;
}

console.log(sort(require("./random.data").genData(100)));