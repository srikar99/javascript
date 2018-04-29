console.log("--- With Closure ---")
var counter = (function(){
    let count = 0;

    function print(message){
        console.log(message + count);
    }
    return {
        value: count,
        increment: function(){
            count++;
            print('After increment...');
        },

        reset: function(){
            print('Before reset...')
            count = 0;
            print('After reset...')
        }
    }
})();

counter.increment();
counter.increment();
counter.increment();

// Here we Accidentally created a Closure
console.log(counter.value);

counter.reset();

console.log("--- Without Closure ---")
// To avoid Closure use some method to return the value instead of directly accessing it.
var counter2 = (function(){
    let count = 0;

    function print(message){
        console.log(message + count);
    }

    function get(){
        return count;
    }
    return {
        value: get,
        increment: function(){
            count++;
            print('After increment...');
        },

        reset: function(){
            print('Before reset...')
            count = 0;
            print('After reset...')
        }
    }
})();

counter2.increment();
counter2.increment();
counter2.increment();

// Here we Accidentally created a Closure
console.log(counter2.value());

counter2.reset();