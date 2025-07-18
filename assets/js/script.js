//define the array in which i will insert my emails
let emails=[];
//we need 10 emails so we'll use a for cycle as follows
for (let i=0 ; i<10 ; i++){
  axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=> {
    // we push inside emails 10 times
    emails.push(resp.data.response)
    // and see the result
    console.log(emails)
    //we have the mails we need! jubilation!, celebration!, happiness!
  })
}
