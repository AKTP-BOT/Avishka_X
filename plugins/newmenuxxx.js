const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let _0x2c3bd5 = `✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚 ℋ𝑒𝓁𝓁𝑜 ${pushname} •͙✧⃝•͙💚

Taxs
┏━「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ💚
┝*∘💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
│ .✦ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ .✦ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│ .✦ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│ .✦ ᴠᴇʀꜱɪᴏɴ : 1.0.0
┝*∘💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┗━━━━━━━━━➤◍◉➤

┏━━➤◍◉➤💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┝*∘₊✧──────✧₊∘*
├ .✦ 1  • 𝐎𝐰𝐧𝐞𝐫
├ .✦ 2  • 𝐂𝐨𝐧𝐯𝐞𝐫𝐭
├ .✦ 3  • 𝐀𝐢
├ .✦ 4  • 𝐒𝐞𝐚𝐫𝐜𝐡
├ .✦ 5  • 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝
├ .✦ 6  • 𝐌𝐚𝐢𝐧
├ .✦ 7  • 𝐆𝐫𝐨𝐮𝐩
├ .✦ 8  • 𝐅𝐮𝐧
├ .✦ 9  • 𝐌𝐨𝐯𝐢𝐞
├ .✦ 10 • 𝐎𝐭𝐡𝐞𝐫
├ .✦ 11 • 𝐍𝐞𝐰𝐬
├ .✦ 12 • 𝐓𝐨𝐨𝐥𝐬
├ .✦ 13 • 𝐋𝐨𝐠𝐨
├ .✦ 14 • 𝐁𝐮𝐠
├ .✦ 15 • -
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┏━━━━━━━━━━━➤◍◉➤
├┄•͙✧⃝•͙ All commands pannel💙💚
┗━━━━━━━━━━━━━━━━━➤◍◉➤

_💚Reply with the Number you want to select

> powered by Avishka_X-MD💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚 `;

                  // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x2c3bd5,
      'contextInfo': {
        'mentionedJid': [''],
        'groupMentions': [],
        'forwardingScore': 999,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363370611065764@newsletter',
          'newsletterName': "Avishka_X-MD",
          'serverMessageId': "76cb7f39"
        },
        'externalAdReply': {
          'title': "Avishka_X-MD",
          'body': 'Avishka_X-MD',
          'mediaType': 1,
          'sourceUrl': 'https://whatsapp.com/channel/0029Vb3CfgF9sBIAyRgWqv1k',
          'thumbnailUrl': "https://i.ibb.co/F4wSg1Z/894a0e96b73519d5.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': mek
    });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let test1 = `
                      ┏━━━━━━━━━━━➤◍◉➤
 🔒 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┝*∘₊✧──────✧₊∘*
┝ .✦ .𝐣𝐨𝐢𝐧
┝ .✦ .𝐫𝐞𝐬𝐭𝐚𝐫𝐭
┝ .✦ .𝐬𝐡𝐮𝐝𝐨𝐰𝐧
┝ .✦ .𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭
┝ .✦ .𝐬𝐞𝐭𝐩𝐩
┝ .✦ .𝐛𝐥𝐨𝐜𝐤
┝ .✦ .𝐮𝐧𝐛𝐥𝐨𝐜𝐤
┝ .✦ .𝐜𝐥𝐞𝐚𝐫𝐜𝐡𝐚𝐭
┝ .✦ .𝐉𝐢𝐝
┝ .✦ .𝐆𝐣𝐢𝐝
┝*∘₊✧─────✧₊∘*
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD 💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test1
            }, {
              'quoted': mek
            });
                        break;
                    case '2':               
                        let test2 = `  ┏━━━━━━━━━━━➤◍◉➤
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
 🔄 𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐭𝐭𝐬
├ .✦ .𝐪𝐦𝐚𝐤𝐞
├ .✦ .𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞
├ .✦ .𝐬𝐭𝐢𝐜𝐤𝐞𝐫
├ .✦ .𝐯𝐯
├ .✦ .𝐜𝐢𝐫𝐜𝐥𝐞
├ .✦ .𝐜𝐫𝐨𝐩
├ .✦ .𝐫𝐨𝐮𝐧𝐝
├ .✦ .𝐭𝐨𝐚𝐮𝐝𝐢𝐨
├ .✦ .𝐜𝐮𝐫𝐫𝐞𝐜𝐲
├ .✦ .𝐢𝐦𝐠2𝐮𝐫𝐥
├ .✦ .𝐭𝐫𝐭
├ .✦ .𝐭𝐨𝐢𝐦𝐠
├ .✦ .𝐬
├ .✦ .𝐭𝐨𝐦𝐩3
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test2
            }, {
              'quoted': mek
            });
                        break;
                    case '3':               
                        let test3 = `  ┏━━━━━━━━━━━➤◍◉➤
 👾 𝐀𝐢 𝐌𝐞𝐧𝐮
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
*∘₊✧──────✧₊∘*
├ .✦ .𝐚𝐢
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test3
            }, {
              'quoted': mek
            });
                        break;
                    case '4':             
                        let test4 = `╭  ┏━━━━━━━━━━━➤◍◉➤
 🔍 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐥𝐲𝐫𝐮𝐜
