module.exports = {
    media(lis) {
        var list1 = lis;
        var total = 0;
        var dividendo = list1.length;
        var num4 = 0;
        for (var i = 0; i < list1.length; i++) {
            total += list1[i];
        }
        num4 = total / dividendo
        console.log("a média foi: " + num4)
    },

    maximo(vetor) {
        var lista2 = vetor
        var m = 0;
        for (var i = 0; i < lista2.length; i++) {
            if (lista2[i] > m) {
                m = lista2[i];
            }
        }
        console.log("O maior valor é: "+ m)
    },
    menor(vetor) {
        var lista3 = vetor
        var menor = 0;
        // for (var i = 0; i < lista3.length; i++) {
        //     if (lista3[i] < menor) {
        //         menor = lista3[i];
        //     }
        // }
        menor = Math.min.apply(null,lista3)
        console.log("O menor valor é: "+ menor)
    }

}
