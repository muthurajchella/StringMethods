
                                    //STRING//

//string.lenth
let sample = 'RAJA';
console.log(sample.length);

//string.slice //slice(start, end), substring(start,end), substr(start, end)
let sL = 'apple,orange,banana';
let sLm = sL.slice(8)  
console.log(sLm);


//SUBSTRING 
let sS = 'muthuraj Chelladurai';
let sSm = sS.substring(7)
console.log(sSm);

// //SUbSTR 
// let sStr = 'muthuraj Chelladurai';
// let sStrm = sStr.substr(7)
// console.log(sStrm);

//REPLACING // its a case sensitive
let rPl = 'muthuraj Chelladurai muthuraj muthuraj muthuraj';
let rPlm = rPl.replace("muth",'raj')
console.log(rPlm);

let rPli = 'muthuraj Chelladurai';
let rPlmi = rPli.replace(/MUTHU/i,'raj')
console.log(rPlmi);


let rPlg = 'muthuraj Chelladurai';
let rPlmg = rPlg.replace(/MUTHU/gi,'raj')
console.log(rPlmg);


//String ReplaceAll
let rPla = 'my name is muthuraj chelladurai Im complete my graduation in anna university chennai my name is muthuraj there are most popular person muthurajwhich mainpulat control common center with the help of jdvgajbj aodfygp aeirfqiurgfq eqiguqeu quyrbnalhb rfiuqrefpiubqwefj qerufgq[iruhb muthu';
let rPlma = rPla.replaceAll("muthu",'raj')
console.log(rPlma);

//String toLowerCase
let lpc = 'Hello WorlD';
let lpcm = lpc.toLowerCase();
console.log(lpcm);

//String toUpparCase
let upc = 'hello world';
let upcm = upc.toUpperCase();
console.log(upcm);

//String concat
let cc1 = 'hello';
let cc2 = 'world';
let ccm = cc1.concat(" ",cc2);
ccm.toLowerCase()
console.log(ccm);
 let ccplus = "there"+"is"+"very"+"bless"+"in god"
 console.log(ccplus);

//TRIM
let trim = '        hello world                 hello world    ';
let trimfocus = trim.trim()
console.log(trim);
console.log(trimfocus);
let trimstart = trim.trimStart()
console.log(trimstart);
let trimend = trim.trimEnd()
console.log(trimend);

//padding extraplace @2017
// let num = 5;       
// let padstart = num.padStart(4);
// console.log(padstart);

//????????????????????????????????

//charAt()
let char = "HELLO WORLD";
let charat = char.charAt(9);
console.log(charat);

//charCOdeAt
let charcode = "HELLO WORLD";
let charcodeat = charcode.charCodeAt(9)
console.log(charcodeat);


//SPLIT()

let sp = "my name is muthuraj";
let spm =sp.split(" ")
console.log(spm);

