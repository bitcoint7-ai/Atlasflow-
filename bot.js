const TOKEN = "ВСТАВЬ_СЮДА_НОВЫЙ_ТОКЕН";
const CHAT_ID = "ВСТАВИМ_ПОТОМ";

async function sendToTelegram(text) {
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "HTML"
    })
  });
}

window.sendFormToTelegram = async function(formData) {
  const message = `
<b>New AtlasFlow Request</b>

<b>Name:</b> ${formData.name}
<b>Contact:</b> ${formData.contact}
<b>Route:</b> ${formData.route}
<b>Cargo:</b> ${formData.cargo}

<b>Details:</b>
${formData.details}
`;

  await sendToTelegram(message);
};
