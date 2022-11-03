function findTarget(r, k, s = new Set()) {
    if(!r) return false
    if(s.has(k-r.val)) return true
    s.add(r.val)
    return findTarget(r.left, k, s) || findTarget(r.right, k, s)
    
}