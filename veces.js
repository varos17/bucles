function veces (letra, frase){;
var i=0,n=0;
while ( i<frase.length){
  if(letra === frase[i]){++n;};
  i++
}
return n;
};

var l='o',f='el oso perezoso';
document.write('La frase"'+f+'"tiene '+veces(l,f)+ 'veces la letra ' +l );
