import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  texto2="";
  texto: String = 'for int';
  salida = [];
  act(x){
    this.salida=[]
    console.log(this.texto)
    this.goatr()
  };
  goatr() {
    this.texto=this.texto2;
    let i = 1, j = 1;

    while (i < this.texto.length) {
      j = this.getMaxVariable(this.texto);
      if (j > 1) {
        let palabra = this.texto.substr(0, j);
        if (this.palabrasr.indexOf(palabra) != -1)
          this.salida.push({tok: palabra, typo: 'recervada'});
        else
          this.salida.push({tok: palabra, typo: 'variable'});
        this.texto = this.texto.substr(j, this.texto.length);
        continue;
      }
      if (this.getMaxNumer(this.texto) >= 1) {
        j = this.getMaxNumer(this.texto);
        this.salida.push({tok: this.texto.substr(0, j), typo: 'numero'});
        this.texto = this.texto.substr(j, this.texto.length);
        continue;
      } else if (this.operadores.indexOf(this.texto[0]) != -1) {
        this.salida.push({tok: this.texto[0], typo: 'operador'});
      } else if (this.delimitadores.indexOf(this.texto[0]) != -1) {
        this.salida.push({tok: this.texto[0], typo: 'delimitador'});
      }


      console.log(j);
      this.texto = this.texto.substr(1, this.texto.length);
      console.log(this.texto);

    }
    console.log(this.texto);
    console.log(this.salida);
  }

  getMaxVariable(x) {
    let k = 2 ;
    let res = '';

    while (k < x.length && this.isVariable(x.substr(0, k))) {
      k++;
    }

    if (k == 2) return 0;
    if (k == x.length)
      return k;

    return k - 1;
  }

  getMaxNumer(x) {
    let k = 1;
    let res = '';
    console.log("waaaaa" ,this.isNumber("4564"))
    while (k < x.length && this.isNumber(x.substr(0, k))) {
      k++;
    }

    if (k == 2) return 0;
    if (k == x.length)
      return k;

    return k - 1;
  }

  getMaxPalabraRecervada(x) {
    for (let i of this.palabrasr) {
      if (i == x.substr(0, i.length))
        return i.length;
    }
    return 0;
  }


  isletra(x) {
    if ((x[0] >= 'a' && x[0] <= 'z') || (x[0] >= 'A' && x[0] <= 'Z'))
      return true;
    else return false;
  }

  isNumber(x) {
    for (let i of x)
      if ((i < '0' || i > '9'))
        return false;
    return true;
  }

  isVariable(x) {
    console.log('---', x);
    if (x.length < 2) return false;
    if (!this.isletra(x[0])) return false;
    if (x.slice(-1)[0] == '.' || x.slice(-1)[0] == '_') return false;
    for (let i of x) {
      if (!this.isletra(i) && !this.isNumber(i) && i != '.' && i != '_')
        return false;
    }
    return true;
  }

  operadores = ['*', '/', '-', '+'];
  delimitadores = ['{', '}', '[', ']', '(', ')'];
  palabrasr = [
    'abstract',
    'assert',
    'boolean',
    'break',
    'byte',
    'case',
    'catch',
    'char',
    'class',
    'const',

    'continue',
    'default',
    'do',
    'double',
    'else',
    'enum',
    'extends',
    'final',
    'finally',
    'float',

    'for',
    'goto',
    'if',
    'implements',
    'import',
    'instanceof',
    'int',
    'interface',
    'long',
    'native',

    'new',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'short',
    'static',
    'strictfp',
    'super',

    'switch',
    'synchronized',
    'this',
    'throw',
    'throws',
    'transient',
    'try',
    'void',
    'volatile',
    'while'
  ];
}

interface Interface {
  token;
  tipo;
}
