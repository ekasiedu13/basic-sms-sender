// const Person = require('./person');
// const Axios = require('axios');
// const axios = Axios.create({});
// const api = require('./api');

const Message = function (_msg) {
    let msg = _msg;
    let length = _msg.length;
}

const sendSMS = (arr) =>{
    for (let n of arr){
        axios.get(`${api()}?des=${n.number}&sender=${msgSender}&mess=${sentMsg}`)
        .then(res =>{
            console.log(res);
        })
        .catch(
            err => console.log(err));
    }
}

const worker = ()=>{
    let arr = [Person(recipientFn, 30, "DR", recContact)]

    sendSMS(arr);
};

// const worker = function worker(){

//     console.log(`${sentMsg}`);
//     alert(`Message Sent to ${recipientFn}`);
// }

module.exports.Message = Message;
module.exports.sendSMS = sendSMS;
module.exports.worker = worker;