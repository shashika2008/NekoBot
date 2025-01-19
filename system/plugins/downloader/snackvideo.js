class Command {
    constructor() {
        this.command = "snackvideo"
        this.alias = []
        this.category = ["downloader"]
        this.settings = {
            limit: true
        }
        this.description = "Mencari/download video dari snackvideo !"
        this.loading = true
    }
    run = async (m, {
        sock,
        Func,
        Scraper,
        config,
        store,
        text
    }) => {
        if (!text) throw `*– 乂 Cara Penggunaan*\n
> Masukan query untuk mencari video
> masukan url dari snackvideo untuk mendownload 

*– 乂 Contoh - Penggunaan*
> snackvideo Anime 
> snackvideo https://www.snackvideo.com/@ALBAN_105/video/5221792395456439006`
        if (Func.isUrl(text)) {
            if (!/snackvideo.com/.test(text)) throw "> Masukan url dari SnackVideo !"
            let data = await Scraper.snackvideo.download(text);
            let caption = "*– 乂 SnackVideo - Downloader*\n"
            caption += Object.entries(data.metadata).map(([a, b]) => `> *- ${a.capitalize()} :* ${b}`).join("\n")

            sock.sendFile(m.cht, data.download, null, caption, m);
        } else {
            let data = await Scraper.snackvideo.search(text);
            if (data.length === 0) throw "> Video tidak ditemukan !"
            let caption = "*– 乂 SnackVideo - search*\n"
            caption += data.map((a) => `> *- Title :* ${a.title}\n> *- Uploaded :* ${a.uploaded}\n> *- Author :* ${a.author.name}\n> *- Url :* ${a.url}`).join("\n\n");
            m.reply(caption);
        }
    }
}

module.exports = new Command();