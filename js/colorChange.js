var nightMode=document.getElementById("nightMode");
var dayMode=document.getElementById("dayMode");
var webCss=document.getElementById("head");

function nightChange(){
    var nightOn=`<meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Aaron Web page</title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="css/mainNight.css"><script src="main.js"></script>`;
    webCss.innerHTML=nightOn;
}

function dayChange(){
    var dayOn=`<meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Aaron Web page</title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="css/main.css"><script src="main.js"></script>`;
    webCss.innerHTML=dayOn;
}

dayMode.onclick=dayChange;

nightMode.onclick=nightChange;