        var set_alarm = document.querySelector('.set_alarm');
        set_alarm.addEventListener("click",function(){
            var a_hour = window.prompt("Enter the hour: ");
            var a_minute = window.prompt("Enter the minute: ");
            var a_seconds = window.prompt("Enter the seconds: "); 
            document.querySelector('.alarm_time').textContent = a_hour + ":" + a_minute + ":" + a_seconds; 
        function current_date(){
            const date = new Date();
            var hr = date.getHours();
            var min = date.getMinutes();
            var ss = date.getSeconds();
            document.querySelector('.current_time').textContent = hr + ":" + min + ":" + ss;
            if(a_hour == hr && a_minute == min && a_seconds == ss)
            document.querySelector('.alarm').textContent = "Time is over";
            setTimeout(current_date, 1000);
        }
        current_date();
    })
 
