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
        I.attachFile(elements.file.attachFile, './1.jpg');
        I.wait(1);
        I.click(elements.submitButton.nextThird);
        I.wait(1);
        I.click(elements.submitButton.labelBoy);
        I.click(elements.submitButton.nextThird);
        I.fillField(elements.fields.first_name, 'AnnaberthaCeciliaDiana');
        I.fillField(elements.fields.last_name, 'HUmmera@****fillasumentina');
        I.click(elements.submitButton.next);
        I.wait(1);
        I.click(elements.submitButton.next);
        I.wait(1);
        I.click(elements.submitButton.next);
        I.wait(2);
        I.seeElement(elements.elementPage.congratulations);
        I.click(elements.submitButton.goChildProfile);
        I.waitInUrl(elements.url.createChildUrl, 10);
    },

    sendAddPost() {
        I.wait(1);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addPost);
        I.wait(2);
        I.fillField(elements.childFields.title, 'Some text by text you see that!!!!!');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.date, '3/26/2019');
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.wait(2);
        I.click(elements.childButtons.postDatepicker);
        I.wait(1);
        I.click(elements.childButtons.postDatepickerYear);
        I.wait(1);
        I.click(elements.childButtons.postDatepickerMonth);
        I.wait(1);
        I.click(elements.childButtons.postDatepickerDay);
        I.wait(1);
        I.click(elements.childButtons.savePost);
        I.wait(2);
        // I.click(elements.childButtons.deletePost);
        // I.wait(2);
        // I.click(elements.childButtons.deletePostProve);
        // I.wait(2);
    },

    sendAddFavorite() {
        I.wait(1);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addFavorite);
        I.wait(2);
        I.fillField(elements.childFields.title, 'Some text by text you see that!!!!!');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.wait(3);
        // I.fillField(elements.childFields.date, '3/26/2019');
        // I.click(elements.childButtons.postDatepicker);
        // I.wait(5);
        // I.click(elements.childButtons.postDatepickerYear);
        // I.wait(1);
        // I.click(elements.childButtons.postDatepickerMonth);
        // I.wait(1);
        // I.click(elements.childButtons.postDatepickerDay);
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendAddEvents() {
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addEvents);
        I.wait(2);
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.fillField(elements.childFields.title, 'Some text by text you see that!!!!!');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.fillField(elements.childFields.enterLocation, 'Some text and special characters % $ @');
        I.fillField(elements.childFields.address, 'California, Malibu');
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendAddWishlist() {
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addWishlist);
        I.wait(2);
        I.fillField(elements.childFields.title, 'Some text by text you see that!!!!!');
        I.fillField(elements.childFields.wishlist, 'Happy Happy Happy Birthday !!!');
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendAddFirstTimer() {
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.childButtons.addAMemory);
        I.wait(1);
        I.click(elements.childButtons.addFirstTimer);
        I.wait(2);
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.fillField(elements.childFields.title, 'Some text by text you see that!!!!!');
        I.fillField(elements.childFields.description, 'Lorem ipsum dolor sit amet, consectetur adipiscing eli');
        I.wait(2);
        I.click(elements.childButtons.savePost);
        I.wait(3);
    },

    sendAddRecords() {
        //----------- Record Academic ----------//
        I.waitForElement(elements.childButtons.addAMemory, 10);
        I.click(elements.submitButton.records);
        I.waitInUrl(elements.url.recordsURL, 10);
        I.click(elements.submitButton.addRecord);
        I.wait(2);
        I.fillField(elements.fields.recordTitle, 'Some text for test...');
        I.attachFile(elements.file.attachChildPost, './1.jpg');
        I.wait(2);
        I.click(elements.submitButton.selectRecord);
        I.wait(1);
        I.click(elements.submitButton.selectAcademic);
        I.click(elements.submitButton.submitLogin);
        I.wait(2);
    },

    sendPrivacySettings() {
        I.waitForElement(elements.childButtons.privacySettings, 10);
        I.click(elements.childButtons.privacySettings);
        I.wait(2);
        I.click(elements.submitButton.submitLogin);
        I.wait(3);
    },

    sendDeleteYourChild() {
        I.amOnPage(elements.url.profileURL);
        I.click(elements.submitButton.editChild);
        I.wait(1);
        I.click(elements.submitButton.deleteChild);
        I.wait(1);
        I.fillField(elements.fields.deleteChildPopup, '1234567890');
        I.click(elements.submitButton.deleteChildApprove);
        I.waitInUrl(elements.url.profileURL, 10);
        I.wait(1);
    },

    sendInviteYourFriends() {
        I.click(elements.submitButton.inviteYourFriends);
        I.waitInUrl(elements.url.inviteEmailURL, 10);
        I.click(elements.submitButton.inviteByPhone);
        I.waitInUrl(elements.url.invitePhoneURL, 10);
        I.fillField(elements.fields.invite_byPhone, '+39000000000000');
        I.click(elements.submitButton.inviteByEmail);
        I.fillField(elements.fields.invite_email, 'sometest@mail.com');
        I.click(elements.submitButton.inviteSubmit);
        I.wait(2);
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
        I.seeElement(elements.submitButton.profile);
        I.scrollTo(elements.elementPage.footer);
        I.seeElement(elements.elementPage.blocMyChild);
        I.wait(2);
        // I.click(elements.submitButton.privacyPolicy);
        I.amOnPage(elements.url.privacyPolicyURL);
        I.waitInUrl(elements.url.privacyPolicyURL,10);
        // I.click(elements.submitButton.termsAndConditions);
        I.amOnPage(elements.url.termsAndConditionsURL);
        I.waitInUrl(elements.url.termsAndConditionsURL,10);
        I.wait(2);
    },

    verifySearchPeople() {
        I.click(elements.submitButton.searchForPeople);
        I.waitInUrl(elements.url.searchForPeopleURL, 10);
        I.fillField(elements.fields.search_people, 'Ann');
        I.wait(2);
        I.click(elements.submitButton.searchPeopleID);
        I.waitInUrl(elements.url.searchResultIdURL, 10);
        I.amOnPage(elements.url.searchForPeopleURL);
        I.click(elements.submitButton.searchMemories);
        I.fillField(elements.fields.search_memories, 'Some text');
        I.wait(1);
        I.click(elements.submitButton.searchAdvice);
        I.waitInUrl(elements.url.searchAdviceURL, 10);
        I.fillField(elements.fields.search_advice, 'Children');
        I.wait(1);
        I.click(elements.submitButton.searchAdviceID);
        I.waitInUrl(elements.url.searchAdviceIdURL, 10);
        I.amOnPage(elements.url.searchForPeopleURL);
    },

    verifySponsored() {
        I.click(elements.submitButton.sponsoredProfessional);
        I.waitInUrl(elements.url.sponsoredProfessionalURL, 10);
        I.seeElement(elements.elementPage.sponsoredProfessional);
        I.click(elements.submitButton.sponsoredKnowYourChild);
        I.waitInUrl(elements.url.sponsoredKnowYourChildURL, 10);
    },


};






























