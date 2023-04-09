let handler = async (m, { conn, usedPrefix }) => {
let pp = video1
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*╭┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╮*
┃ *🔥Hola ${taguser},*
*╰┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╯*
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
┏━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━┓
┃    *M E N U + ANIME🦊*
┃Hola, bienvenid@s  
┃a mi blog en este blog
┃subiré fanfics, series, imágenes y mucho más
┃También daré recomendaciones de
┃distintos animes de todo genero :D
┃⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪
┣ ⸎⃟🦊 .nezuko
┣ ⸎⃟🦊 .anime (randows)
┣ ⸎⃟🦊 .kurumi
┣ ⸎⃟🦊 .miku
┣ ⸎⃟🦊 .itori
┣ ⸎⃟🦊 .sasuke
┣ ⸎⃟🦊 .naruto
┣ ⸎⃟🦊 .indo  (indonesia)
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .videololi  (randow specials)
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┗━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭┛
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
`.trim()

conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
}}
handler.help = ['home']
handler.tags = ['owner']
handler.command = /^(home)$/i
handler.rowner = true
handler.fail = null
export default handler
