class Command {
    constructor() {
        this.command = "removebg"
        this.alias = ["rembg", "hapuslatar"]
        this.category = ["tools"]
        this.settings = {
            limit: true
        }
        this.description = "Menghapus background dari Photo"
        this.loading = true
    }
    run = async (m, {
        sock,
        Func,
        Scraper,
        config,
        store
    }) => {
        let q = m.quoted ? m.quoted : m
        if (!/image/.test(q.msg.mimetype)) throw "> Kirim atau balas photo yang ingin dihapus latarnya"
        let buffer = await q.download();
        let data = await Scraper.removebg(buffer);
        let caption = "*– 乂 Remove - Background*\n"
        caption += `> *- Ukuran :* ${Func.formatSize(buffer.length)}`
        m.reply({
            image: {
                url: data
            },
            caption
        });
    }
}

module.exports = new Command();