var calculator = {
    
    
    tambah: function(a,b){
        return a+b;
    },
    kurang: function(a,b){
        return a-b;
    },
    kali: function(a,b){
        return a*b;
    },
    bagi: function(a,b){
        return a/b;
    },
    samadengan: function(a,b){
        if (a<b){
            return a +'lebih kecil daripada'+ b;
        }
        else if (a>b){
            return a +' lebih besar daripada '+ b;
        }
        else { 
            return a +'sama dengan'+ b;
        }
    }
};

console.log(calculator.tambah(2,4));
console.log(calculator.kurang(2,4));
console.log(calculator.kali(2,4));
console.log(calculator.bagi(2,4));
console.log(calculator.samadengan(2,4));