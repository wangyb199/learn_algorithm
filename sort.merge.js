
/**
 * 合并排序
 * 分治法排序
 * 递归以及递归的退出条件
 * @param data
 */
function sort(data) {
    let sorted_left = [];
    let sorted_right = [];

    if(data.length<=1){
        return data;
    }

    for(let i=1;i<data.length;i++){
        if(data[i]<data[0]){
            sorted_left.push(data[i])
        }else{
            sorted_right.push(data[i])
        }
    }

    return sort(sorted_left).concat([data[0]]).concat(sort(sorted_right));
}

console.log(sort(require("./random.data").genData(1000)));
