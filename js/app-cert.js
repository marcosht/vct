function searchCertificate() {
    const certificateNumber = document.getElementById('certificateNumber').value;
    const resultDiv = document.getElementById('result');
    const certificate = certificates.find(cert => cert.number === certificateNumber);

    if (certificate) {
        resultDiv.innerHTML = `
            <img src="${certificate.imageUrl}" alt="Imagen del certificado" style="max-width: 100%; height: auto;">
            <p><strong></strong> ${certificate.owner}</p>
            <p><strong>Course:</strong> ${certificate.course}</p>
            <p><strong>Issue Date:</strong> ${certificate.issueDate}</p>
            <p><strong>Expiration Date:</strong> ${certificate.expirationDate}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p>Certificado no encontrado.</p>';
    }
}

