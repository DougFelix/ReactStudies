function choice(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

export {choice};