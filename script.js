var d = new Date();
setInterval(function() {
    d = new Date();
    var second = d.getSeconds();
    var degree = second * 6; 
    document.getElementById("second-hand").style.transform = "rotate(" + degree + "deg)";
    var minite = d.getMinutes();
    var degree1 = minite * 6; 
    document.getElementById("minite-hand").style.transform = "rotate(" + degree1 + "deg)";
    var hour = d.getHours();
    var degree2 = hour * 30; 
    document.getElementById("hour-hand").style.transform = "rotate(" + degree2 + "deg)";
    
    
}, 1000);