let str = "my name is ankit jain";

function capital(str) {
    let i = 0;
    let arr = str.split(" ");
    console.log(arr)

    function capital2(arr) {
        arr[i][0].toUpperCase();
        i--;
        console.log(arr);
        capital2(arr);
    }
    capital2(arr);
}
capital(str);