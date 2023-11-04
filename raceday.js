let raceNumber = Math.floor(Math.random() * 1000);

let registrouCedo = false; 
let idadeCorredor = 19; 



if (idadeCorredor > 18 && registrouCedo) {
    raceNumber += 1000;
}

if (idadeCorredor < 18 && registrouCedo) {
    raceNumber += 1000;
}

if (idadeCorredor > 18 && registrouCedo) {
    console.log(`Você correrá às 9h30. Seu número de corrida é ${raceNumber}`);
} else if (idadeCorredor > 18 && !registrouCedo) {
    console.log(`Você correrá às 11h00. Seu número de corrida é ${raceNumber}`);
} else if (idadeCorredor < 18) {
    console.log(`Você correrá às 12h30. Seu número de corrida é ${raceNumber}`);
} else {
    console.log("Por favor, dirija-se à mesa de registro.");
}

