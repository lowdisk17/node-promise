var promiseResolveExample = (input) => {
    return new Promise((resolve, reject) => {
        if (input == 1) {
            resolve('This is resolve sample 1')
        }
        reject('This is reject sample 1');
    });
}

var promiseRejectExample = (input) => {
    return new Promise((resolve, reject) => {
        if (input == 0) {
            reject('This is reject sample 2')
        }
        resolve('This is resolve sample 2');
    });
}

module.exports = {
    promiseResolveExample,
    promiseRejectExample
};