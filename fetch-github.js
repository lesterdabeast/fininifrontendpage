document.getElementById("generateReceiptBtn").addEventListener("click", function () {
    // Trigger the API call to generate the PDF when the button is clicked
    fetch('https://efa9e41b2bd44023-172-56-180-76.serveousercontent.com')  // Change <YOUR-TERMUX-IP> to the Termux IP address
        .then(response => response.blob())  // Get the PDF as a blob
        .then(pdfBlob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(pdfBlob);
            link.download = 'grocery-receipt.pdf';  // Set filename for download
            link.click();  // Trigger the download
        })
        .catch(error => console.error('Error generating PDF:', error));
});
