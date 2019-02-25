'use strict';

let elements = require('./elements');

let I;

module.exports = {
    _init() {
        I = actor();
    },

    setStartDate: async () => {
        within(elements.root);
        {
            await elements.fillField(elements.root.startDate, elements.root.date);
        }
    },

    sendAddYourChild() {
        I.click(elements.submitButton.addYourChild);
        I.waitInUrl(elements.url.addChildURL, 10);
        I.click(elements.submitButton.labelNotborn);
        I.click(elements.submitButton.labelGirl);
        I.click(elements.submitButton.labelBoy);
        I.click(elements.submitButton.next);
        I.fillField(elements.fields.first_name, 'Hubertbblaine');
        I.fillField(elements.fields.last_name, 'Wolfeschlegelsteinhausenbergerdorff');
        I.click(elements.submitButton.next);
        I.wait(1);
        I.click(elements.submitButton.next);
        I.attachFile(elements.file.attachFile, './2.jpg');
        I.wait(3);
        I.click(elements.submitButton.nextThird);
        I.wait(1);
        I.click(elements.submitButton.labelBoy);
        I.click(elements.submitButton.nextThird);
        I.fillField(elements.fields.first_name,'AnnaberthaCeciliaDiana');
        I.fillField(elements.fields.last_name,'HUmmera@****fillasumentina');
        I.click(elements.submitButton.next);
        I.wait(1);
        I.click(elements.submitButton.next);
        I.wait(1);
        I.click(elements.submitButton.next);
        I.wait(2);
        I.seeElement(elements.elementPage.congratulations);
        I.click(elements.submitButton.goChildProfile);
        I.waitInUrl(elements.url.createChildUrl,10);
    },

    sendAddPost() {
        I.click(elements.childButtons.addAMemory);
        I.wait(2);
        I.click(elements.childButtons.addPost);
        I.wait(2);
        I.fillField(elements.childFields.title,'Some text by text you see that!!!!!');
        I.fillField(elements.childFields.description,'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.click(elements.childButtons.savePost);
        I.wait(3);
        I.click(elements.childButtons.deletePost);
        I.wait(3);
        I.click(elements.childButtons.deletePostProve);
        I.wait(2);
    },

    sendDeleteYourChild() {
        I.amOnPage(elements.url.profileURL);
        I.click(elements.submitButton.editChild);
        I.wait(1);
        I.click(elements.submitButton.deleteChild);
        I.wait(1);
        I.fillField(elements.fields.deleteChildPopup,'1234567890');
        I.click(elements.submitButton.deleteChildApprove);
        I.waitInUrl(elements.url.profileURL,10);
    },

    sendInviteYourFriends() {
        I.click(elements.submitButton.inviteYourFriends);
        I.waitInUrl(elements.url.inviteEmailURL, 10);
        I.click(elements.submitButton.inviteByPhone);
        I.waitInUrl(elements.url.invitePhoneURL,10);
        I.click(elements.submitButton.inviteByEmail);
        I.fillField(elements.fields.invite_email, 'sometest@mail.com');
        I.click(elements.submitButton.inviteSubmit);
        I.wait(2);
    },

    sendSearchForPeople() {
        I.click(elements.submitButton.searchForPeople);
        I.waitInUrl(elements.url.searchForPeopleURL, 10);
        // I.fillField(elements.fields.search_people, 'ron');
        // I.click(elements.submitButton.inviteSubmit);
        // I.grabTextFrom(elements.elementPage.search_user);
        // I.seeElement(elements.submitButton.searchAdd);
    },

    sendVerifyMyProfile() {
        I.click(elements.submitButton.single);
        I.wait(3);
        I.click(elements.submitButton.editAccount);
        I.waitInUrl(elements.url.editAccountURL, 10);
        I.seeInField(elements.fields.edit_userName, 'QA');
        I.seeInField(elements.fields.edit_userLastName, 'Admin');
        I.seeInField(elements.fields.edit_userEmail, 'test.qa.faker@gmail.com');
    },

    verifyFooterHeader() {
        I.click(elements.submitButton.single);
        I.click(elements.submitButton.editAccount);
        I.waitInUrl(elements.url.editAccountURL, 10);
        I.click(elements.submitButton.searchForPeople);
        I.click(elements.submitButton.notifications);
        // I.click(elements.submitButton.yourChildren);
        I.seeElement(elements.submitButton.profile);
        I.seeElement(elements.submitButton.editAccount);
        // I.click(elements.submitButton.menuItemDrop);
        I.scrollTo(elements.elementPage.footer);
        I.seeElement(elements.elementPage.blocMyChild);
        I.seeElement(elements.submitButton.privacyPolicy);
        I.seeElement(elements.submitButton.termsAndConditions);
        // I.click(elements.submitButton.goUp);
        I.wait(2);
    },




};






























