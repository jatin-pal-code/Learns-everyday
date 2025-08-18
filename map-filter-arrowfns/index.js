// This code demonstrates the use of the map function to apply a transformation to each element in an array.cd

const input = [1, 2, 3, 4, 5];

function double(x) {
    return x * 2;
    }

    const ans = input.map(double);
    console.log(ans);