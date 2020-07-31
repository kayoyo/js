           var now = new Date();
           var firstDate = new Date("2019-12-25"); 
            
           var start = firstDate.getTime(); 
           var end = now.getTime() 
           var pass = end - start; 
           var passDay = Math.floor(pass/1000/60/60/24); 
           document.querySelector('#passDay').innerHTML = passDay;

        //  경과시간에 대한 확인
        //    console.log(pass + " ms"); // 밀리세컨드
        //    console.log(pass/1000 + " 초"); // 초 
        //    console.log(pass/1000/60 + " 분"); // 분 
        //    console.log(pass/1000/60/60 + " 시간"); // 시간 
        //    console.log(pass/1000/60/60/24 + " 일"); // 일 
        //    console.log(Math.floor(pass/1000/60/60/24) + " 일"); // 소수점 이하를 버림

        calcDay(100);
        calcDay(200);
        calcDay(365);
        calcDay(500);
        calcDay(730);
        calcDay(1000);

        function calcDay(days) {
           
            var days2 = days*1000*60*60*24; 
            var passDay2 = start + days2; 
           
            var someDate = new Date(passDay2);
            
            //확인
            // console.log(someDate);
            // console.log(someDate.toLocaleString());

           
            var year = someDate.getFullYear();
            var month = someDate.getMonth();
            var day = someDate.getDate();
            console.log(year + " 년" + month + " 월" + day + " 일");

            document.querySelector("#date"+days).innerHTML = year + "년 " + month + "월 " + day + "일";
            
        }
