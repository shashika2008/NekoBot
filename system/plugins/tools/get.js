const undici = require("undici");
const {
    extension
} = require("mime-types");
const {
    html
} = require("js-beautify");


const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Cache-Control': 'max-age=0',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
};

const timeout = 10000;

module.exports = {
    command: "get",
    alias: ["fetch"],
    category: ["tools"],
    description: "Mendapatkan data dari url",
    loading: true,
    async run(m, {
        sock,
        Func,
        text,
        config
    }) {
        if (!text) throw `> Masukan atau reply url yang ingin kamu ambil data nya`;
        const urls = isUrl(text);
        if (!urls) return m.reply("Invalid URL");

        for (const url of urls) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeout);
                const response = await undici.fetch(url, {
                    headers,
                    signal: controller.signal,
                });
                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const mime = response.headers.get("content-type").split(";")[0];
                const cap = `*– 乂 Fetch - Url* > *- Request :* ${url}`;
                let body;

                if (/\html/gi.test(mime)) {
                    body = await response.text();
                    await sock.sendMessage(
                        m.cht, {
                            document: Buffer.from(html(body)),
                            caption: cap,
                            fileName: "result.html",
                            mimetype: mime,
                        }, {
                            quoted: m
                        }
                    );
                } else if (/\json/gi.test(mime)) {
                    body = await response.json();
                    m.reply(JSON.stringify(body, null, 2));
                } else if (/image/gi.test(mime)) {
                    body = await response.arrayBuffer();
                    sock.sendFile(
                        m.cht,
                        Buffer.from(body),
                        `result.${extension(mime)}`,
                        cap,
                        m
                    );
                } else if (/video/gi.test(mime)) {
                    body = await response.arrayBuffer();
                    sock.sendFile(
                        m.cht,
                        Buffer.from(body),
                        `result.${extension(mime)}`,
                        cap,
                        m
                    );
                } else if (/audio/gi.test(mime)) {
                    body = await response.arrayBuffer();
                    sock.sendFile(
                        m.cht,
                        Buffer.from(body),
                        `result.${extension(mime)}`,
                        cap,
                        m, {
                            mimetype: mime
                        }
                    );
                } else {
                    body = await response.text();
                    m.reply(Func.jsonFormat(body));
                }
            } catch (error) {
                console.error("Error fetching URL:", error);
                m.reply(`Error fetching URL: ${error.message}`);
            }
        }
    },
};

function isUrl(string) {
    let urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
    let result = string.match(urlRegex);
    return result;
}