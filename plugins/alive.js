import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🤖  البوت أون لاين الآن 
 menu. لظهور قائمة الاوامر الخاصة بالبوت اكتب 
Hedshot معك مساعدك الذكي 
╰────────────────────
*─[ Hedshot1251 ]*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(alive)$/i


export default handler
