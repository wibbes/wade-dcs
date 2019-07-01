setInterval(next, 500);

function next(){
    update();
}

function update(){
  

    var jsonData = $.ajax({url: 'http://127.0.0.1/admin/data',dataType: 'json',}).done(function (results) {
	
	    console.log(results);
        document.getElementById("TotalUsers").innerHTML = "Total Users = " + results.UserCount;
    });
}

        
window.onload = function() {

    update();  

}