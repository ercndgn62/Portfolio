const colors = ["red", "#333333", "#fefefe", "#aaaaaa", "blue", "green", "aqua", "#ff57d8", "#ffd240", "#2bff84", "#ff7c1f"]
        var btn3=document.querySelector("#btn3");
        var btn5=document.querySelector("#btn5");
        var kutu=document.querySelector("#kutu");
        var body=document.querySelector("body");
        var namerenk=document.querySelector("#color");
        
        
        btn3.onclick=function(){
            
            var kirmizi=Math.floor(Math.random()*255);
            var yesil=Math.floor(Math.random()*255);
            var mavi=Math.floor(Math.random()*255);
            
            var renk=`rgb(${kirmizi} ,${yesil}, ${mavi})`;
            kutu.style.background=renk;
        }
        

        btn5.onclick=function() {
            var renk=colors[Math.floor(Math.random() * colors.length)]
         
          body.style.background=renk;
          namerenk.textContent=renk;
          namerenk.style.background=renk;
        }
        