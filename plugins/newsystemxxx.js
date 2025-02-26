const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
      pattern: "system",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "🧬",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);



          // Status message to be sent


          let _0x2c3bd5 = `💙𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝑨𝒗𝒊𝒔𝒉𝒌𝒂_𝑿-𝑴𝑫 𝑺𝒚𝒔𝒕𝒆𝒎 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚

┏━━━━━━━━━━━➤◍◉┄•͙✧⃝•͙💚
├ .✦  ⏰ *𝐑𝐮𝐧𝐭𝐢𝐦𝐞*:-  ${runtime(process.uptime())}    
├ .✦  📟 *𝐑𝐚𝐦𝐮𝐬𝐚𝐠𝐞*:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ .✦  ⚙️ *𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦*:- ${os.hostname()}
├ .✦  👨‍💻 *𝐎𝐰𝐧𝐞𝐫*:- *Avishka_X* 
├ .✦  🧬 *𝐕𝐞𝐫𝐬𝐢𝐢𝐧*:- *5.0.0*
┗━━━━━━━━━━━━━━━━━➤◍◉➤💙
💙✩̣̣̣̣̣ͯ┄•͙✧⃝•͙💚  

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗-𝐌𝐃* `





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

      } catch (e) {
          console.error(e);
          reply(`Error: ${e.message}`);
      }
    });
