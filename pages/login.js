'use strict';

let elements = require('./elements');

let I;

module.exports = {
    _init() {
        I = actor();
    },

    sendLoginForm(email, password) {
        I.click(elements.submitButton.login);
        I.waitInUrl(elements.url.authLoginURL, 10);
        I.fillField(elements.fields.email, 'test.qa.faker@gmail.com');
        I.fillField(elements.fields.password, '1234567890');
        I.click(elements.submitButton.submitLogin);
        I.waitInUrl(elements.url.profileURL, 10);
    },

    sendChangePassword() {
        I.click(elements.submitButton.single);
        I.click(elements.submitButton.changePassword);
        I.waitInUrl(elements.url.changePasswordURL,10);
        I.fillField(elements.fields.old_password, '123123123');
        I.fillField(elements.fields.new_password, '123123111');
        I.fillField(elements.fields.repeat_password, '123123111');
        I.click(elements.submitButton.submitLogin);
        I.waitInUrl(elements.url.changePasswordURL, 10);
    },

    sendDeleteProfile() {
        I.click(elements.submitButton.deleteProfile);
        I.waitInUrl(elements.url.deleteProfileURL,10);
        I.fillField(elements.fields.new_password, '123123123');
        I.fillField(elements.fields.repeat_password, '123123123');
        I.click(elements.submitButton.submitLogin);
        I.waitInUrl(elements.url.deleteProfileURL,10);
    },

    sendForgotPassword() {
        I.click(elements.submitButton.login);
        I.waitInUrl(elements.url.authLoginURL, 10);
        I.click(elements.submitButton.forgotPassword);
        I.wait(2);
        I.waitInUrl(elements.url.forgotPasswordURL, 10);
        I.fillField(elements.fields.email, 'asdasd@gmail.com');
        I.click(elements.submitButton.resetPassword);
        I.wait(2);
    },

    sendLoginFormInvalid() {
        I.click(elements.submitButton.login);
        I.waitInUrl(elements.url.authLoginURL, 10);
        I.fillField(elements.fields.email, 'test@gamil.com');
        I.fillField(elements.fields.password, '2910332dfgnbn#BER');
        I.click(elements.submitButton.submitLogin);
        I.waitInUrl(elements.url.authLoginURL, 10);
        I.seeInCurrentUrl(elements.url.authLoginURL);
    },
};
