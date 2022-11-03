var countMatches = function(s, e, x) {
    return s.filter(item => item[["type","color","name"].indexOf(e)] == x ).length;
};