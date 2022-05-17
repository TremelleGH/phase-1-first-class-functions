function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function job(){
}
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}
