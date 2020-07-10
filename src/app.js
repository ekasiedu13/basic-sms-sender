import 'bootstrap/dist/css/bootstrap.min.css';
const Axios = require('axios');
const form = document.getElementById( "smsForm" );

const Person = require('./person');
// const Message = require('./message');
const api = require('./api');


const axios = Axios.create({});

form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    const senderEmail = document.getElementById('senderEmail').value;
    const recipientFn = document.getElementById('recipientFn').value;
    const recContact = document.getElementById('recContact').value;
    const msgSender = document.getElementById('senderFn').value;
    let sentMsg = document.getElementById('msgContent').value;

    sentMsg = 
    `Welcome ${recipientFn} \n${sentMsg} \n

    \nFrom ${msgSender}. Contact us on 0574644251 or ${senderEmail}
    `;

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
        let arr = [Person(recipientFn, 30, "DR", recContact)
        // ,
        // Person("Emmanuel", 20, "Sir", 233574644251)
    ]
        sendSMS(arr);
    };

    worker();
    console.log(`${sentMsg}`);
    alert(`Message Sent to ${recipientFn}`);
});

// window.worker = worker;