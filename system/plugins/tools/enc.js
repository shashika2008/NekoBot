module.exports = {
    command: "enc",
    alias: ["encrip"],
    category: ["owner"],
    settings: {
        limit: true,
    },
    async run(m, {
        sock
    }) {
        if (!m.quoted) throw "> Balas pesan yang ingin di enc";
        let hasil = encrypt(m.quoted.body);
        m.reply(hasil);
    }
}

let data = require('javascript-obfuscator');

function encrypt(q) {
    let hasil = data.obfuscate(q, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    });
    return hasil.getObfuscatedCode()
}