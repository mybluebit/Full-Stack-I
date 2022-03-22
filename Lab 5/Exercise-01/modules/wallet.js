
const getAddress = function(){
   
    // const address =  Math.random(1000);
    // console.log(`Wallet Address is ${address}`);


    const Crypto = require('crypto')

    function randomString(size = 64) {  
    return Crypto
        .randomBytes(size)
        .toString('hex')
        .slice(0, size)
    }

    console.log(`Wallet Address is ${randomString()}`);

    const crypto = require('crypto');
    // const secret = 'abcdefg';
    // const secret = Math.random(1000).toString();
    const secret =randomString();
    const hash = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex');
    console.log(`Wallet Address is ${hash}`);
}

const depositAmmount =function(amount){
    console.log (`Amount: ${amount} deposited`);
};

module.exports = {

    getAddress,
    depositAmmount
}
