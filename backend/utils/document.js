module.exports=(receipt_id,password)=>{
    const today=new Date();
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>PDF RESULT</title>
            </head>
            <body>
                <div class="report">
                    <table>
                        Name:${this.name}
                        Email:${this.email}
                    </table>
                </div>
            </body>
        </html>
    `
}