function toggleMessage(id) {
    const envelope = document.querySelector(`.envelope:nth-child(${id})`);
    const message = document.getElementById(`message-${id}`);

    // Toggle die Klasse "open", um den Umschlag zu öffnen/zu schließen
    envelope.classList.toggle('open');
}
