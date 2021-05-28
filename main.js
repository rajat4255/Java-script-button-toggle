const rootApp = document.getElementById("root");
var button=document.createElement("button");
var body=document.getElementsByTagName("body")[0];
body.appendChild(button);
button.innerHTML="ON";
button.id="botton";
button.type="botton";
button.onclick="myFunc()";


var state="true";
button.addEventListener("click" , function() {
  button.innerHTML="OFF";
  state=!state;
  if(state===false){
    button.innerHTML="OFF";
  }
  if(state===true){
    button.innerHTML="ON";

  }});
