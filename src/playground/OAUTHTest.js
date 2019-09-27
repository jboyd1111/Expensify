import React from 'react';
import ReactDOM from 'react-dom';
import hello from 'hellojs';

/*
This file makes an OAUTH 2.0 connection with the Google API.
You can find the tutorial this file was created from here:
https://tests4geeks.com/oauth2-javascript-tutorial/
So, when you click the "Google" button, you will (after logging into your Google account to give your local
  web site/page access to your Google account info) get back: your profile picture and your name.
  Your local application will have access to this from now on (unless you log out of your Google account)
  NOTE: Need to find another API. Google+ is ending on 04/02/2019
*/
const myFuncCall2=()=>
{
    console.log("I am in function 2");
}
const myFuncCall=
hello.init({
    google: "967283955931-ae6v8qonq265359dcr76qfi8mt0oufct.apps.googleusercontent.com"
  });

const myFuncCall3=()=>
{
    hello('google').login();
    hello.on('auth.login', function (auth) {

        // add a greeting and access the thumbnail and name from
        // the authorized response
  
        hello(auth.network).api('/me').then(function (resp) {
          console.log(resp);
      var lab = document.createElement("div");
      lab.id = "pic_and_greet";
      lab.innerHTML = '<img src="' + resp.picture + '" /> Hey ' + resp.name;
      document.body.appendChild(lab);
        });
      });
}
const myFuncCall4=()=>
{
    hello('google').logout();
    hello.on('auth.logout', function () {
        var lab = document.getElementById("pic_and_greet");
        if (lab != null) document.body.removeChild( lab );
      });
}

const AuthInfo = ()=> 
{
    {myFuncCall()};
return (
<div>
{/* <button className='button' onClick={this.hello('google').login()}>Add Option</button> */}
{/* <button className='button' >Add Option</button> */}
<button className='button'  onClick={myFuncCall3}>Google</button>
<button className='button'  onClick={myFuncCall4}>Logout</button>
    <p>Hello Jeff!</p>
</div>)
}

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo />, document.getElementById('app'));