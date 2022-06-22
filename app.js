window.onload = function() {

    var hourHand = document.getElementById("hour");
        var minuteHand = document.getElementById("minutes");
        var secondHand = document.getElementById("secs");
        var time = document.getElementById("time");
        var clock = document.getElementById("clock");
        var audio = document.getElementById("audio");
    
        function setDate(){
            var today = new Date();
            
            var second = today.getSeconds();
            var secondDeg = ((second / 60) * 360) + 360; 
            secondHand.style.transform = `rotate(${secondDeg}deg)`;
          
            var minute = today.getMinutes();
            var minuteDeg = ((minute / 60) * 360); 
            minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    
            var hour = today.getHours();
            var hourDeg = ((hour / 12 ) * 360 ); 
            hourHand.style.transform = `rotate(${hourDeg}deg)`;
            
            time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';
    
            }
      
        setInterval(setDate);
     
    }
    // console.log(second)
    // var s = new Date();
    // var today = s.getSeconds();