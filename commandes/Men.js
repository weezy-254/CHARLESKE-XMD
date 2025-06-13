const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment-timezone');
const { pickRandom } = require('./function');

async function setTemplateMenu(kingvon, type, m, prefix, setv, db, options = {}) {
	const day = moment.tz('Africa/Nairobi').locale('id').format('dddd');
	const date = moment.tz('Africa/Nairobi').locale('id').format('DD/MM/YYYY');
	const time = moment.tz('Africa/Nairobi').locale('id').format('HH:mm:ss');
	const greeting = time < '05:00:00' ? 'Good Morning 🌉' : time < '11:00:00' ? 'Good Morning 🌄' : time < '15:00:00' ? 'Good Afternoon 🏙' : time < '18:00:00' ? 'Good Evening 🌅' : time < '19:00:00' ? 'Good Evening 🌃' : time < '23:59:00' ? 'Good Night 🌌' : 'Good Night 🌌';

	let topCommands = Object.entries(db.hit)
		.sort((a, b) => b[1] - a[1])
		.slice(0, Math.min(7, Object.keys(db.hit).length))
		.filter(([command]) => command !== 'totalcmd' && command !== 'todaycmd')
		.slice(0, 5);

	let text = `╭──❍「 *CHARLESKE XMD MENU* 」❍\n`;

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

	if (type === 1 || type === 'buttonMessage') {
		await charleske.sendButtonMsg(m.chat, {
			text: `Hello @${m.sender.split('@')[0]}\n` + text,
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
		await kingvon.sendButtonMsg(m.chat, {
			text: `Hello @${m.sender.split('@')[0]}\n` + text,
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
			profile = await kingvon.profilePictureUrl(m.sender, 'image');
		} catch {
			profile = fake.anonim;
		}

		const menuInfo = `
╭──❍「 *USER INFO* 」❍
├ *Name* : ${m.pushName || 'No Name'}
├ *ID* : @${m.sender.split('@')[0]}
├ *User* : ${options.isVip ? 'VIP' : options.isPremium ? 'PREMIUM' : 'FREE'}
╰─┬────❍
╭─┴─❍「 *BOT INFO FOR CHARLESKE XMD* 」❍
├ *Bot Name* : ${botname}
├ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
├ *Owner* : @${owner[0].split('@')[0]}
├ *Mode* : ${naze.public ? 'Public' : 'Self'}
├ *Prefix* : ${db.set[options.botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *' + prefix + '*'}
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
		// You can add your custom video message logic here if needed
	} else {
		m.reply(`${greeting} @${m.sender.split('@')[0]}\nPlease use ${prefix}allmenu\nTo see all available menus.`);
	}
}

module.exports = setTemplateMenu;

// Hot reload system
let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});
