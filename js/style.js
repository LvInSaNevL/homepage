var Night = "-webkit-linear-gradient(bottom, #09203f 0%, #537895 100%)"; //Eternal Constance
var Morning = "-webkit-linear-gradient(60deg, #abecd6 0%, #fbed96 100%)"; //Over Sun
var Day = "-webkit-linear-gradient(bottom, #209cff 0%, #68e0cf 100%)"; //Seashore
var Evening = "-webkit-linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)"; //Orange Juice


$(document).ready(
    function Start()
    {
       var d = new Date().getHours();
	   if (21 <= d && d < 6) { document.getElementsByTagName("body")[0].style.background = Night; }
	   else if (6 <= d && d < 11) { document.getElementsByTagName("body")[0].style.background = Morning; }
	   else if (11 <= d && d < 17) { document.getElementsByTagName("body")[0].style.background = Day; }
	   else if (17 <= d && d < 21) { document.getElementsByTagName("body")[0].style.background = Evening; }
    }
);