// 1-ci tapsiriq. mertebelerin sayinin tapilmasi

// var eded = Number(prompt("Ededi daxil edin:"));
// if(!isNaN(eded)){
//     var count=0;
//     while(eded>0){
//     eded=(eded-eded%10)/10;
//     count++;
//     }
//     document.write("Daxil etdiyiniz reqemin mertebelerinin sayi - "+ count);
// }else{
//     document.writeln("Duzgun eded daxil et, dede!");
// }

// 2-ci tapsiriq. repeat word

// var word = prompt("Soz daxil edin:");
// for(var i=0;i<word.length;i++){
//     document.writeln(word); 
// }


// 3-cu tapsiriq. Fibonachi ededleri
var eded = prompt("Eded daxil edin:");
var a=0,b=1,c;
document.writeln("Fibonachi ededi - ");
document.writeln(a);
document.writeln(b);
if(!isNaN(eded)){
    for(i=0;i<eded;i++){
    c=a+b;
    a=b;
    b=c;
    document.writeln(c);
    }
}else{
    document.writeln("Duzgun eded daxil et, dede!");
}
