
    
    function multiplicarValores(){                                                   // função multiplicar. 
        let m1 = document.getElementById("txt1").value;                              // id passado para let m1.
        let m2 = document.getElementById("txt2").value;                              // id passado para let m2.
        let m3 = m1 * m2;                                                            // m3 recebe a Multiplicação de (m1 * m2).
        alert(m3);                                                                   // apresenta na tela um alert apresentando o resultado da multiplicação.
        let valorfinal = document.write("O valor será este na multiplicação= ", m3); // valorfinal recebe o valor da multiplicação que está no m3 e apresenta em uma nova tela.
         
    }


    function somarValores(){                                                       // função Somar.
        let s1 = parseInt(document.getElementById("txt3").value);                  // id passado para let s1 aplicando parseint para transformar string em number inteiro.
        let s2 = parseInt(document.getElementById("txt4").value);                  // id passado para let s2 aplicando parseint para transformar string em number inteiro.
        let s3 = s1 + s2;                                                          // s3 recebe a soma de (s1 + s2).
        alert(s3);                                                                 // apresenta na tela um alert apresentando o resultado da Soma.
        let valorfinal = document.write("O valor será este na soma = ", s3);       // valorfinal recebe o valor da soma que está na s3 e apresenta em uma nova tela.
    }

    function subtraindoValores(){                                                   // função Subtrair.
        let sub1 = document.getElementById("txt5").value;                           // id passado para let sub1. 
        let sub2 = document.getElementById("txt6").value;                           // id passado para let sub2. 
        let sub3 = sub1 - sub2;                                                     // sub3 recebe a subtração de (sub1 - sub2).
        alert(sub3);                                                                // apresenta na tela um alert apresentando o resultado da Subtração.
        let valorfinal = document.write("O valor será este  na subtração= ", sub3); // valorfinal recebe o valor da subtração que está na sub3 e apresenta em uma nova tela.
    }

    function DividindoValores(){                                                   // função Dividir.
        let d1 = document.getElementById("txt7").value;                            // id passado para let d1. 
        let d2 = document.getElementById("txt8").value;                            // id passado para let d2. 
        let d3 = d1 / d2;                                                          // d3 recebe divisão de ( d1 / d2 ).
        alert(d3);                                                                 // apresenta na tela um alert com o resultado da divisão.
        let valorfinal = document.write('O valor será este na divisão de ', d3);   // valorfinal recebe o valor da divisão que está na d3 e apresenta em uma nova tela. 
        
    }
    
