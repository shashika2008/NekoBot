module.exports = {
<<<<<<< HEAD
    command: "kuronime",
    alias: [],
    category: ["anime"],
    settings: {
        limit: true,
    },
    description: "Cari Anime Terbaru di Kuronime",
    async run(m, {
        sock,
        Scraper,
        text,
        Func,
        config
    }) {
        let latest = await Scraper.kuronime.latest();

        let cap = `*– 乂 **Panduan Penggunaan Fitur**:*\n
=======
  command: "kuronime",
  alias: [],
  category: ["anime"],
  settings: {
    limit: true,
  },
  description: "Cari Anime Terbaru di Kuronime",
  async run(m, { sock, Scraper, text, Func, config }) {
    let latest = await Scraper.kuronime.latest();

    let cap = `*– 乂 **Panduan Penggunaan Fitur**:*\n
>>>>>>> a81e5ef (Major update 🎉)
> 📝 *Masukkan nama anime* untuk mencari anime yang sedang tren\n
> 🔗 *Masukkan URL* untuk mendapatkan data anime lengkap langsung dari Kuronime\n

*– 乂 **Contoh Penggunaan**:*\n
> ➡️ *${m.prefix + m.command} Toradora*\n
> ➡️ *${m.prefix + m.command} https://kuronime.biz/anime/toradora*\n

*– 乂 **Anime yang Rilis Hari Ini** (${latest.length} Anime):*\n`;

<<<<<<< HEAD
        cap += latest
            .map((a) =>
                Object.entries(a)
                    .map(([b, c]) => `> 🔸 *${b.capitalize()}* : ${c}`)
                    .join("\n"),
            )
            .join("\n\n");

        if (!text) throw cap;

        if (Func.isUrl(text) && /kuronime./.test(text)) {
            if (/anime\//.test(text)) {
                let data = await Scraper.kuronime.detail(text);
                let cap = `*– 乂 **Detail Anime** - Kuronime*\n
> 🖼️ *Thumbnail*: ${data.metadata.thumbnail}\n`;

                cap += Object.entries(data.metadata)
                    .map(([a, b]) => `> 🔹 *${a}* : ${b}`)
                    .join("\n");
                cap += "\n\n*– 乂 **Daftar Episode**:*\n";
                cap += data.episode
                    .map((a, i) => `> 📺 *${i + 1}.* ${a.title}\n> 🔗 ${a.url}`)
                    .join("\n\n");

                m.reply({
                    image: {
                        url: data.metadata.thumbnail,
                    },
                    caption: cap,
                });
            }
        } else {
            let data = await Scraper.kuronime.search(text);
            if (data.length === 0) throw "> ❌ *Anime tidak ditemukan*";

            let cap = "*– 乂 **Hasil Pencarian Anime** - Kuronime*\n";
            cap += data
                .map((a) =>
                    Object.entries(a)
                        .map(([b, c]) => `> 🔸 *${b.capitalize()}* : ${c}`)
                        .join("\n"),
                )
                .join("\n\n");

            m.reply({
                image: {
                    url: data[0].thumbnail,
                },
                caption: cap,
            });
        }
    },
=======
    cap += latest
      .map((a) =>
        Object.entries(a)
          .map(([b, c]) => `> 🔸 *${b.capitalize()}* : ${c}`)
          .join("\n"),
      )
      .join("\n\n");

    if (!text) throw cap;

    if (Func.isUrl(text) && /kuronime./.test(text)) {
      if (/anime\//.test(text)) {
        let data = await Scraper.kuronime.detail(text);
        let cap = `*– 乂 **Detail Anime** - Kuronime*\n
> 🖼️ *Thumbnail*: ${data.metadata.thumbnail}\n`;

        cap += Object.entries(data.metadata)
          .map(([a, b]) => `> 🔹 *${a}* : ${b}`)
          .join("\n");
        cap += "\n\n*– 乂 **Daftar Episode**:*\n";
        cap += data.episode
          .map((a, i) => `> 📺 *${i + 1}.* ${a.title}\n> 🔗 ${a.url}`)
          .join("\n\n");

        m.reply({
          image: {
            url: data.metadata.thumbnail,
          },
          caption: cap,
        });
      }
    } else {
      let data = await Scraper.kuronime.search(text);
      if (data.length === 0) throw "> ❌ *Anime tidak ditemukan*";

      let cap = "*– 乂 **Hasil Pencarian Anime** - Kuronime*\n";
      cap += data
        .map((a) =>
          Object.entries(a)
            .map(([b, c]) => `> 🔸 *${b.capitalize()}* : ${c}`)
            .join("\n"),
        )
        .join("\n\n");

      m.reply({
        image: {
          url: data[0].thumbnail,
        },
        caption: cap,
      });
    }
  },
>>>>>>> a81e5ef (Major update 🎉)
};
