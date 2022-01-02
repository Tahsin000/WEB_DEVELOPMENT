var cont = 0;
        var size = 25;

        function btn()
        {
            cont++;
            var theme = document.getElementById('theme');
            var sty = document.querySelector("#myStyle");
            if (cont%2 == 0)
            {
                sty.classList.remove("my-Style")
                theme.innerHTML = "Black theme";
            }
            else 
            {
                // var sty = document.querySelector(".myStyle");
                sty.classList.add("my-Style")
                theme.innerHTML = "Red theme";
            }
        }
        function btnSizePlus()
        {
            var btnStyPlus = document.querySelector("#myStyle");
            size +=3;
            var text = size + "px";
            // console.log(text);
            btnStyPlus.style.fontSize = text;
            document.getElementById("si").innerHTML ="Font size : "+ (size) + "px"; 
        }
        function btnSizeMainesse()
        {
            var btnStyPlus = document.querySelector("#myStyle");
            size -= 3;
            var text = size + "px";
            // console.log(text);
            btnStyPlus.style.fontSize = text;
            document.getElementById("si").innerHTML ="Font size : "+ (size) + "px"; 
        }