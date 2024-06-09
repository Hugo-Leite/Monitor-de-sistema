const os = require("node:os");

function infoSystem() {
    const operationSystem = os.type();

    const arch = os.arch();

    const processor = os.cpus();

    const uptime = os.uptime();

    const totalMemory = Math.floor(os.totalmem());
    const memoryUsed = Math.floor(os.freemem());

    const info = `
    Sistema operacional: ${operationSystem} \n\n
    Arquitetura do sistema: ${arch} \n\n
    Processador: ${processor[0].model} \n\n
    Tempo de atividade: ${convert(uptime)} \n\n
    Uso de memória (%): ${Math.floor(100 - (memoryUsed / totalMemory) * 100)}%'
    ----------------------------------------------------
    `;

    return info;
}

function convert(time, withSeg = true) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let second = Math.floor(time % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;

    if (withSeg) {
        return hours + ":" + minutes + ":" + second;
    }
    return hours + ":" + minutes;
}

module.exports = infoSystem;
