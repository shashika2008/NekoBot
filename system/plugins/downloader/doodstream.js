module.exports = {
<<<<<<< HEAD
    command: "doodstream",
    alias: ["dood", "doods"],
    category: ["downloader"],
    description: "Download dan upload video dari Doodstream dengan mudah",
    loading: true,
    async run(m, {
        sock,
        Func,
        Uploader,
        text,
        Scraper
    }) {
        if (!text)
            throw `*– 乂 **Panduan Penggunaan Fitur**:*\n
=======
  command: "doodstream",
  alias: ["dood", "doods"],
  category: ["downloader"],
  description: "Download dan upload video dari Doodstream dengan mudah",
  loading: true,
  async run(m, { sock, Func, Uploader, text, Scraper }) {
    if (!text)
      throw `*– 乂 **Panduan Penggunaan Fitur**:*\n
>>>>>>> a81e5ef (Major update 🎉)
> 📥 *Gunakan* \`--upload\` *untuk mengupload video ke Doodstream*\n
> 🔗 *Masukkan link Doodstream* (misalnya: https://dood.li/xxx) *untuk mendownload video*\n

*– 乂 **Contoh Penggunaan**:*\n
> ➡️ *${m.prefix + m.command} --upload*\n
> ➡️ *${m.prefix + m.command} https://dood.li/xxx*\n`;

<<<<<<< HEAD
        if (m.text.includes("--upload")) {
            let q = m.quoted ? m.quoted : m;
            if (!/video/.test(q.msg.mimetype) || !q.isMedia)
                throw `> 📩 *Silahkan reply/kirim video dengan caption* ${m.prefix + m.command} ${text}`;
            let buffer = await q.download();
            let hasil = await Uploader.doods(buffer);
            let cap = "*– 乂 **Doodstream - Uploader**:*\n";
            cap += `> 📦 *Ukuran Video*: ${Func.formatSize(buffer.length)}\n`;
            cap += `> 🔗 *Link Video*: ${hasil.result[0].protected_embed}\n`;
            cap += `> 📤 *Silahkan klik link di atas untuk menonton atau mendownload video*`;
            m.reply(cap);
        } else {
            if (!Func.isUrl(text) || !/dood.(li|la|com|ws)/.test(text))
                throw "> ❌ *Masukkan link Doodstream yang valid*";

            let data = await Scraper.doodstream(text);
            if (!data.download) return m.reply(Func.jsonFormat(data));
            let size = await Func.getSize(data.download());
            let limit = Func.sizeLimit(size, db.list().settings.max_upload);
            if (limit.oversize)
                throw `> 🚫 *Ukuran file terlalu besar* *( ${size} )*, *Upgrade ke Premium* untuk mengunduh video hingga ukuran *1GB*!`;

            let cap = "*– 乂 **Doodstream - Downloader**:*\n";
            cap += `> 🎥 *Judul Video*: ${data.title}\n`;
            cap += `> 👁️‍🗨️ *Jumlah Penonton*: ${data.views}\n`;
            cap += `> ⏱️ *Durasi Video*: ${data.duration}\n`;
            cap += `> 📝 *Deskripsi*: ${data.description || "Tidak tersedia"}\n`;
            cap += `> 🔗 *Link Download*: ${data.download.url}\n`;

            m.reply({
                video: {
                    url: data.download.url,
                },
                caption: cap,
            });
        }
    },
=======
    if (m.text.includes("--upload")) {
      let q = m.quoted ? m.quoted : m;
      if (!/video/.test(q.msg.mimetype) || !q.isMedia)
        throw `> 📩 *Silahkan reply/kirim video dengan caption* ${m.prefix + m.command} ${text}`;
      let buffer = await q.download();
      let hasil = await Uploader.doods(buffer);
      let cap = "*– 乂 **Doodstream - Uploader**:*\n";
      cap += `> 📦 *Ukuran Video*: ${Func.formatSize(buffer.length)}\n`;
      cap += `> 🔗 *Link Video*: ${hasil.result[0].protected_embed}\n`;
      cap += `> 📤 *Silahkan klik link di atas untuk menonton atau mendownload video*`;
      m.reply(cap);
    } else {
      if (!Func.isUrl(text) || !/dood.(li|la|com|ws)/.test(text))
        throw "> ❌ *Masukkan link Doodstream yang valid*";

      let data = await Scraper.doodstream(text);
      if (!data.download) return m.reply(Func.jsonFormat(data));
      let size = await Func.getSize(data.download());
      let limit = Func.sizeLimit(size, db.list().settings.max_upload);
      if (limit.oversize)
        throw `> 🚫 *Ukuran file terlalu besar* *( ${size} )*, *Upgrade ke Premium* untuk mengunduh video hingga ukuran *1GB*!`;

      let cap = "*– 乂 **Doodstream - Downloader**:*\n";
      cap += `> 🎥 *Judul Video*: ${data.title}\n`;
      cap += `> 👁️‍🗨️ *Jumlah Penonton*: ${data.views}\n`;
      cap += `> ⏱️ *Durasi Video*: ${data.duration}\n`;
      cap += `> 📝 *Deskripsi*: ${data.description || "Tidak tersedia"}\n`;
      cap += `> 🔗 *Link Download*: ${data.download.url}\n`;

      m.reply({
        video: {
          url: data.download.url,
        },
        caption: cap,
      });
    }
  },
>>>>>>> a81e5ef (Major update 🎉)
};
