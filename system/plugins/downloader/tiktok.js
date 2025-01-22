<<<<<<< HEAD
let neko = async (m, {
    sock,
    Func,
    Scraper,
    Uploader,
    store,
    text,
    config
}) => {
    if (!text.includes('tiktok')) return m.reply('❌ *Link TikTok tidak ditemukan! Masukkan link yang valid.*');

    await Scraper.ttsave.video(text).then(async (a) => {
        const caption = `*– 乂 TikTok - Downloader 🎥*\n`;
        caption += `> 📛 *Nama:* ${a.nickname}\n`;
        caption += `> 🧑‍💻 *Username:* ${a.username}\n`;
        caption += `> 🆔 *Username ID:* ${a.uniqueId}\n`;
        caption += `> 👁️ *Views:* ${a.stats.plays}\n`;
        caption += `> ❤️ *Likes:* ${a.stats.likes}\n`;
        caption += `> 💬 *Komentar:* ${a.stats.comments}\n`;
        caption += `> 🔄 *Bagikan:* ${a.stats.shares}\n`;
        caption += `⏤͟͟͞͞╳`;

        sock.sendMessage(m.cht, {
            image: {
                url: a.profilePic
            },
            caption
        }, {
            quoted: m
        });

        if (a.dlink.nowm) {
            await sock.sendMessage(m.cht, {
                video: {
                    url: a.dlink.nowm
                },
                caption
            }, {
                quoted: m
            });
        } else if (a.slides) {
            for (let i of a.slides) {
                await sock.sendMessage(m.cht, {
                    image: {
                        url: i.url
                    },
                    caption
                }, {
                    quoted: m
                });
            }
        }
    });

    Scraper.ttsave.mp3(text).then(async (u) => {
        const contextInfo = {
            mentionedJid: [m.sender],
            isForwarded: true,
            forwardingScore: 127,
            externalAdReply: {
                title: `${Func.Styles(`${u.songTitle}`)}`,
                body: `${Func.Styles(`${u.username}`)}`,
                mediaType: 1,
                thumbnailUrl: u.coverUrl,
                sourceUrl: u.audioUrl,
                renderLargerThumbnail: true
            }
        };

        await sock.sendMessage(m.cht, {
            audio: {
                url: u.audioUrl
            },
            mimetype: 'audio/mpeg',
            contextInfo
        }, {
            quoted: m
        });
    });
=======
let neko = async (
  m,
  { sock, Func, Scraper, Uploader, store, text, config },
) => {
  if (!text.includes("tiktok"))
    return m.reply(
      "❌ *Link TikTok tidak ditemukan! Masukkan link yang valid.*",
    );

  await Scraper.ttsave.video(text).then(async (a) => {
    const caption = `*– 乂 TikTok - Downloader 🎥*\n`;
    caption += `> 📛 *Nama:* ${a.nickname}\n`;
    caption += `> 🧑‍💻 *Username:* ${a.username}\n`;
    caption += `> 🆔 *Username ID:* ${a.uniqueId}\n`;
    caption += `> 👁️ *Views:* ${a.stats.plays}\n`;
    caption += `> ❤️ *Likes:* ${a.stats.likes}\n`;
    caption += `> 💬 *Komentar:* ${a.stats.comments}\n`;
    caption += `> 🔄 *Bagikan:* ${a.stats.shares}\n`;
    caption += `⏤͟͟͞͞╳`;

    sock.sendMessage(
      m.cht,
      {
        image: {
          url: a.profilePic,
        },
        caption,
      },
      {
        quoted: m,
      },
    );

    if (a.dlink.nowm) {
      await sock.sendMessage(
        m.cht,
        {
          video: {
            url: a.dlink.nowm,
          },
          caption,
        },
        {
          quoted: m,
        },
      );
    } else if (a.slides) {
      for (let i of a.slides) {
        await sock.sendMessage(
          m.cht,
          {
            image: {
              url: i.url,
            },
            caption,
          },
          {
            quoted: m,
          },
        );
      }
    }
  });

  Scraper.ttsave.mp3(text).then(async (u) => {
    const contextInfo = {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 127,
      externalAdReply: {
        title: `${Func.Styles(`${u.songTitle}`)}`,
        body: `${Func.Styles(`${u.username}`)}`,
        mediaType: 1,
        thumbnailUrl: u.coverUrl,
        sourceUrl: u.audioUrl,
        renderLargerThumbnail: true,
      },
    };

    await sock.sendMessage(
      m.cht,
      {
        audio: {
          url: u.audioUrl,
        },
        mimetype: "audio/mpeg",
        contextInfo,
      },
      {
        quoted: m,
      },
    );
  });
>>>>>>> a81e5ef (Major update 🎉)
};

neko.command = "tiktok";
neko.alias = ["tt", "ttdl", "tiktokdl"];
neko.category = ["downloader"];
neko.settings = {
<<<<<<< HEAD
    limit: true
=======
  limit: true,
>>>>>>> a81e5ef (Major update 🎉)
};
neko.description = "📥 Download video atau slide dari TikTok.";
neko.loading = true;

module.exports = neko;