├ .✦ .𝐲𝐭𝐬
├ .✦ .𝐫𝐞𝐩𝐨
├ .✦ .𝐰𝐞𝐚𝐭𝐡𝐞𝐫
├ .✦ .𝐢𝐦𝐠
├ .✦ .𝐭𝐡𝐫𝐞𝐚𝐝𝐬
├ .✦ .𝐟𝐦𝐦𝐨𝐝𝐬
├ .✦ .𝐥𝐲𝐫𝐢𝐜𝐬
├ .✦ .𝐡𝐦𝐨𝐝𝐬
├ .✦ .𝐝𝐦𝐨𝐝
├ .✦ .𝐢𝐩
├ .✦ .𝐠𝐨𝐨𝐠𝐥𝐞
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test4
            }, {
              'quoted': mek
            });
                        break;
                    case '5':               
                        let test5 = `  ┏━━━━━━━━━━━➤◍◉➤
 📥 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐬𝐨𝐧𝐠
├ .✦ .𝐯𝐢𝐝𝐞𝐨
├ .✦ .𝐟𝐛
├ .✦ .𝐭𝐭
├ .✦ .𝐠𝐝𝐫𝐢𝐯𝐞
├ .✦ .𝐚𝐩𝐤
├ .✦ .𝐢𝐝
├ .✦ .𝐦𝐟𝐢𝐫𝐞
├ .✦ .𝐬𝐜𝐥𝐨𝐮𝐧𝐝
├ .✦ .𝐱𝐯𝐢𝐝𝐞𝐨
├ .✦ .𝐦𝐨𝐝𝐚𝐩𝐤
├ .✦ .𝐝𝐦𝐨𝐝
├ .✦ .𝐟𝐦𝐦𝐨𝐝𝐬
├ .✦ .240𝐩
├ .✦ .480𝐩
├ .✦ .720𝐩
├ .✦ .1080𝐩
├ .✦ .𝐲𝐭𝐝𝐨𝐜𝐬
├ .✦ .𝐲𝐭𝐦𝐩3
├ .✦ .𝐲𝐭𝐦𝐩4
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test5
            }, {
              'quoted': mek
            });
                        break;
                    case '6':               
                        let test6 = `  ┏━━━━━━━━━━━➤◍◉➤
 🔧 𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐚𝐥𝐢𝐯𝐞
├ .✦ .𝐨𝐰𝐧𝐞𝐫
├ .✦ .𝐬𝐮𝐩𝐩𝐨𝐫𝐭
├ .✦ .𝐚𝐛𝐨𝐮𝐭
├ .✦ .𝐬𝐲𝐬𝐭𝐞𝐦
├ .✦ .𝐩𝐢𝐧𝐠
├ .✦ .𝐚𝐥𝐥𝐦𝐞𝐧𝐮
├ .✦ .𝐦𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚 `;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test6
            }, {
              'quoted': mek
            });
                        break;
                    case '7':               
                        let test7 = `  ┏━━━━━━━━━━━➤◍◉➤
 👥 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐦𝐮𝐭𝐞
