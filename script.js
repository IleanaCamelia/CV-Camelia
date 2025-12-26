 function sendToWhatsApp() {
    alert("clicked"); // <-- test: trebuie sa apara
    const name = (document.getElementById('wa-name')?.value || '').trim();
    const message = (document.getElementById('wa-message')?.value || '').trim();

    if (!message) {
      alert('Please type a message.');
      return;
    }

    const phone = "34611258510"; // fara + si fara 00
    const text = `Hello, my name is ${name || '—'}.\n\n${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.location.href = url;
  }