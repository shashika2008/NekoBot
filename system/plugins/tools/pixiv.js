class Command {
<<<<<<< HEAD
    constructor() {
        this.command = "pixiv";
        this.alias = [];
        this.category = ["tools"];
        this.settings = {
            premium: true,
        };
        this.description = "🔍 Mencari gambar dari Pixiv";
        this.loading = true;
    }

    run = async (m, { sock, Func, Scraper, config, store, text }) => {
        if (!text) throw "> ❌ *Masukkan pencarian gambar yang kamu inginkan!*";

        try {
            let { data } = await Func.fetchJson(
                `https://api.lolicon.app/setu/v1?r18=${text.includes("--r18") ? 1 : 0}&keyword=${text.replace("--r18", "").trim()}&limit=20`
            );

            if (!data[0]?.title) throw "> ❌ *Gambar tidak ditemukan! Coba kata kunci lain.*";

            let cap = "*– 乂 Hasil Pencarian Pixiv - Gambar*\n\n";
            cap += `🎨 *Judul:* ${data[0]?.title}\n`;
            cap += `🔞 *R18:* ${data[0]?.r18 ? "✓ Ya" : "❌ Tidak"}\n`;
            cap += `👤 *Penulis:* ${data[0]?.author}\n`;
            cap += `🏷️ *Tags:* ${data[0]?.tags.join(", ")}\n`;

            m.reply({
                image: {
                    url: data[0].url,
                },
                caption: cap,
            });
            m.reply("> ✅ *Gambar berhasil ditemukan!*");

        } catch (error) {
            console.error("Error fetching Pixiv image:", error);
            m.reply("> ❌ *Terjadi kesalahan, coba lagi nanti.*");
        }
    };
=======
  constructor() {
    this.command = "pixiv";
    this.alias = [];
    this.category = ["tools"];
    this.settings = {
      premium: true,
    };
    this.description = "🔍 Mencari gambar dari Pixiv";
    this.loading = true;
  }

  run = async (m, { sock, Func, Scraper, config, store, text }) => {
    if (!text) throw "> ❌ *Masukkan pencarian gambar yang kamu inginkan!*";

    try {
      let { data } = await Func.fetchJson(
        `https://api.lolicon.app/setu/v1?r18=${text.includes("--r18") ? 1 : 0}&keyword=${text.replace("--r18", "").trim()}&limit=20`,
      );

      if (!data[0]?.title)
        throw "> ❌ *Gambar tidak ditemukan! Coba kata kunci lain.*";

      let cap = "*– 乂 Hasil Pencarian Pixiv - Gambar*\n\n";
      cap += `🎨 *Judul:* ${data[0]?.title}\n`;
      cap += `🔞 *R18:* ${data[0]?.r18 ? "✓ Ya" : "❌ Tidak"}\n`;
      cap += `👤 *Penulis:* ${data[0]?.author}\n`;
      cap += `🏷️ *Tags:* ${data[0]?.tags.join(", ")}\n`;

      m.reply({
        image: {
          url: data[0].url,
        },
        caption: cap,
      });
      m.reply("> ✅ *Gambar berhasil ditemukan!*");
    } catch (error) {
      console.error("Error fetching Pixiv image:", error);
      m.reply("> ❌ *Terjadi kesalahan, coba lagi nanti.*");
    }
  };
>>>>>>> a81e5ef (Major update 🎉)
}

module.exports = new Command();
