var membersName = ["Kiran", "Priya" ,"Laksh" ,"Kriti"];
var membersImg = ["https://previews.123rf.com/images/jemastock/jemastock1806/jemastock180602298/102903772-cute-father-cartoon-vector-illustration-graphic-design.jpg","https://p1.hiclipart.com/preview/790/411/605/fineas-and-ferb-mom-bat-7-png-clipart.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HrkJm3f0C_1ytPKXCBvbkKSmb3KNFS9S4LZJh9b4vEaFnM-dr7m-TTyW5cwemnKtvHU&usqp=CAU","https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/72742/1592434782_12298"]
var i = 0;
function One() {
    
  document.getElementById("album").src = membersImg [i]
  
  
i++;

if(i == 4)
  {
    i=0;
  }
}

  