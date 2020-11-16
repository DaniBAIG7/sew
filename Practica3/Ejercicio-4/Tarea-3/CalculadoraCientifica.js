
class Calculadora{
    constructor(){
        this.memo = null;
    }

    suma(){
        var text = document.getElementById('resultado');
        text.value += "+";
    }

    resta() {
        var text = document.getElementById('resultado');
        text.value += '-';
    }

    multiplicacion() {
        var text = document.getElementById('resultado');
        text.value += '*';
    }

    division() {
        var text = document.getElementById('resultado');
        text.value += '/';
    }

    coma() {
        var text = document.getElementById('resultado');
        text.value += '.';
    }

    clear() {
        document.getElementById('resultado').value = '';
    }

    pulsa1() {
        var text = document.getElementById('resultado');
        text.value += '1';
    }

    pulsa2() {
        var text = document.getElementById('resultado');
        text.value += '2';
    }
    
    pulsa3() {
        var text = document.getElementById('resultado');
        text.value += '3';
    }
    
    pulsa4() {
        var text = document.getElementById('resultado');
        text.value += '4';
    }

    pulsa5() {
        var text = document.getElementById('resultado');
        text.value += '5';
    }

    pulsa6() {
        var text = document.getElementById('resultado');
        text.value += '6';
    }

    pulsa7() {
        var text = document.getElementById('resultado');
        text.value += '7';
    }

    pulsa8() {
        var text = document.getElementById('resultado');
        text.value += '8';
    }

    pulsa9() {
        var text = document.getElementById('resultado');
        text.value += '9';
    }

    pulsa0() {
        var text = document.getElementById('resultado');
        text.value += '0';
    }

    resolver() {
        try {
            var str = document.getElementById('resultado').value;
            document.getElementById("resultado").value = eval(str);
        }
        catch(err) {
             document.getElementById("resultado").value = "Error = " + err;
        }
    }

    mrc() {
        this.memo = null;
    }

    mMenos() {
        if(this.memo != null) {
            document.getElementById('resultado').value += this.memo;
            this.memo = null;
        }
    }

    mMas() {
        try {
           this.memo = eval(document.getElementById('resultado').value);
        }
        catch(err) {
           document.getElementById("resultado").value = "Error = " + err;
        }
    }
}

class CalculadoraCientifica extends Calculadora {
    CalculadoraCientifica() {
        this.super();
    }

    pi() {
        document.getElementById("resultado").value += Math.PI;
    }

    parentesisIzq() {
        document.getElementById("resultado").value += '(';
    }

    parentesisDer() {
        document.getElementById("resultado").value += ')';
    }

    shift() {
        if(this.shiftEnabled) {
            this.shiftEnabled = false;
        } else {
            this.shiftEnabled = true;
        }
        
    }

    erase() {
        var valor = document.getElementById("resultado").value;
        document.getElementById("resultado").value = valor.substring(0, valor.length - 1);
    }

    potenciaX() {
        var lastDigit = this.getLastDigit();
        this.removeLastDigit();
        document.getElementById("resultado").value += "Math.pow(" + lastDigit + ",";
    }

    tan() {
        this.removeLastDigit();
        if(this.shiftEnabled) {
            document.getElementById("resultado").value += "Math.atan(";
            this.shiftEnabled = false;
        } else {
            document.getElementById("resultado").value += "Math.tan(";
        }
    }

    cos() {
        this.removeLastDigit();
        if(this.shiftEnabled) {
            document.getElementById("resultado").value += "Math.acos(";
            this.shiftEnabled = false;
        } else {
            document.getElementById("resultado").value += "Math.cos(";
        }
    }

    sin() {
        this.removeLastDigit();
        if(this.shiftEnabled) {
            document.getElementById("resultado").value += "Math.asin(";
            this.shiftEnabled = false;
        } else {
            document.getElementById("resultado").value += "Math.sin(";
        }
    }

    raiz() {
        this.removeLastDigit();
        document.getElementById("resultado").value += "Math.sqrt(";
    }

    diezElevadoA() {
        document.getElementById("resultado").value += "Math.pow(10,";
    }

    base_e_log() {
        document.getElementById("resultado").value += "Math.log(";
    }

    exp() {
        document.getElementById("resultado").value += "Math.exp(";
    }

    factorial() {
        
    }

    clearUltimo() {
        this.removeLastDigit();
    }

    getLastDigit() {
        var valor = document.getElementById('resultado').value;
        if(this.isUniqueDigit(valor)) {
            return valor;
        } else {
            for(var i = valor.length - 1; i >= 0; i--) {
                if(valor.charAt(i) == '+' || valor.charAt(i) == '-' || valor.charAt(i) == '*' || valor.charAt(i) == '/' || i == 0) {
                    var toRet = valor.substring(i+1, valor.length);
                    return toRet;
                }
            }
        }
    }

    isUniqueDigit(valor) {
        for(var i=0; i < valor.length; i++) {
            if(valor.charAt(i) == '+' || valor.charAt(i) == '-' || valor.charAt(i) == '*' || valor.charAt(i) == '/') {
                return false;
            }
        }
        return true;
    }

    removeLastDigit() {
        var valor = document.getElementById('resultado').value;
        if(this.isUniqueDigit(valor)) {
            document.getElementById('resultado').value = "";
        }
        else {
            for(var i = valor.length - 1; i >= 0; i--) {
                if(valor.charAt(i) == '+' || valor.charAt(i) == '-' || valor.charAt(i) == '*' || valor.charAt(i) == '/' || i == 0) {
                    var str = valor.substring(0, i+1);
                    document.getElementById('resultado').value = str;
                    break;
                }
            }
        }
    }
}

var calculadora = new CalculadoraCientifica();