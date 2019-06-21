 Web3 = require('web3')

 var web3 =new Web3("HTTP://127.0.0.1:7545");

 /*if (typeof web3 !== 'undefined') 
 
{
 web3 = new Web3(web3.currentProvider);
 } 
else 
{
 // set the provider you want from Web3.providers
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
 }


 web3.eth.defaultAccount = web3.eth.accounts[0];*/
 var abi= [
    {
      constant: false,
      inputs: [Array],
      name: 'setInstructor',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x22faf03a'
    },
    {
      constant: false,
      inputs: [],
      name: 'getInstructor',
      outputs: [Array],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x3c1b81a5'
    }
  ];
 var addr='0xFd42E303a20901D141B76B1eEB606607a37b9844';
 App ={
  web3Provider: null,
  contracts: {},
  init: async function(){
    console.log("hello");

  },
  initWeb3: async function(){

  },
  initContract: function(){

  },
  bindEvents: function(){

  },

};

  var contract = web3.eth.Contract(abi,addr);

  $("#button").click(function() {
  Courses.setInstructor($("#name").val(), $("#age").val());
  });

  Courses.getInstructor(function(error, result){
    if(!error){
      $("#instructor").html(result[0]+' ('+result[1]+' years old)');
      console.log(result);
      }
   else
     console.error(error);
   });

  $(function() {  
$(window).load(function() {  
App.init();  
});  
});
