const input = [1, 2, 3, 4, 5];
function filterlogic(x) {
    if (x % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

const ans = input.filter(filterlogic);
console.log(ans);