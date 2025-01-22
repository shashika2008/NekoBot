module.exports = {
<<<<<<< HEAD
    command: "sokuja",
    alias: [],
    category: ["anime"],
    settigs: {
        limit: true,
    },
    description: "Cek Anime terbaru di sokuja",
    async run(m, {
        sock,
        Scraper,
        text,
        Func,
        config
    }) {
        let latest = await Scraper.sokuja.latest();
        let cap = `*– 乂 Cara penggunaan*
=======
  command: "sokuja",
  alias: [],
  category: ["anime"],
  settigs: {
    limit: true,
  },
  description: "Cek Anime terbaru di sokuja",
  async run(m, { sock, Scraper, text, Func, config }) {
    let latest = await Scraper.sokuja.latest();
    let cap = `*– 乂 Cara penggunaan*
>>>>>>> a81e5ef (Major update 🎉)
> Masukan query untuk mencari anime
> Masukan link untuk mendapatkan data anime

*– 乂 Contoh - penggunaan*
> ${m.prefix + m.command} oshi no ko
> ${m.prefix + m.command} https://x1.sokuja.uk/anime/oshi-no-ko-subtitle-indonesia/
> ${m.prefix + m.command} https://x1.sokuja.uk/end-oshi-no-ko-episode-11-subtitle-indonesia/

*– 乂 Berikut ${latest.length} anime yang rilis hari ini*

${latest
  .map((a) =>
    Object.entries(a)
      .map(([b, c]) => `> *- ${b.capitalize()} :* ${c}`)
      .join("\n"),
  )
  .join("\n\n")}`;
<<<<<<< HEAD
        if (!text) throw cap;
        if (Func.isUrl(text) && /sokuja./.test(text)) {
            if (/anime\//.test(text)) {
                let data = await Scraper.sokuja.detail(text);
                let cap = `*– 乂 Sokuja - Detail*\n`;
                cap += Object.entries(data.metadata)
                    .map(([a, b]) => `> *- ${a} :* ${b}`)
                    .join("\n");
                cap += "\n\n*– 乂 List - Episode*\n";
                cap += data.episode
                    .map((a, i) => `*${i + 1}.* ${a.title}\n> ${a.url}`)
                    .join("\n\n");
                m.reply({
                    image: {
                        url: data.metadata.thumbnail,
                    },
                    caption: cap,
                });
            } else {
                let data = await Scraper.sokuja.episode(text);
                let quality = Object.keys(data.downloads);
                let cap = "*– 乂 Sokuja - Episode*\n";
                cap += Object.entries(data.metadata)
                    .map(
                        ([a, b]) =>
                        `> *- ${a} :* ${typeof b === "object" ? b.join(", ") : b}`,
                    )
                    .join("\n");
                if (quality.length > 1) {
                    cap += "\n\n*– 乂 Download - Episode*\n";
                    for (let i of quality) {
                        cap += `> *- Download ${i}*\n`;
                        cap += Object.entries(data.downloads[i])
                            .map(([a, b]) => `> *- ${a.capitalize()} :* ${b}`)
                            .join("\n");
                        cap += "\n\n";
                    }
                } else {
                    cap += "\n\ntidak ada link download pada episode ini";
                }
                m.reply(cap);
                if (data.downloads["480p"].url) return m.reply({
                    video: {
                        url: data.downloads["480p"].url
                    }
                })
            }
        } else {
            let data = await Scraper.sokuja.search(text);
            if (data.length === 0) throw "> Anime tidak ditemukan";
            let cap = "*– 乂 Sokuja - Search*\n";
            cap += data
                .map((a) =>
                    Object.entries(a)
                    .map(([b, c]) => `> *- ${b.capitalize()} :* ${c}`)
                    .join("\n"),
                )
                .join("\n\n");
            m.reply(cap);
        }
    },
};
=======
    if (!text) throw cap;
    if (Func.isUrl(text) && /sokuja./.test(text)) {
      if (/anime\//.test(text)) {
        let data = await Scraper.sokuja.detail(text);
        let cap = `*– 乂 Sokuja - Detail*\n`;
        cap += Object.entries(data.metadata)
          .map(([a, b]) => `> *- ${a} :* ${b}`)
          .join("\n");
        cap += "\n\n*– 乂 List - Episode*\n";
        cap += data.episode
          .map((a, i) => `*${i + 1}.* ${a.title}\n> ${a.url}`)
          .join("\n\n");
        m.reply({
          image: {
            url: data.metadata.thumbnail,
          },
          caption: cap,
        });
      } else {
        let data = await Scraper.sokuja.episode(text);
        let quality = Object.keys(data.downloads);
        let cap = "*– 乂 Sokuja - Episode*\n";
        cap += Object.entries(data.metadata)
          .map(
            ([a, b]) =>
              `> *- ${a} :* ${typeof b === "object" ? b.join(", ") : b}`,
          )
          .join("\n");
        if (quality.length > 1) {
          cap += "\n\n*– 乂 Download - Episode*\n";
          for (let i of quality) {
            cap += `> *- Download ${i}*\n`;
            cap += Object.entries(data.downloads[i])
              .map(([a, b]) => `> *- ${a.capitalize()} :* ${b}`)
              .join("\n");
            cap += "\n\n";
          }
        } else {
          cap += "\n\ntidak ada link download pada episode ini";
        }
        m.reply(cap);
        if (data.downloads["480p"].url)
          return m.reply({
            video: {
              url: data.downloads["480p"].url,
            },
          });
      }
    } else {
      let data = await Scraper.sokuja.search(text);
      if (data.length === 0) throw "> Anime tidak ditemukan";
      let cap = "*– 乂 Sokuja - Search*\n";
      cap += data
        .map((a) =>
          Object.entries(a)
            .map(([b, c]) => `> *- ${b.capitalize()} :* ${c}`)
            .join("\n"),
        )
        .join("\n\n");
      m.reply(cap);
    }
  },
};
>>>>>>> a81e5ef (Major update 🎉)
