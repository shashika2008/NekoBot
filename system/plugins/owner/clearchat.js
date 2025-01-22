class Command {
<<<<<<< HEAD
    constructor() {
        this.command = "clearchat";
        this.alias = [];
        this.category = ["owner"];
        this.settings = { owner: true };
        this.description = "Membersihkan semua pesan di grup";
        this.loading = true;
    }

    run = async (m, { sock, store }) => {
        const groupIds = Object.keys(store.groupMetadata);
        if (groupIds.length === 0) {
            throw `*❌ Tidak ada grup ditemukan untuk membersihkan pesan.*`;
        }
        let successCount = 0;
        for (let id of groupIds) {
            try {
                await sock.clearMessage(id, m.key, m.timestamps);
                successCount++;
            } catch (err) {
                console.error(`❌ Gagal membersihkan chat grup ${id}:`, err.message);
            }
        }

        m.reply(
            `*╭──[ 乂 CLEAR CHAT - GRUP ]*
᎒⊸ Total Grup: *${groupIds.length}*
᎒⊸ Berhasil Dibersihkan: *${successCount}*
*✔️ Semua pesan di grup berhasil dibersihkan!*
*╰────────────•*`
        );
    };
=======
  constructor() {
    this.command = "clearchat";
    this.alias = [];
    this.category = ["owner"];
    this.settings = { owner: true };
    this.description = "Membersihkan semua pesan di grup";
    this.loading = true;
  }

  run = async (m, { sock, store }) => {
    const groupIds = Object.keys(store.groupMetadata);
    if (groupIds.length === 0) {
      throw `*❌ Tidak ada grup ditemukan untuk membersihkan pesan.*`;
    }
    let successCount = 0;
    for (let id of groupIds) {
      try {
        await sock.clearMessage(id, m.key, m.timestamps);
        successCount++;
      } catch (err) {
        console.error(`❌ Gagal membersihkan chat grup ${id}:`, err.message);
      }
    }

    m.reply(
      `*╭──[ 乂 CLEAR CHAT - GRUP ]*
᎒⊸ Total Grup: *${groupIds.length}*
᎒⊸ Berhasil Dibersihkan: *${successCount}*
*✔️ Semua pesan di grup berhasil dibersihkan!*
*╰────────────•*`,
    );
  };
>>>>>>> a81e5ef (Major update 🎉)
}

module.exports = new Command();
