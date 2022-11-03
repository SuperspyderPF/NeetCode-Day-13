function max_sub_array_of_size_k(k, arr) {
    const subArrays = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }
    var ar = []
    for(let i=0;i<subArrays.length;i++){
        if(subArrays[i].length===k){
            ar.push(subArrays[i])
        }
    }
    var az = []
    for(let i=0;i<ar.length;i++){
        const sum = ar[i].reduce((partialSum, a) => partialSum + a, 0)
        
        az.push(sum)
    }
    return Math.max(...az)
    
    
    
}