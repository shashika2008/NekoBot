module.exports = {
<<<<<<< HEAD
    command: "setppgroup",
    alias: ["setppgc"],
    category: ["group"],
    settings: {
        group: true,
        admin: true,
        botAdmin: true,
    },
    description: "📸 Mengubah foto profil grup",
    async run(m, { sock }) {
        let q = m.quoted ? m.quoted : m;
        if (!q.isMedia) throw "⚠️ *Silakan kirim atau reply foto yang ingin dijadikan foto profil grup!*";

        let buffer = await q.download();
        await sock.updateProfilePicture(m.cht, buffer)
            .then(() => m.reply("> ✅ *Foto profil grup berhasil diperbarui!*"));
    },
=======
  command: "setppgroup",
  alias: ["setppgc"],
  category: ["group"],
  settings: {
    group: true,
    admin: true,
    botAdmin: true,
  },
  description: "📸 Mengubah foto profil grup",
  async run(m, { sock }) {
    let q = m.quoted ? m.quoted : m;
    if (!q.isMedia)
      throw "⚠️ *Silakan kirim atau reply foto yang ingin dijadikan foto profil grup!*";

    let buffer = await q.download();
    await sock
      .updateProfilePicture(m.cht, buffer)
      .then(() => m.reply("> ✅ *Foto profil grup berhasil diperbarui!*"));
  },
>>>>>>> a81e5ef (Major update 🎉)
};
