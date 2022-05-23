var oScript = document.createElement("script");
oScript.type = "text/javascript";
oScript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(oScript);

var clickbtn1 = document.querySelector("#reset");
var clickbtn2 = document.querySelector("#delete");

clickbtn1.addEventListener("click", function() {
            $.ajax({
                type: 'GET',
                url:'/insertdb',
                datatype:'json',
                success: function(data) {
                    if (data) {
                        alert(data)

                        var time = new Date()
                        var tdata = "<tr>"
                        obj = JSON.parse(data)

                        tdata += "<th>1</th>"
                        tdata += "<th>"+time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()+"</th>"
                        tdata += "<th>"+time.getHours()+":"+time.getMinutes()+"</th>"
                        tdata += "<th>"+Text+"</th>"
                        tdata += "</tr>"
                        document.getElementById("table").innerHTML = tdata
                    }
                    else {
                        alert("도둑이 엄서용...");
                    }
                }
        });
});

clickbtn2.addEventListener("click", function() {
            $.ajax({
                type: 'GET',
                url: '/selectdb',
                datatype:'json',
                success: function(data) {
                    var tabledata = ""
                    for(var i in data) {
                        obj = JSON.parse(data[i][1])
                        tabledata += "<tr>"
                        tabledata += "<th>"+data[i][0]+"</th>"
                        tabledata += "<th>"+obj.yeardate+"</th>"
                        tabledata += "<th>"+obj.time+"</th>"
                        tabledata += "<th>"+Text+"</th>"
                        tabledata += "</tr>"
                    }

                    document.getElementById("table").innerHTML = tabledata
                }
            });
});

function deleteRow(rownum) {
    const table = document.getElementById('soeun');
    const newRow = table.deleteRow(rownum);
  }