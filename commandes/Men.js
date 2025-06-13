const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment-timezone');
const { pickRandom } = require('./function'); // Ensure this is implemented

/**
 * Menu display function for WhatsApp bot
 * @param {object} client - Should have sendButtonMsg & profilePictureUrl methods
 * @param {number|string} type - Message type ('buttonMessage', 'listMessage', etc.)
 * @param {object} m - Message object (should have .chat, .pushName, .sender)
 * @param {string} prefix - Command prefix (e.g., '!')
 * @param {string} setv - Symbol for menu lines (e.g., '•')
 * @param {object} db - Database object with .hit and .set
 * @param {object} options - { isVip, isPremium, botNumber }
 * @param {object} config - { botname, owner, naze, fake, my, author, packname }
 */
async function setTemplateMenu(client, type, m, prefix, setv, db, options = {}, config = {}) {
    // Config destructuring with fallbacks
    const {
        botname = 'CHARLESKE XMD',
        owner = ['254759626063'],
        naze = { public: true },
        fake = { anonim: '', docs: '', listfakedocs: ['application/pdf'] },
        my = { ch: '', gh: '' },
        author = 'charleskenya1',
        packname = 'charleskenya1'
    } = config;

    // Time and greeting
    const now = moment.tz('Africa/Nairobi');
    const day = now.locale('en').format('dddd');
    const date = now.locale('en').format('DD/MM/YYYY');
    const time = now.locale('en').format('HH:mm:ss');
    const greeting = time < '05:00:00' ? 'Good Morning 🌉'
        : time < '11:00:00' ? 'Good Morning 🌄'
        : time < '15:00:00' ? 'Good Afternoon 🏙'
        : time < '18:00:00' ? 'Good Evening 🌅'
        : time < '19:00:00' ? 'Good Evening 🌃'
        : time < '23:59:00' ? 'Good Night 🌌'
        : 'Good Night 🌌';

    // Top commands
    let topCommands = [];
    if (db && db.hit) {
        topCommands = Object.entries(db.hit)
            .sort((a, b) => b[1] - a[1])
            .filter(([command]) => command !== 'totalcmd' && command !== 'todaycmd')
            .slice(0, 5);
    }

    let text = `╭──❍「 *${botname} MENU* 」❍\n`;
    if (topCommands && topCommands.length >= 5) {
        topCommands.forEach(([command, hit]) => {
            text += `│${setv} ${prefix}${command}: ${hit} hits\n`;
        });
        text += '╰──────❍';
    } else {
        text += `│${setv} ${prefix}ai
│${setv} ${prefix}brat
│${setv} ${prefix}tiktok
│${setv} ${prefix}checkmate 
│${setv} ${prefix}arrangewords
╰──────❍`;
    }

    // Get pushName safely
    const pushName = m.pushName || (m.sender && m.sender.split('@')[0]) || 'User';

    // Menu rendering
    try {
        if (type === 1 || type === 'buttonMessage') {
            await client.sendButtonMsg(m.chat, {
                text: `Hello @${m.sender.split('@')[0]}\n${text}`,
                footer: greeting,
                mentions: [m.sender],
                contextInfo: {
                    forwardingScore: 10,
                    isForwarded: true,
                },
                buttons: [
                    { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'All Menu' }, type: 1 },
                    { buttonId: `${prefix}sc`, buttonText: { displayText: 'SC' }, type: 1 }
                ]
            }, { quoted: m });
        } else if (type === 2 || type === 'listMessage') {
            await client.sendButtonMsg(m.chat, {
                text: `Hello @${m.sender.split('@')[0]}\n${text}`,
                footer: greeting,
                mentions: [m.sender],
                contextInfo: {
                    forwardingScore: 10,
                    isForwarded: true,
                },
                buttons: [
                    { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'All Menu' }, type: 1 },
                    { buttonId: `${prefix}sc`, buttonText: { displayText: 'SC' }, type: 1 },
                    {
                        buttonId: 'list_button',
                        buttonText: { displayText: 'List' },
                        nativeFlowInfo: {
                            name: 'single_select',
                            paramsJson: JSON.stringify({
                                title: 'List Menu',
                                sections: [{
                                    title: 'List Menu',
                                    rows: [
                                        { title: 'All Menu', id: `${prefix}allmenu` },
                                        { title: 'Bot Menu', id: `${prefix}botmenu` },
                                        { title: 'Group Menu', id: `${prefix}groupmenu` },
                                        { title: 'Search Menu', id: `${prefix}searchmenu` },
                                        { title: 'Download Menu', id: `${prefix}downloadmenu` },
                                        { title: 'Quotes Menu', id: `${prefix}quotesmenu` },
                                        { title: 'Tools Menu', id: `${prefix}toolsmenu` },
                                        { title: 'AI Menu', id: `${prefix}aimenu` },
                                        { title: 'Stalker Menu', id: `${prefix}stalkermenu` },
                                        { title: 'Random Menu', id: `${prefix}randommenu` },
                                        { title: 'Anime Menu', id: `${prefix}animemenu` },
                                        { title: 'Game Menu', id: `${prefix}gamemenu` },
                                        { title: 'Fun Menu', id: `${prefix}funmenu` },
                                        { title: 'Owner Menu', id: `${prefix}ownermenu` }
                                    ]
                                }]
                            })
                        },
                        type: 2
                    }
                ]
            }, { quoted: m });
        } else if (type === 3 || type === 'documentMessage') {
            let profile;
            try {
                profile = await client.profilePictureUrl(m.sender, 'image');
            } catch {
                profile = fake.anonim;
            }
            const menuInfo = `
╭──❍「 *USER INFO* 」❍
├ *Name* : ${pushName}
├ *ID* : @${m.sender.split('@')[0]}
├ *User* : ${options.isVip ? 'VIP' : options.isPremium ? 'PREMIUM' : 'FREE'}
╰─┬────❍
╭─┴─❍「 *BOT INFO FOR ${botname}* 」❍
├ *Bot Name* : ${botname}
├ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
├ *Owner* : @${owner[0]}
├ *Mode* : ${naze.public ? 'Public' : 'Self'}
├ *Prefix* : ${db.set?.[options.botNumber]?.multiprefix ? '「 MULTI-PREFIX 」' : ' *' + prefix + '*'}
╰─┬────❍\n`;

            await m.reply({
                document: fake.docs,
                fileName: greeting,
                mimetype: pickRandom(fake.listfakedocs),
                fileLength: '100000000000000',
                pageCount: '999',
                caption: menuInfo + text,
                contextInfo: {
                    mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                    forwardingScore: 10,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: my.ch,
                        serverMessageId: null,
                        newsletterName: '120363351653122969@newsletter'
                    },
                    externalAdReply: {
                        title: author,
                        body: packname,
                        showAdAttribution: true,
                        thumbnailUrl: profile,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        mediaUrl: my.gh,
                        sourceUrl: my.gh,
                    }
                }
            });
        } else if (type === 4 || type === 'videoMessage') {
            // Optional: Add video menu logic here
        } else {
            await m.reply(`${greeting} @${m.sender.split('@')[0]}\nPlease use ${prefix}allmenu to see all available menus.`);
        }
    } catch (e) {
        console.log(chalk.red('Menu error:'), e);
        await m.reply('An error occurred while displaying the menu.');
    }
}

module.exports = setTemplateMenu;

// Hot reload system (optional)
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});
