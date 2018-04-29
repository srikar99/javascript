var counter = (function () {
    let count = 0;

    function get(){
        return count;
    }
    function print(message) {
        console.log(message + count);
    };

    function increment() {
        count++;
        print('After increment...');
    }

    function reset() {
        print('Before reset...')
        count = 0;
        print('After reset...')
    }

    return {
        value: get,
        increment: increment,
        reset: reset
    }
})();

counter.increment();
counter.increment();

console.log(counter.value());