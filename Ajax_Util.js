 
/* Cross domain ajax call by using Javascript without jquery */


Utils.ajax = function (url) {
   var img = document.getElementById("imgReporting");
   if (!img) {
       img = document.createElement("img");
       img.src = url;
       img.height = "1";
       img.setAttribute("style", "visibility: hidden");
       document.getElementsByTagName("body")[0].appendChild(img);
   }
   else {
       img.setAttribute("src", url)
   }
};
