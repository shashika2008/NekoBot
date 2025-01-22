module.exports = {
<<<<<<< HEAD
    command: "tiktoksearch",
    alias: ["ttsearch"],
    category: ["downloader"],
    settings: {
        limit: true,
    },
    description: "🔍 Cari video menarik dari TikTok berdasarkan kata kunci",
    loading: true,
    async run(m, {
        sock,
        Func,
        text,
        Scraper,
        config
    }) {
        if (!text) throw `❌ *– Kesalahan Penggunaan!*\n\n📌 *Cara Penggunaan:*\n1. Masukkan kata kunci untuk mencari video dari TikTok.\n2. Bot akan memberikan video yang relevan.\n\n📖 *Contoh:*\n> *${m.prefix}${m.command} kucing lucu*\n> *${m.prefix}${m.command} tutorial masak*`;

        let data = await Scraper.tiktok.search(text);
        if (!data || data.length === 0) throw `❌ *– Pencarian Gagal!*\n\n⚠️ Tidak ada hasil ditemukan untuk kata kunci: *${text}*.\n\n🔎 *Tips:*\n- Gunakan kata kunci yang lebih spesifik.\n- Pastikan ejaan kata kunci benar.\n\n📖 *Contoh:*\n> *${m.prefix}${m.command} video lucu*`;

        let json = data.getRandom();
        let caption = `*– 乂 TikTok - Pencarian 🔍*\n\n`;
        caption += Object.entries(json.metadata).map(([a, b]) => `- *📊 ${a.capitalize()}:* ${b}`).join("\n");

        await sock.sendMessage(m.cht, {
            video: {
                url: json.media.no_watermark || "Tidak tersedia",
            },
            caption
        }, {
            quoted: m
        });
    },
=======
  command: "tiktoksearch",
  alias: ["ttsearch"],
  category: ["downloader"],
  settings: {
    limit: true,
  },
  description: "🔍 Cari video menarik dari TikTok berdasarkan kata kunci",
  loading: true,
  async run(m, { sock, Func, text, Scraper, config }) {
    if (!text)
      throw `❌ *– Kesalahan Penggunaan!*\n\n📌 *Cara Penggunaan:*\n1. Masukkan kata kunci untuk mencari video dari TikTok.\n2. Bot akan memberikan video yang relevan.\n\n📖 *Contoh:*\n> *${m.prefix}${m.command} kucing lucu*\n> *${m.prefix}${m.command} tutorial masak*`;

    let data = await Scraper.tiktok.search(text);
    if (!data || data.length === 0)
      throw `❌ *– Pencarian Gagal!*\n\n⚠️ Tidak ada hasil ditemukan untuk kata kunci: *${text}*.\n\n🔎 *Tips:*\n- Gunakan kata kunci yang lebih spesifik.\n- Pastikan ejaan kata kunci benar.\n\n📖 *Contoh:*\n> *${m.prefix}${m.command} video lucu*`;

    let json = data.getRandom();
    let caption = `*– 乂 TikTok - Pencarian 🔍*\n\n`;
    caption += Object.entries(json.metadata)
      .map(([a, b]) => `- *📊 ${a.capitalize()}:* ${b}`)
      .join("\n");

    await sock.sendMessage(
      m.cht,
      {
        video: {
          url: json.media.no_watermark || "Tidak tersedia",
        },
        caption,
      },
      {
        quoted: m,
      },
    );
  },
>>>>>>> a81e5ef (Major update 🎉)
};
