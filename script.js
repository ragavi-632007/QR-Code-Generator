function generateQRCode() {
    const inputText = document.getElementById('text-input').value;
    
    // Generate QR Code
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: inputText
    });

    // Show and update the button link if the input is a valid URL
    const qrLink = document.getElementById('qr-link');
    const qrButton = document.getElementById('qr-button');
    
    if (inputText.startsWith('http://') || inputText.startsWith('https://')) {
        qrLink.href = inputText;
        qrButton.style.display = 'inline-block';
    } else {
        qrButton.style.display = 'none';
    }
}
