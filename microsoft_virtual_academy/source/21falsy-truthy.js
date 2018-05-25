// Falsy values

if(false) {} else { console.log('false is False')}
if(0) {} else { console.log('0 is False')}
if(NaN) {} else { console.log('NaN is False')}
if(null) {} else { console.log('null is False')}
if(undefined) {} else { console.log('undefined is False')}
if('') {} else { console.log('empty string is False')}
if("") {} else { console.log('empty string is False')}

// Everything else is truthy

if({}) console.log('true');