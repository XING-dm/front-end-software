// let number = prompt("Nasaa oruulna uu: ");

// if(number<16)
//     alert("ta Cu gees goimon avch bolohgui bn");
// else
//     alert("ta CU gees goimon avch bolno");



// let NewPassword = prompt("ta shine nuuts ugee oruulna uu: ");
// let NewPasswords = prompt("batalgaajuulah nuuts ig oruulna uu: ");

// if(NewPassword != 0)
//     if(NewPassword == NewPasswords)
//         alert("tani oruulsan nuuts ug taarch bn");
//     else
//         alert("oruulsan nuuts ug taarahgui bn:");
// else
//     alert("2 nuuts ug bolon 1 in hooson hooson bn");

// alert("");

let Choice = prompt("sholteai ustai hool ideh uu: 1. tiim  2.ugui");

if(Choice == 1){
    husel = prompt("tsai avah uu: 1. tiim  2.ugui");
    if(husel == 1){
        S = prompt("bansgtai yu: 1.tiim 2. ugui");
        if(S == 1)
            alert("banshtai tsai");
        if(S == 2)
            alert("budaatai tsai");
    }
    if(husel == 2){
        Songolt = prompt("yutai shol ideh ve: 1.guril 2.puntuuz 3.goimon 4.bansh 5.mah 6.nogootoi");
        if(Songolt == 1)
            alert("lavsha");
        if(Songolt == 2)
            alert("huitsai");
        if(Songolt == 3)
            alert("goimontoi shol");
        if(Songolt == 4)
            alert("banshtai shol");
        if(Songolt == 5)
            alert("har shol");
        if(Songolt == 6)
            alert("nogootoi shol");
    }
}
if (Choice == 2){
    m = prompt("mah in tatsan uuu: 1.tiim 2.ugui");
    if(m == 1){
        Songolt = prompt("Guriltai yu budaatai yu: 1.tiim, 2.ugui");
        if(Songolt == 1)
            alert("lavsha");
        if(Songolt == 2)
            alert("huitsai");
    }
    if(m == 2){
        alert("huitsai");
    }
}
