/**
 * Exception handling is similar to that of java whenever compiler encounters an error it creates an
 * Error object and looks for catch block, if the block is there it will give the error object to that block
 * to execute the exception handling code. If not the compiler stop exectuing the whole file.
 */
function errorMethod(){
    let obj;

    console.log(obj.b);
}

try{
    errorMethod();
}catch(error){
    console.log(`caught error[${error.message}]`);
}finally{
    console.log('executing this statement finally ');
}

/**
 * You can also raise an error using throw keyword
 */
function raiseError(){
    throw new Error('Throwing sample error');
};

try{
    raiseError();
}catch(error){
    console.log(error.message);
}