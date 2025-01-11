const {
    delay
} = require("baileys");

let messageSent = false;

async function events(m, {
    sock,
    store
    config
}) {
   let settings = db.list().settings
    settings.animeUpdate = settings.animeUpdate || {};

    intervalId = setInterval(async () => {
        try {
            let groups = Object.keys(store.groupMetadata);
            let latestAnime = await scraper.list().kuronime.latest();
            let oldAnime = settings.animeUpdate;

            if (!oldAnime || oldAnime.title !== latestAnime[0].title) {
                console.log(`[+] Pembaruan anime terdeteksi: ${latestAnime[0].title}`);
                
                let metadata = store.groupMetadata[config.id.group]
                let caption = `*🍟 Anime Episode Update*\n`;
                caption += Object.entries(latestAnime[0]).map(([key, value]) => `> *- ${key.capitalize()}:* ${value}`).join("\n");

                caption += `\n\n*- Share the Channel :* > https://whatsapp.com/channel/0029VaxNm957dmeaROxJiU36 *- Join Group Komunitas kami :* > https://chat.whatsapp.com/GAA4MzVka5C2RsGcLn7FAE > *ℹ️ Pesan ini dikirim oleh NekoBot*`;

                if (!messageSent) {
                await sock.sendMessage(config.id.newsletter, {
                        image: {
                            url: latestAnime[0].thumbnail
                        },
                        caption
                    }).then(async(msg) => {
                        for (let id of Object.keys(store.groupMetadata)) {
                         await sock.copyNForward(id, msg, true);
                         await delay(3000);
                            messageSent = true;
                            settings.animeUpdate = latestAnime[0];
                        }
                        messageSent = true;
                    });
                await sock.sendMessage(metadata.id, {
                        image: {
                            url: latestAnime[0].thumbnail
                        },
                        mentions: metadata.participants.map((a) => a.id),
                        caption
                    })                    
                }
            }

            console.log(`[+] Mengecek anime baru...`);
            return
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }, 600000);
}

module.exports = {
    events
};