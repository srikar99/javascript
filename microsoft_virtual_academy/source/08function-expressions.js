setTimeout(function(){
    console.log(this);
    console.log('printed after 2 seconds');
},2000);

setTimeout(() => {
    console.log(this);
    console.log('printed after 2 seconds');
},2000);