├ .✦ .𝐮𝐧𝐦𝐮𝐭𝐞
├ .✦ .𝐩𝐫𝐨𝐦𝐨𝐭𝐞
├ .✦ .𝐝𝐞𝐦𝐨𝐭𝐞
├ .✦ .𝐝𝐞𝐥
├ .✦ .𝐚𝐝𝐝
├ .✦ .𝐬𝐞𝐭𝐠𝐨𝐨𝐝𝐛𝐲𝐞
├ .✦ .𝐬𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞
├ .✦ .𝐚𝐝𝐦𝐢𝐧𝐬
├ .✦ .𝐠𝐫𝐨𝐮𝐩𝐝𝐞𝐬𝐜
├ .✦ .𝐠𝐫𝐨𝐮𝐩𝐢𝐧𝐟𝐨
├ .✦ .𝐠𝐫𝐨𝐮𝐩𝐥𝐢𝐦𝐤
├ .✦ .𝐠𝐧𝐚𝐦𝐞
├ .✦ .𝐬𝐞𝐭𝐬𝐮𝐛𝐣𝐞𝐜𝐭
├ .✦ .𝐭𝐚𝐠𝐚𝐥𝐥
├ .✦ .𝐤𝐢𝐜𝐤
├ .✦ .𝐮𝐧𝐛𝐥𝐨𝐜𝐤
├ .✦ .𝐛𝐥𝐨𝐜𝐤
├ .✦ .𝐠𝐞𝐭𝐩𝐩
├ .✦ .𝐚𝐝𝐦𝐢𝐧𝐬
├ .✦ .𝐡𝐢𝐝𝐞𝐭𝐚𝐠
├ .✦ .𝐨𝐩𝐞𝐧𝐭𝐢𝐦𝐞
├ .✦ .𝐜𝐥𝐨𝐬𝐞𝐭𝐢𝐦𝐞
├ .✦ .𝐨𝐧𝐧𝐞𝐰𝐬
├ .✦ .𝐨𝐟𝐟𝐧𝐞𝐰𝐬
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD 💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test7
            }, {
              'quoted': mek
            });
                       break;
                    case '8':               
                        let test8 = `  ┏━━━━━━━━━━━➤◍◉➤
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
 🎉 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐚𝐧𝐢𝐦𝐞𝐠𝐢𝐫𝐥
├ .✦ .𝐚𝐧𝐢𝐦𝐞𝐠𝐢𝐫𝐥
├ .✦ .𝐚𝐦𝐢𝐧𝐞𝐠𝐢𝐫𝐥12
├ .✦ .𝐚𝐦𝐢𝐧𝐞𝐠𝐢𝐫𝐥13
├ .✦ .𝐜𝐡𝐚𝐫𝐠𝐞
├ .✦ .𝐡𝐚𝐜𝐤
├ .✦ .𝐢𝐧𝐬𝐮𝐥𝐭
├ .✦ .𝐣𝐨𝐤𝐞
├ .✦ .𝐪𝐮𝐨𝐭𝐞
├ .✦ .𝐥𝐨𝐥𝐢
├ .✦ .𝐰𝐚𝐢𝐟𝐮
├ .✦ .𝐚𝐰𝐨𝐨
├ .✦ .𝐧𝐞𝐤𝐨
├ .✦ .𝐦𝐚𝐢𝐝
├ .✦ .𝐦𝐞𝐠𝐮𝐦𝐢𝐧
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚 `;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test8
            }, {
              'quoted': mek
            });

                        break;
                    case '9':               
                        let test9 = `  ┏━━━━━━━━━━━➤◍◉➤
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
 🎬 𝐌𝐨𝐯𝐢𝐞 𝐌𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐦𝐨𝐯𝐢𝐞
├ .✦ .𝐠𝐝𝐦𝐨𝐯𝐢𝐞
├ .✦ .𝐬𝐢𝐧𝐡𝐚𝐥𝐚𝐬𝐮𝐛
├ .✦ .𝐬𝐢𝐧𝐡𝐚𝐥𝐚𝐬𝐮𝐛1
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test9
            }, {
              'quoted': mek
            });

                    break;
                    case '10':               
                        let test10 = `  ┏━━━━━━━━━━━➤◍◉➤
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
 ⚙️ 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐚𝐧𝐢𝐦𝐞𝐠𝐢𝐫𝐥
├ .✦ .𝐚𝐧𝐢𝐦𝐞𝐠𝐢𝐫𝐥
├ .✦ .𝐚𝐦𝐢𝐧𝐞𝐠𝐢𝐫𝐥12
├ .✦ .𝐚𝐦𝐢𝐧𝐞𝐠𝐢𝐫𝐥13
├ .✦ .𝐥𝐨𝐥𝐢
├ .✦ .𝐰𝐚𝐢𝐟𝐮
├ .✦ .𝐚𝐰𝐨𝐨
├ .✦ .𝐧𝐞𝐤𝐨
├ .✦ .𝐦𝐚𝐢𝐝
├ .✦ .𝐦𝐞𝐠𝐮𝐦𝐢𝐧
├ .✦ .𝐝𝐞𝐟𝐢𝐧𝐞
├ .✦ .𝐠𝐩𝐚𝐬𝐬
├ .✦ .𝐰𝐢𝐤𝐢
├ .✦ .𝐢𝐩
├ .✦ .𝐞𝐧𝐡𝐚𝐜𝐞
├ .✦ .𝐬𝐞𝐞 𝐦𝐞𝐧𝐮 𝐟𝐨𝐫 𝐨𝐭𝐡𝐞𝐫𝐬
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚 `;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test10
            }, {
              'quoted': mek
            });

                    break;
                    case '11':               
                        let test11 = `  ┏━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
 📰 𝐍𝐞𝐰𝐬 𝐌𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐡𝐢𝐭𝐮𝐧𝐞𝐰𝐬
