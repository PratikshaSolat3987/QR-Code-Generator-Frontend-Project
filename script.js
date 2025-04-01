function generateQRCode() {
    let qrText = document.getElementById("qrText").value;
    let qrCodeContainer = document.getElementById("qrCodeContainer");
    let downloadBtn = document.getElementById("downloadBtn");

    if (qrText.trim() === "") {
        alert("Please enter text or a URL");
        return;
    }

    qrCodeContainer.innerHTML = ""; // Clear previous QR code

    let qrCode = new QRCode(qrCodeContainer, {
        text: qrText,
        width: 200,
        height: 200
    });

    downloadBtn.classList.remove("d-none");
}

function downloadQRCode() {
    let qrCodeImage = document.querySelector("#qrCodeContainer img");
    if (qrCodeImage) {
        let link = document.createElement("a");
        link.href = qrCodeImage.src;
        link.download = "QRCode.png";
        link.click();
    }
}