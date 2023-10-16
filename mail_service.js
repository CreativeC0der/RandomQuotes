const nodemailer = require('nodemailer')
const ejs = require('ejs')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shrijon610@gmail.com',
        pass: 'ejpmybrauinevdct'
    }
})

async function send_mail(address, quote) {
    try {
        console.log('SENDING EMAIL');
        const html = await ejs.renderFile('./views/email_template.ejs', { quote });
        console.log(html);
        const info = await transporter.sendMail({
            from: 'shrijon610@gmail.com',
            to: address,
            subject: 'Your Quote Delivery',
            text: 'hii there!!!!! ' + address,
            html: html
        })

        console.log(info.messageId);
        return info;
    }
    catch (e) {
        console.log(e);
    }

}



module.exports = { send_mail };