├ .✦ .𝐬𝐢𝐫𝐚𝐬𝐚𝐧𝐞𝐰𝐬
├ .✦ .𝐝𝐞𝐫𝐚𝐧𝐚𝐧𝐞𝐰𝐬
├ .✦ .𝐥𝐚𝐧𝐤𝐚𝐝𝐞𝐞𝐩𝐚𝐧𝐞𝐰𝐬
├ .✦ .𝐛𝐛𝐜𝐧𝐞𝐰𝐬
├ .✦ .𝐧𝐞𝐰𝐬
├ .✦ .𝐰𝐚𝐛𝐞𝐭𝐚
├ .✦ .𝐭𝐞𝐜𝐡𝐧𝐞𝐰𝐬
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚 `;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test11
            }, {
              'quoted': mek
            });

                    break;
                    case '12':               
                        let test12 = `  ┏━━━━━━━━━━━➤◍◉➤
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
 🛠️ 𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐛𝐚𝐬𝐬
├ .✦ .𝐛𝐥𝐨𝐰𝐧
├ .✦ .𝐝𝐞𝐩𝐩
├ .✦ .𝐟𝐚𝐬𝐭
├ .✦ .𝐫𝐞𝐬𝐞𝐫𝐯𝐞2
├ .✦ .𝐜𝐨𝐥𝐨𝐮𝐫𝐢𝐳𝐞
├ .✦ .𝐞𝐧𝐡𝐚𝐜𝐞
├ .✦ .𝐭𝐨𝐚𝐧𝐢𝐦𝐞
├ .✦ .𝐢𝐩
├ .✦ .𝐭𝐞𝐱𝐭𝐩𝐫𝐨
├ .✦ .𝐭𝐞𝐱𝐭𝐩𝐫𝐨2
├ .✦ .𝐭𝐞𝐱𝐭𝐩𝐫𝐨3
├ .✦ .𝐛𝐠𝐫
├ .✦ .𝐫𝐛𝐠𝐝
├ .✦ .𝐫𝐛𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚 `;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test12
            }, {
              'quoted': mek
            });

                    break;
                    case '13':               
                        let test13 = `  ┏━━━━━━━━━━━➤◍◉➤
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
 🌌 𝐋𝐨𝐠𝐨 𝐌𝐞𝐧𝐮
┝*∘₊✧──────✧₊∘*
├ .✦ .𝐥𝐨𝐠𝐨𝐧𝐞𝐰
├ .✦ .𝐥𝐨𝐠𝐨2
├ .✦ .𝐛𝐚𝐧𝐧𝐞𝐫
├ .✦ .𝐛𝐚𝐧𝐧𝐞𝐫2
├ .✦ .𝐛𝐚𝐧𝐧𝐞𝐫3
├ .✦ .𝐛𝐚𝐧𝐧𝐞𝐫4
├ .✦ .𝐛𝐚𝐧𝐧𝐞𝐫5
┗━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚 `;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test13
            }, {
              'quoted': mek
            });
                        break;
                        case '14':               
                        let test14 = `  ┏━━━━━━━━━━━➤◍◉➤
 👾 *𝐁𝐮𝐠 𝐦𝐞𝐧𝐮*
 💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
*∘₊✧──────✧₊∘*
├ .✦ .𝐛𝐮𝐠
├ .✦ .𝐥𝐚𝐠𝐛𝐮𝐬
├ .✦ .𝐜𝐫𝐚𝐬𝐡𝐛𝐮𝐠
├ .✦ .𝐚𝐧𝐭𝐢𝐛𝐮𝐠
┝*∘₊✧──────✧₊∘*
┗━━━━━━━━━━━━━━━━━➤◍◉➤
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚
> powered by Avishka_X-MD💚`;
await conn.sendMessage(from, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': test14
            }, {
              'quoted': mek
            });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
