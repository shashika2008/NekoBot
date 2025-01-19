/**
> *[ Fitur Plugin TiktokFix ]*

> < ! > Warning
> Scrape: https://github.com/FrankXz12/Skrep-Dan-Fitur/blob/main/Skrep-ttsave.js

> Type Cjs
> *[ Script ]*
> https://github.com/AxellNetwork/NekoBot
> https://devuploads.com/vhaofww2sujx
> Source
> Ch1
> https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W
> Ch2
> https://whatsapp.com/channel/0029VateyJuKWEKhJMRKEL20
**/

let deku = async (m, {
    sock,
    Func,
    Scraper,
    Uploader,
    store,
    text,
    config
}) => {

    if (!text.includes('tiktok')) return m.reply('link tiktok mana bang!?')

    await Scraper.ttsave.video(text).then(async (a) => {
        let deku = `*⏤͟͟͞͞╳ [ Tiktok - Downloader ]*\n`
        deku += `> ⏤͟͟͞͞╳ *Nama:* ${a.nickname}\n`
        deku += `> ⏤͟͟͞͞╳ *Username:* ${a.username}\n`
        deku += `> ⏤͟͟͞͞╳ *Usernameid:* ${a.uniqueId}\n`
        deku += `> ⏤͟͟͞͞╳ *Views:* ${a.stats.plays}\n`
        deku += `> ⏤͟͟͞͞╳ *Like:* ${a.stats.likes}\n`
        deku += `> ⏤͟͟͞͞╳ *Komentar:* ${a.stats.comments}\n`
        deku += `> ⏤͟͟͞͞╳ *Bagi:* ${a.stats.shares}\n`
        deku += `⏤͟͟͞͞╳ `

        sock.sendMessage(m.cht, {
            image: {
                url: a.profilePic
            },
            caption: Func.Styles(deku)
        }, {
            quoted: m
        })

        if (a.dlink.nowm) {
            let dekuu = `*⏤͟͟͞͞╳ [ Tiktok - Downloader ]*\n`
            dekuu += `> ⏤͟͟͞͞╳ *Nama:* ${a.nickname}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Username:* ${a.username}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Usernameid:* ${a.uniqueId}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Views:* ${a.stats.plays}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Like:* ${a.stats.likes}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Komentar:* ${a.stats.comments}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Bagi:* ${a.stats.shares}\n`
            dekuu += `> ⏤͟͟͞͞╳ *type:* ${a.type}\n`
            dekuu += `⏤͟͟͞͞╳ `

            await sock.sendMessage(m.cht, {
                video: {
                    url: a.dlink.nowm
                },
                caption: Func.Styles(deku)
            }, {
                quoted: m
            })
        } else if (a.slides) {
            let dekuu = `*⏤͟͟͞͞╳ [ Tiktok - Downloader ]*\n`
            dekuu += `> ⏤͟͟͞͞╳ *Nama:* ${a.nickname}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Username:* ${a.username}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Usernameid:* ${a.uniqueId}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Views:* ${a.stats.plays}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Like:* ${a.stats.likes}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Komentar:* ${a.stats.comments}\n`
            dekuu += `> ⏤͟͟͞͞╳ *Bagi:* ${a.stats.shares}\n`
            dekuu += `> ⏤͟͟͞͞╳ *type:* ${a.type}\n`
            dekuu += `⏤͟͟͞͞╳ `

            for (let i of a.slides) {
                await sock.sendMessage(m.cht, {
                    image: {
                        url: i.url
                    },
                    caption: Func.Styles(deku)
                }, {
                    quoted: m
                })
            }
        }
    });
    Scraper.ttsave.mp3(text).then(async (u) => {

        const contextInfo = {
            mentionedJid: [m.sender],
            isForwarded: !0,
            forwardingScore: 127,
            externalAdReply: {
                title: `${Func.Styles(`${u.songTitle}`)}`,
                body: `${Func.Styles(`${u.username}`)}`,
                mediaType: 1,
                thumbnailUrl: u.coverUrl,
                sourceUrl: u.audioUrl,
                renderLargerThumbnail: true
            }
        }

        await sock.sendMessage(m.cht, {
            audio: {
                url: u.audioUrl
            },
            mimetype: 'audio/mpeg',
            contextInfo
        }, {
            quoted: m
        })
    })
}

deku.command = "tiktok"
deku.alias = ["tt", "ttdl", "tiktokdl"]
deku.category = ["downloader"]
deku.settings = {
    limit: true
}
deku.description = "Download video/slide dari tiktok"
deku.loading = true

module.exports = deku