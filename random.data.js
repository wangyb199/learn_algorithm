exports.genData = function (length) {
    let data = [];
    for(let i=0;i<length;i++){
        data.push(Math.floor(Math.random()*10000));
    }
    return data;
};