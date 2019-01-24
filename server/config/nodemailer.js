const nodemailer = require('nodemailer');
const config = require('./index');


let smtpConfig = {
    host: config.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: config.MAIL_USER,
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
    const mailOptions = {
        from: config.MAIL_SENDER,
        to: email,
        subject: 'Подтверждение регистрации SmartPlanner',
        html: htmlTemplate
    }

    return transporter.sendMail(mailOptions);
}

function sendInviteLink(email, name, projectName, link) {

    const htmlTemplate = `
        <p>
            ${name}, Вас пригласили в проект ${projectName}. Перейдите по ссылке для подтверждения.
            <br>
            <a href="${link}">${link}</a>
        </p>
    `
    const mailOptions = {
        from: config.MAIL_SENDER,
        to: email,
        subject: 'Приглашение в проект SmartPlanner',
        html: htmlTemplate
    }

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendConfirmLink,
    sendInviteLink
};