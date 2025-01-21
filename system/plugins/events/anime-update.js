const { delay } = require("baileys");

let messageSent = false;

async function events(m, { sock, store, config }) {
    let settings = db.list().settings;
    settings.animeUpdate = settings.animeUpdate || {};

    intervalId = setInterval(async () => {
        try {
            let groups = Object.keys(store.groupMetadata);
            let latestAnime = await scraper.list().kuronime.latest();
            let oldAnime = settings.animeUpdate;

            if (!oldAnime || oldAnime.title !== latestAnime[0].title) {
                console.log(`[+] Pembaruan anime terdeteksi: ${latestAnime[0].title}`);

                let metadata = store.groupMetadata[config.id.group];
                let caption = `╭──[🍟 *Pembaruan Episode Anime* ]\n`;
                caption += Object.entries(latestAnime[0])
                    .map(
                        ([key, value]) =>
                            `᎒⊸ *${key.capitalize()}* : ${value}`
                    )
                    .join("\n");
                caption += `\n╰────────────•`;

                caption += `\n\n💬 *Info Tambahan:*\n`;
                caption += `᎒⊸ *Bagikan Channel Kami:*\n   https://whatsapp.com/channel/0029VaxNm957dmeaROxJiU36\n`;
                caption += `᎒⊸ *Gabung Grup Komunitas Kami:*\n   https://chat.whatsapp.com/GkigkWVWbyyGe5PyAbXreR`;

                if (!messageSent) {
                    await sock
                        .sendMessage(config.id.group, {
                            image: { url: latestAnime[0].thumbnail },
                            caption,
                        })
                        .then(async (msg) => {
                            for (let id of Object.keys(store.groupMetadata)) {
                                await sock.copyNForward(id, msg);
                                await delay(3000);
                            }
                        });
                    settings.animeUpdate = latestAnime[0];
                    messageSent = true;
                }
            }

            console.log(`[+] Mengecek anime baru...`);
        } catch (error) {
            console.error(`[!] Error: ${error.message}`);
        }
    }, 600000);
}

module.exports = {
    events,
};
