// AtlasFlow → Telegram sender

const CHAT_ID = "368362132";

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

// Перехватываем форму
document.getElementById("quoteForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const route = document.getElementById("route").value.trim();
    const cargo = document.getElementById("cargo").value.trim();
    const details = document.getElementById("details").value.trim();

    const message = `
<b>🚚 New AtlasFlow Request</b>

<b>Name:</b> ${name}
<b>Contact:</b> ${contact}
<b>Route:</b> ${route}
<b>Cargo:</b> ${cargo}

<b>Details:</b>
${details || "-"}
`;

    sendToTelegram(message);

    alert("Request sent! We will contact you shortly.");
});
