const EasyInvoice = require('easyinvoice');
const fs = require('fs')

class invoiceController {
    static async createInvoice(req, res) {
        const invoiceData = req.body; 

        if (!invoiceData || Object.keys(invoiceData).length === 0) {
            return res.send({ message: "No data provided" });
        }
    
        const data = {
         "documentTitle": "INVOICE",
         "currency": "USD",
         "taxNotation": "vat",
         "sender": {
             "company": "Nama Perusahaan",
             "address": "Alamat Perusahaan",
             "zip": "Kode Pos",
             "city": "Kota",
             "country": "Negara"
         },
         "client": {
             "company": "Nama Klien",
             "address": "Alamat Klien",
             "zip": "Kode Pos",
             "city": "Kota",
             "country": "Negara"
         },
         "invoiceNumber": "2021.0001",
         "invoiceDate": "05-01-2021",
         "products": [
             {
                 "quantity": 2,
                 "description": "Produk 1",
                 "tax": 5,
                 "price": 50
             },
             {
                 "quantity": 1,
                 "description": "Produk 2",
                 "tax": 10,
                 "price": 100
             }
         ],
         "bottomNotice": "Terima kasih telah berbisnis dengan kami!"
     };

     // const result = await easyinvoice.createInvoice(data);
     // easyinvoice.download("myInvoice.pdf", result.pdf);
 // }
    
        try {
            const result = await EasyInvoice.createInvoice(data);
            console.log("Invoice Result:", result);
    
            if (result.pdf) {
                const filePath = `./invoices/invoice_${invoiceData.invoiceNumber}.pdf`;
                fs.writeFileSync(filePath, result.pdf);
                res.download(filePath); // Mengunduh invoice yang telah dibuat
            } else {
                res.status(500).send({ message: "PDF generation failed" });
            }
        } catch (error) {
            console.error("Error generating invoice:", error);
            res.status(500).send({ message: "Error generating invoice", error: error.message });
        }
    }
    
}

module.exports = invoiceController;