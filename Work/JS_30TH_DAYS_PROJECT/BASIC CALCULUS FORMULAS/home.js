var t = localStorage.getItem('t')
        function btnPlus()
        {
            var r = document.getElementById('num01').value;
            var r1 = document.getElementById('num02').value;
            localStorage.getItem('t',r);
            localStorage.getItem('t',r1);
            var tmp = parseFloat(r) + parseFloat(r1);

            if (!isNaN(tmp))
            document.getElementById('y').innerHTML = "SUM = " + tmp;
            else 
            {
                document.getElementById('y').innerHTML = "invalit input";
            }
        }

        function btnSub()
        {
            var r = document.getElementById('num01').value;
            var r1 = document.getElementById('num02').value;
            localStorage.getItem('t',r);
            localStorage.getItem('t',r1);
            var tmp = parseFloat(r) - parseFloat(r1);

            if (!isNaN(tmp))
            document.getElementById('y').innerHTML = "SUM = " + tmp;
            else 
            {
                document.getElementById('y').innerHTML = "invalit input";
            }
        }

        function btnMul()
        {
            var r = document.getElementById('num01').value;
            var r1 = document.getElementById('num02').value;
            localStorage.getItem('t',r);
            localStorage.getItem('t',r1);
            var tmp = parseFloat(r) * parseFloat(r1);

            if (!isNaN(tmp))
            document.getElementById('y').innerHTML = "SUM = " + tmp;
            else 
            {
                document.getElementById('y').innerHTML = "invalit input";
            }
        }

        function btnDiv()
        {
            var r = document.getElementById('num01').value;
            var r1 = document.getElementById('num02').value;
            localStorage.getItem('t',r);
            localStorage.getItem('t',r1);
            var tmp = parseFloat(r) / parseFloat(r1);

            if (!isNaN(tmp))
            document.getElementById('y').innerHTML = "SUM = " + tmp;
            else 
            {
                document.getElementById('y').innerHTML = "invalit input";
            }
        }