class Command {
    constructor() {
        this.command = "soundcloud";
        this.alias = ["sound", "scloud"];
        this.category = ["downloader"];
        this.settings = {
            limit: true,
        };
        this.description = "🎵 Mencari dan mengunduh musik dari SoundCloud!";
        this.loading = true;
    }
    run = async (m, {
        sock,
        Func,
        Scraper,
        config,
        store,
        text
    }) => {
<<<<<<< HEAD
        if (!text) throw `*– 乂 Cara Penggunaan 🎶*\n\n` +
            `> Masukkan kata kunci untuk mencari musik\n` +
            `> Masukkan URL SoundCloud untuk mengunduh musik\n\n` +
            `*– 乂 Contoh Penggunaan 📋*\n` +
            `> ${m.prefix}soundcloud Imagine Dragons\n` +
            `> ${m.prefix}soundcloud https://soundcloud.com/artist-name/track-name`;

        if (Func.isUrl(text)) {
            if (!/soundcloud.com/.test(text)) throw `> *❌ Masukkan URL SoundCloud yang valid!*`;
            
=======
        if (!text)
            throw (
                `*– 乂 Cara Penggunaan 🎶*\n\n` +
                `> Masukkan kata kunci untuk mencari musik\n` +
                `> Masukkan URL SoundCloud untuk mengunduh musik\n\n` +
                `*– 乂 Contoh Penggunaan 📋*\n` +
                `> ${m.prefix}soundcloud Imagine Dragons\n` +
                `> ${m.prefix}soundcloud https://soundcloud.com/artist-name/track-name`
            );

        if (Func.isUrl(text)) {
            if (!/soundcloud.com/.test(text))
                throw `> *❌ Masukkan URL SoundCloud yang valid!*`;

>>>>>>> a81e5ef (Major update 🎉)
            let data = await Scraper.soundcloud.download(text);
            if (!data.download) throw Func.jsonFormat(data);

            let cap = `*– 乂 SoundCloud - Downloader 🎵*\n\n`;
            cap += Object.entries(data)
                .map(([a, b]) => `> *🎧 ${a.capitalize()} :* ${b}`)
                .join("\n");

<<<<<<< HEAD
            m.reply(cap).then(() => {
               m.reply({
                  audio: {
                     url: data.download
                  },
                 mimetype: "audio/mpeg"
               })
=======
            m.reply(cap)
            await sock.sendMessage(m.cht, {
                audio: await Func.fetchBuffer(data.download),
                mimetype: "audio/mpeg",
            }, {
                quoted: m
>>>>>>> a81e5ef (Major update 🎉)
            });
        } else {
            let data = await Scraper.soundcloud.search(text);
            if (data.length === 0) throw `> *❌ Musik tidak ditemukan!*`;

<<<<<<< HEAD
            let cap = `*– 乂 SoundCloud - Pencarian 🔎*\n\n` +
                `> Pilih lagu yang ingin kamu unduh!\n\n`;
            cap += data.map(i => 
                `> *🎵 Judul :* ${i.title}\n` +
                `> *🔗 URL :* ${i.url}`
            ).join("\n\n");
=======
            let cap =
                `*– 乂 SoundCloud - Pencarian 🔎*\n\n` +
                `> Pilih lagu yang ingin kamu unduh!\n\n`;
            cap += data
                .map((i) => `> *🎵 Judul :* ${i.title}\n` + `> *🔗 URL :* ${i.url}`)
                .join("\n\n");
>>>>>>> a81e5ef (Major update 🎉)

            m.reply(cap);
        }
    };
}

<<<<<<< HEAD
module.exports = new Command();
=======
module.exports = new Command();
>>>>>>> a81e5ef (Major update 🎉)
