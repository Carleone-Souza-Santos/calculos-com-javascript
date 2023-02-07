
    
    function multiplicarValores(){
        let m1 = document.getElementById("txt1").value;
        let m2 = document.getElementById("txt2").value;
        let m3 = m1 * m2;
        alert(m3);
        let valorfinal = document.write("O valor será este na multiplicação= ", m3);
         
    }


    function somarValores(){
        let s1 = parseInt(document.getElementById("txt3").value);
        let s2 = parseInt(document.getElementById("txt4").value);
        let s3 = s1 + s2;
        alert(s3);
        let valorfinal = document.write("O valor será este na soma = ", s3);
    }

    function subtraindoValores(){
        let sub1 = document.getElementById("txt5").value;
        let sub2 = document.getElementById("txt6").value;
        let sub3 = sub1 - sub2;
        alert(sub3);
        let valorfinal = document.write("O valor será este  na subtração= ", sub3);
    }

    function DividindoValores(){
        let d1 = document.getElementById("txt7").value;
        let d2 = document.getElementById("txt8").value;
        let d3 = d1 / d2;
        alert(d3);
        let valorfinal = document.write('O valor será este na divisão de ', d3);
        
    }
    
