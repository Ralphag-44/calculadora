let i = 0
f = 0
function btn_pressced1(){
    num = document.getElementById("btn1").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced2(){
    num = document.getElementById("btn2").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced3(){
    num = document.getElementById("btn3").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced4(){
    num = document.getElementById("btn4").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced5(){
    num = document.getElementById("btn5").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced6(){
    num = document.getElementById("btn6").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced7(){
    num = document.getElementById("btn7").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced8(){
    num = document.getElementById("btn8").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced9(){
    num = document.getElementById("btn9").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_pressced0(){
    num = document.getElementById("btn0").innerHTML;
    if(i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }else if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    return i
}

function btn_presscedDot(){
    num = document.getElementById("btnDot").innerHTML;
    if(i > 0 && f < 1){
        f = 0
        document.getElementById("result").innerHTML += num;
        f++
    }
}

function btn_presscedCE(){
    document.getElementById("result").innerHTML = 0;
    i = 0
    f = 0
    return i;
}

function btn_presscedC(){
    if(document.getElementById("result").innerHTML.length > 1){
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0, -1);
    }else if(document.getElementById("result").innerHTML.length == 1){
        document.getElementById("result").innerHTML = 0;
        i = 0
        f = 0
    }
    return i;
}

function btn_presscedPlus(){
    num = document.getElementById("btnP").innerHTML;
    if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
}

function btn_presscedMinus(){
    num = document.getElementById("btnM").innerHTML;
    if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
    else if (i == 0){
        document.getElementById("result").innerHTML = num;
        i++;
    }
}

function btn_presscedDivide(){
    num = document.getElementById("btnD").innerHTML;
    if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
}

function btn_presscedTimes(){
    num = document.getElementById("btnT").innerHTML;
    if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
}

function split_complx_nat(user_v){
    part_n = ""
    part_c = ""
    lmt1 = 100
    while ((user_v.indexOf("i") > -1) && lmt1 > 0){
    lmt1--
    part_2 = user_v.indexOf("i")
    part_1 = part_2-1
    console.log("s")
    while(user_v.charCodeAt(part_1) > 47){
        part_1--
    }
    part_2++
    part_c += user_v.substring(part_1, part_2)
    console.log(part_c)
    user_v = user_v.replace(user_v.substring(part_1, part_2), "")
    }
    part_n = user_v
    console.log(part_n)
    console.log(part_c)
    lmt2 = 100
    part_c = part_c.replaceAll("i", "")
    while(part_c*0 != 1*0 && lmt2 > 0){
        lmt2--      
        if (part_c.indexOf("*") > -1 || part_c.indexOf("/") > -1){
            if ((part_c.indexOf("/") < part_c.indexOf("*") && part_c.indexOf("/") != -1 ) || (part_c.indexOf("/") > 0 && part_c.indexOf("*") < 0)){
                console.log("div")
                par_g = part_c.indexOf("/")
                par_1 = par_g-1
                par_2 = par_g+1
                console.log(par_2)
                while (part_c.charCodeAt(par_1) > 47 || part_c[par_1] == "."){
                    console.log(part_c.charCodeAt(par_1))
                    par_1--
                    console.log(part_c.charCodeAt(par_1))
                }
                while (part_c.charCodeAt(par_2) > 47 || part_c[par_2] == "."){
                    par_2++
                }
                user_array = part_c.substring(par_1, par_2).split("/")
                corr = ""
                if (user_array[0]*1 / user_array[1]*1 > 0){
                    corr = "+"
                }
                part_c = part_c.replace(part_c.substring(par_1, par_2), corr + user_array[0]*1 / user_array[1]*1)
                console.log(part_c)
            }
            else if ((part_c.indexOf("*") < part_c.indexOf("/") && part_c.indexOf("*") != -1 ) || (part_c.indexOf("*") > 0 && part_c.indexOf("/") < 0)){
                console.log("mult")
                par_g = part_c.indexOf("*")
                par_1 = par_g-1
                par_2 = par_g+1
                console.log(par_2)
                while (part_c.charCodeAt(par_1) > 47 || part_c[par_1] == "."){
                    console.log(part_c.charCodeAt(par_1))
                    par_1--
                    console.log(part_c.charCodeAt(par_1))
                }
                while (part_c.charCodeAt(par_2) > 47 || part_c[par_2] == "."){
                    par_2++
                }
                user_array = part_c.substring(par_1, par_2).split("*")
                corr = ""
                if (user_array[0]*1 * user_array[1]*1 > 0){
                    corr = "+"
                }
                part_c = part_c.replace(part_c.substring(par_1, par_2), corr + user_array[0]*1 * user_array[1]*1)
                console.log(part_c)
           
            }
            }
        else{
        rst = 0
        for(i=part_c.length;i--;i>0){
            if (part_c.indexOf("-") > -1){
                ltd1 = part_c.indexOf("-")
                ltd2 = ltd1+1
                while (part_c.charCodeAt(ltd2) > 47 || part_c[ltd2] == ".") {
                    ltd2++
                }
                rst -= Number(part_c.substring(ltd1, ltd2).replace("-", ""))
                part_c = part_c.replace(part_c.substring(ltd1, ltd2), "")
            }
            else if (part_c.indexOf("+") > -1){
                ltd1 = part_c.indexOf("+")
                ltd2 = ltd1+1
                while (part_c.charCodeAt(ltd2) > 47 || part_c[ltd2] == "."){    
                    ltd2++
                }
                rst += Number(part_c.substring(ltd1, ltd2).replace("+", ""))
                part_c = part_c.replace(part_c.substring(ltd1, ltd2), "")
            }

        }
        part_c = rst
    }
   
}
tw_par = [
    part_c,
    part_n
]
return tw_par
}


function btn_presscedComplex(){
    num = document.getElementById("btni").innerHTML;
    if(i > 0){
        document.getElementById("result").innerHTML += num;
    }
}

function btn_presscedEquals(){
    user_v = document.getElementById("result").innerHTML.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")
    user_vi = ""
    if (user_v[0] != "-"){
        user_v = "+" + user_v
    }
    if (user_v.indexOf("i") > -1){
        tp = split_complx_nat(user_v)
        console.log(tp)
        user_v = tp[1]
        user_vi = tp[0]
    }
    while(user_v*0 != 1*0){
        console.log(user_v)
        if (user_v.indexOf("*") > -1 || user_v.indexOf("/") > -1){
            if ((user_v.indexOf("/") < user_v.indexOf("*") && user_v.indexOf("/") != -1 ) || (user_v.indexOf("/") > 0 && user_v.indexOf("*") < 0)){
                console.log("div")
                par_g = user_v.indexOf("/")
                par_1 = par_g-1
                par_2 = par_g+1
                console.log(par_2)
                while (user_v.charCodeAt(par_1) > 47 || user_v[par_1] == "."){
                    console.log(user_v.charCodeAt(par_1))
                    par_1--
                    console.log(user_v.charCodeAt(par_1))
                }
                while (user_v.charCodeAt(par_2) > 47 || user_v[par_2] == "."){
                    par_2++
                }
                user_array = user_v.substring(par_1, par_2).split("/")
                corr = ""
                if (user_array[0]*1 / user_array[1]*1 > 0){
                    corr = "+"
                }
                user_v = user_v.replace(user_v.substring(par_1, par_2), corr + user_array[0]*1 / user_array[1]*1)
                console.log(user_v)
            }
            else if ((user_v.indexOf("*") < user_v.indexOf("/") && user_v.indexOf("*") != -1 ) || (user_v.indexOf("*") > 0 && user_v.indexOf("/") < 0)){
                console.log("mult")
                par_g = user_v.indexOf("*")
                par_1 = par_g-1
                par_2 = par_g+1
                console.log(par_2)
                while (user_v.charCodeAt(par_1) > 47 || user_v[par_1] == "."){
                    console.log(user_v.charCodeAt(par_1))
                    par_1--
                    console.log(user_v.charCodeAt(par_1))
                }
                while (user_v.charCodeAt(par_2) > 47 || user_v[par_2] == "."){
                    par_2++
                }
                user_array = user_v.substring(par_1, par_2).split("*")
                corr = ""
                if (user_array[0]*1 * user_array[1]*1 > 0){
                    corr = "+"
                }
                user_v = user_v.replace(user_v.substring(par_1, par_2), corr + user_array[0]*1 * user_array[1]*1)
                console.log(user_v)
           
            }
            }
        else{
        rst = 0
        for(i=user_v.length;i--;i>0){
            if (user_v.indexOf("-") > -1){
                ltd1 = user_v.indexOf("-")
                ltd2 = ltd1+1
                while (user_v.charCodeAt(ltd2) > 47 || user_v[ltd2] == ".") {
                    ltd2++
                }
                rst -= Number(user_v.substring(ltd1, ltd2).replace("-", ""))
                user_v = user_v.replace(user_v.substring(ltd1, ltd2), "")
            }
            else if (user_v.indexOf("+") > -1){
                ltd1 = user_v.indexOf("+")
                ltd2 = ltd1+1
                while (user_v.charCodeAt(ltd2) > 47 || user_v[ltd2] == "."){    
                    ltd2++
                }
                rst += Number(user_v.substring(ltd1, ltd2).replace("+", ""))
                user_v = user_v.replace(user_v.substring(ltd1, ltd2), "")
            }

        }
        user_v = rst
    }
   
}
if (user_vi.toString().length >  0){
    document.getElementById("result").innerHTML = Number(user_v)+ " " + user_vi + "i"
}
else{
    document.getElementById("result").innerHTML = Number(user_v)+ " " + user_vi + "i"
}
}



document.getElementById("btn1").addEventListener("click", btn_pressced1);
document.getElementById("btn2").addEventListener("click", btn_pressced2);
document.getElementById("btn3").addEventListener("click", btn_pressced3);
document.getElementById("btn4").addEventListener("click", btn_pressced4);
document.getElementById("btn5").addEventListener("click", btn_pressced5);
document.getElementById("btn6").addEventListener("click", btn_pressced6);
document.getElementById("btn7").addEventListener("click", btn_pressced7);
document.getElementById("btn8").addEventListener("click", btn_pressced8);
document.getElementById("btn9").addEventListener("click", btn_pressced9);
document.getElementById("btn0").addEventListener("click", btn_pressced0);
document.getElementById("btnDot").addEventListener("click", btn_presscedDot);
document.getElementById("btnCE").addEventListener("click", btn_presscedCE);
document.getElementById("btnC").addEventListener("click", btn_presscedC);
document.getElementById("btnP").addEventListener("click", btn_presscedPlus);
document.getElementById("btnM").addEventListener("click", btn_presscedMinus);
document.getElementById("btnD").addEventListener("click", btn_presscedDivide);
document.getElementById("btnT").addEventListener("click", btn_presscedTimes);
document.getElementById("btnE").addEventListener("click", btn_presscedEquals);
document.getElementById("btni").addEventListener("click", btn_presscedComplex);