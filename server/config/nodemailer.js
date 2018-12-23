const nodemailer = require('nodemailer');
const config = require('./index');


let smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.MAIL_SENDER,
        pass: config.MAIL_PASS
    }
};

let transporter = nodemailer.createTransport(smtpConfig);

function sendConfirmLink(email, name, link) {
    const htmlTemplate = `
    <p>
        ${name}, спасибо за регистрацию. Перейдите по ссылке для активации аккунта
        <br>
        <a href="${link}">${link}</a>
    </p>
    `

    // const textTemplate = `
    // ${name}, спасибо за регистрацию. Перейдите по ссылке для активации аккунта 
    // ${link}
    // `

    const mailOptions = {
        from: config.MAIL_SENDER,
        to: email,
        subject: 'Подтверждение регистрации SmartPlanner',
        // text: 'Plaintext version of the message',
        html: htmlTemplate
    }

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendConfirmLink
};