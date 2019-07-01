var actual5Pressure=[];
var nominal5Pressure=[];
var actual6Pressure=[];
var nominal6Pressure=[];
var actual7Pressure=[];
var nominal7Pressure=[]
var actual8Pressure=[];
var nominal8Pressure=[];
var maxNum = 300;

setInterval(next, 500);
function next(){
    head();
};


function head(){
   
    var jsonData = $.ajax({url: 'http://127.0.0.1/update',dataType: 'json',}).done(function (results) {
        console.log(results);
    });
};

        
window.onload = function() {
    
    head();

};