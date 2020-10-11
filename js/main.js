document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.getElementsByTagName('body')[0].style.visibility = "hidden";
    document.getElementById('loader').style.visibility = "visible";
  } else {
    setTimeout(function(){
      document.getElementById('loader').style.visibility = "hidden";
      document.getElementsByTagName('body')[0].style.visibility = "visible";
    },3000);
  }
};

function read(e)
{ var text =e.previousElementSibling;
  if (text.style.display === "inline") {
    e.innerHTML = "Know more";
    text.style.display = "none";
  } else {
    e.innerHTML = "Know less";
    text.style.display = "inline";
  }
}
