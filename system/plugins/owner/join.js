module.exports = {
<<<<<<< HEAD
    command: "join",
    alias: [],
    category: ["owner"],
    settings: {
        owner: true,
    },
    description: "Memasukkan bot ke dalam grup menggunakan tautan undangan.",
    async run(m, { sock, text, Func }) {
        const errorMsg = `╭──[ 乂 Invalid - Link ]\n᎒⊸ Masukkan tautan grup yang valid!\n╰────────────•`;p
        if (!text || !Func.isUrl(text) || !/chat\.whatsapp\.com\/\S+/i.test(text)) {
            throw errorMsg;
        }
        const groupId = text.split("chat.whatsapp.com/")[1];
        if (!groupId) throw errorMsg;

        try {
            const result = await sock.groupAcceptInvite(groupId);
            const successMsg = `╭──[ 乂 Success - Join ]\n᎒⊸ Bot berhasil bergabung ke dalam grup!\n╰────────────•`;
            const pendingMsg = `╭──[ 乂 Pending - Request ]\n᎒⊸ Permintaan bergabung sedang diproses oleh admin grup.\n╰────────────•`;

            m.reply(result ? successMsg : pendingMsg);
        } catch (error) {
            const errorMsg = `╭──[ 乂 Error - Join ]\n᎒⊸ Terjadi kesalahan saat mencoba bergabung:\n${error.message}\n╰────────────•`;
            m.reply(errorMsg);
        }
    },
=======
  command: "join",
  alias: [],
  category: ["owner"],
  settings: {
    owner: true,
  },
  description: "Memasukkan bot ke dalam grup menggunakan tautan undangan.",
  async run(m, { sock, text, Func }) {
    const errorMsg = `╭──[ 乂 Invalid - Link ]\n᎒⊸ Masukkan tautan grup yang valid!\n╰────────────•`;
    p;
    if (!text || !Func.isUrl(text) || !/chat\.whatsapp\.com\/\S+/i.test(text)) {
      throw errorMsg;
    }
    const groupId = text.split("chat.whatsapp.com/")[1];
    if (!groupId) throw errorMsg;

    try {
      const result = await sock.groupAcceptInvite(groupId);
      const successMsg = `╭──[ 乂 Success - Join ]\n᎒⊸ Bot berhasil bergabung ke dalam grup!\n╰────────────•`;
      const pendingMsg = `╭──[ 乂 Pending - Request ]\n᎒⊸ Permintaan bergabung sedang diproses oleh admin grup.\n╰────────────•`;

      m.reply(result ? successMsg : pendingMsg);
    } catch (error) {
      const errorMsg = `╭──[ 乂 Error - Join ]\n᎒⊸ Terjadi kesalahan saat mencoba bergabung:\n${error.message}\n╰────────────•`;
      m.reply(errorMsg);
    }
  },
>>>>>>> a81e5ef (Major update 🎉)
};
