//we transform the for cycle from before in to a function from an event listener
//but first we go and fetch all the DOM elements we need
const getList           = document.getElementById('get-list');
const list              = document.getElementById('list');
const titleResults      = document.getElementById('card-title-results');
const titleInstructions = document.getElementById('card-title-instructions');
//we add the event listener to the button 
getList.addEventListener('click' , () => {
  //this will empty the list from the instructions aswell as the emails present
  titleResults.className      = "";
  titleInstructions.className = "d-none";
  list.innerHTML              = "";

  //define the array in which i will insert my emails
  let emails=[];
  //we need 10 emails so we'll use a for cycle as follows
  for (let i=0 ; i<10 ; i++){
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then ((resp)=> {
      // we push inside emails 10 times
     emails.push(resp.data.response)
      // and see the result
      // console.log(emails)
      //we have the mails we need! jubilation!, celebration!, happiness!
     //now we can spawn them in the DOM
     newLiTag=`<li class="list-group-item text-center">${resp.data.response}</li>`;
     list.innerHTML+=newLiTag;
     
    })
  }
} )

