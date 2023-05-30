function IsPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(IsPrime(1));
console.log(IsPrime(2));
console.log(IsPrime(3));