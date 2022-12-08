function depoisDe2segundos(x) {
    return new Promise(resolve => {
        console.log('Olá')
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    let x = await depoisDe2segundos('Depois de 2s');
    console.log(x);
}

f1();