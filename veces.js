//Álvaro Garcia

function veces (letra, frase){;
var i,n;
for(i=0,n=0; i<frase.length;++i){
  if(letra === frase[i]){++n;};
  i++
}
return n;
};

var l='o',f='el oso perezoso';
document.write('La frase"'+f+'"tiene '+veces(l,f)+ 'veces la letra ' +l );
