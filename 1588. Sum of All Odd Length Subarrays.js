var sumOddLengthSubarrays = function(arr) {
    const subArrays = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }
    var ar = []
    for(const c of subArrays){
        if(c.length % 2 == 0){
            
        } else {
            ar.push(c)
        }
    }
    var az=[]
    for(let i=0;i<ar.length;i++){
        const sum = ar[i].reduce((partialSum, a) => partialSum + a, 0)
        
        az.push(sum)
    }
    return az.reduce((partialSum, a) => partialSum + a, 0)
    
}