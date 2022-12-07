module.exports = {
    dateNow(data){
        let dia, mes, ano
        let msg = "";

        ano = data.getFullYear();
		mes = ("0" + (data.getMonth() + 1)).slice(-2);
		dia = data.getDate().toString().padStart(2, '0');

        let diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        msg += `Data no formato dd/mm/yyyy: ${dia + "/" + mes + "/" + ano}\n`
        msg += `Horário: ${data.toTimeString().split(" ")[0].substr(0, 5)}\n`
        msg += `Data por extenso: ${diaSemana[data.getDay()] + ", "+ data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear()}`
        
        console.log(msg)
    }
}