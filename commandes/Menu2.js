const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "control",
  'categorie': "General"
}, async (_0x1e4882, _0x4749f3, _0x3704c6) => {
  let {
    ms: _0x5496a5,
    repondre: _0x44d42e,
    prefixe: _0xb6b1b8,
    nomAuteurMessage: _0x2187bf,
    mybotpic: _0x3ed32e
  } = _0x3704c6;
  let {
    cm: _0x3777c5
  } = require(__dirname + "/../njabulo//fana");
  var _0x56f73c = {};
  _0x3777c5.map(async _0x4435b4 => {
    if (!_0x56f73c[_0x4435b4.categorie]) {
      _0x56f73c[_0x4435b4.categorie] = [];
    }
    _0x56f73c[_0x4435b4.categorie].push(_0x4435b4.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  const _0x53e01e = moment().hour();
  let _0x12b534 = "Good Morning";
  if (_0x53e01e >= 12 && _0x53e01e < 18) {
    _0x12b534 = "Good afternnon!";
  } else {
    if (_0x53e01e >= 18) {
      _0x12b534 = "Good Everning!";
    } else if (_0x53e01e >= 22 || _0x53e01e < 5) {
      _0x12b534 = "Good Night 🌌";
    }
  }
  let _0x3daf15 = "╭───────────⊷\n┊▢BOT NAME : *CHARLESKE-XMD*\n┊▢ᴘʀᴇғɪx : *[ " + s.PREFIXE + " ]*\n╰─┬────────┬⊷\n\n*【Control】*\n- .anticall\n- .areact\n- .readstatus\n- .antidelete\n- .downloadstatus\n- .startmessage\n- .readmessage\n- .chatbot\n- .publicmode\n- .autorecord\n- .autotyping\n- .alwaysonline\n- .privatemode\n- .autolikestatus\n- .chatbot\n- .settings\n- .setprefix\n- .menulinks\n \n╭─┴⊷ᴀᴠᴀɪʟᴀʙʟᴇ ᴄᴏᴍᴍᴀɴᴅᴇs control \n╰┬───────⊷⳹\n┌┤🌇 *Am say : " + _0x12b534 + "*\n┊╰─────────────⊷\n*╰⊷••CHARLESKE-XMD••──────⊷* ";
  const _0x48cc95 = ["https://files.catbox.moe/vcdwmp.jpg", "https://files.catbox.moe/vcdwmp.jpg", "https://files.catbox.moe/vcdwmp.jpg"];
  const _0x4a4573 = ["https://files.catbox.moe/vcdwmp.jpg", "https://files.catbox.moe/vmp.jpg", "CAT"];
  const _0x36b7e4 = Math.random() > 0.5;
  let _0x222ebb;
  let _0x4f4cfd;
  let _0x2dd63f;
  if (_0x36b7e4) {
    _0x222ebb = _0x3ed32e();
    _0x4f4cfd = _0x48cc95[Math.floor(Math.random() * _0x48cc95.length)];
    _0x2dd63f = "renderLargerThumbnail";
  } else {
    _0x222ebb = _0x4a4573[Math.floor(Math.random() * _0x4a4573.length)];
    _0x4f4cfd = _0x222ebb;
    _0x2dd63f = "renderSmallThumbnail";
  }
  try {
    if (_0x222ebb.match(/\.(mp4|gif)$/i)) {
      await _0x4749f3.sendMessage(_0x1e4882, {
        'video': {
          'url': _0x222ebb
        },
        'caption': _0x3daf15,
        'footer': "*CHARLESKE XMD*, developed by ® Charleske",
        'gifPlayback': true,
        'contextInfo': {
          'externalAdReply': {
            'title': "DML-MD",
            'body': "CHARLESKE XMDT",
            'mediaType': 0x1,
            'thumbnailUrl': _0x4f4cfd,
            'sourceUrl': "https://github.com/Charleskenya1/CHARLESKE-XMD",
            'showAdAttribution': true,
            [_0x2dd63f]: true
          }
        }
      }, {
        'quoted': _0x5496a5
      });
    } else {
      await _0x4749f3.sendMessage(_0x1e4882, {
        'image': {
          'url': _0x222ebb
        },
        'caption': _0x3daf15,
        'footer': "*CHARLESKE-XMD*, developed by ®Charleske",
        'contextInfo': {
          'externalAdReply': {
            'title': "DML-MD",
            'body': "CHARLESKE XMD",
            'mediaType': 0x1,
            'thumbnailUrl': _0x4f4cfd,
            'sourceUrl': "https://github.com/Charleskenya1/CHARLESKE-XMD",
            'showAdAttribution': true,
            [_0x2dd63f]: true
          }
        }
      }, {
        'quoted': _0x5496a5
      });
    }
  } catch (_0x441100) {
    console.log("🥵🥵 Error sending menu: " + _0x441100);
    _0x44d42e("🥵🥵 Error sending menu: " + _0x441100);
  }
  const _0x3fa7bc = ["https://files.catbox.moe/wdap4t.mp3"];
  const _0x126c5d = _0x3fa7bc[Math.floor(Math.random() * _0x3fa7bc.length)];
  try {
    await _0x4749f3.sendMessage(_0x1e4882, {
      'audio': {
        'url': _0x126c5d
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'contextInfo': {
        'externalAdReply': {
          'title': "song menu",
          'body': "CHARLESKE XMD",
          'mediaType': 0x1,
          'thumbnailUrl': _0x4f4cfd,
          'sourceUrl': "https://github.com/Charleskenya1/CHARLESKE-XMD",
          'showAdAttribution': true,
          [_0x2dd63f]: true
        }
      }
    }, {
      'quoted': _0x5496a5
    });
  } catch (_0x1d50d5) {
    console.log("🥵🥵 Error sending audio: " + _0x1d50d5);
    _0x44d42e("🥵🥵 Error sending audio: " + _0x1d50d5);
  }
});
