'use strict';

let elements = require('./elements');

let I;

module.exports = {
    _init() {
        I = actor();
    },

    sendLogout() {
        I.click(elements.submitButton.single);
        I.click(elements.submitButton.logout);
        // I.waitInUrl(elements.url.authLoginURL, 10);
    },

    verifyElementHomePage() {
        I.waitInUrl(elements.url.homePageURL, 10);
        I.seeElement(elements.elementPage.homeText, 'SHARE YOUR CHILD\'S MEMORIES');
        I.seeElement(elements.elementPage.createYourAccountLogin);
        I.seeElement(elements.footerElements.fElement);
        I.seeElement(elements.submitButton.privacyPolicy);
        I.click(elements.submitButton.googlePlay);
        I.waitInUrl(elements.url.googlePlayURL, 10);
        I.amOnPage(elements.url.homePageURL);
        I.click(elements.submitButton.appStore);
        I.waitInUrl(elements.url.appStoreURL, 10);
        I.amOnPage(elements.url.homePageURL);
        I.click(elements.submitButton.registration);
        I.waitInUrl(elements.url.authRegistrationURL, 10);
        I.amOnPage(elements.url.homePageURL);
        I.click(elements.submitButton.login);
        I.waitInUrl(elements.url.authLoginURL, 10);
    },

    createYourAccount() {
        I.waitInUrl(elements.url.homePageURL, 10);
        I.click(elements.submitButton.registration);
        I.waitInUrl(elements.url.authRegistrationURL, 10);
        I.fillField(elements.fields.firstName, 'Luciano');
        I.fillField(elements.fields.lastName, 'Lessly');
        I.click(elements.submitButton.nextThird);
        I.click(elements.submitButton.labelFemale);
        I.click(elements.submitButton.labelMale);
        I.wait(2);
        I.click(elements.submitButton.nextSecond);
        I.wait(2);
        I.click(elements.submitButton.nextSecond);
        I.fillField(elements.fields.email, 'some@gmail.com');
        I.click(elements.submitButton.nextSecond);
        I.wait(2);
        I.fillField(elements.fields.enterCode1, '1');
        I.fillField(elements.fields.enterCode2, '2');
        I.fillField(elements.fields.enterCode3, '3');
        I.fillField(elements.fields.enterCode4, '4');
        I.click(elements.submitButton.nextSecond);

    },


};