Feature('Todo BMC');
Feature('I');
Feature('login');

const main = '/';


Before((I, loginPage) => {
    I.amOnPage('/');
});


//------------  Home page  -----------------//
Scenario('Home page', (I, homePage) => {
    homePage.verifyElementHomePage();
});


//-----------  Create your account -----------------//
Scenario('Create your account', (I, homePage) => {
    homePage.createYourAccount();
});

//-------------  Login invalid ------------------//
Scenario('Login invalid', (I, loginPage) => {
    loginPage.sendLoginFormInvalid();
});

//-------------- Login valid  --------------------//
Scenario('Login valid', (I, loginPage, homePage) => {
    loginPage.sendLoginForm();
    homePage.sendLogout();
});

//-------------- Forgot password ----------------//
Scenario('Forgot password', (I, loginPage) => {
    loginPage.sendForgotPassword();
});

//------------- Add/Post/Delete your child ------------------//
Scenario('Add/Post/Delete your child', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.sendAddYourChild();
    profilePage.sendAddPost();
    profilePage.sendAddFavorite();
    profilePage.sendAddEvents();
    profilePage.sendAddWishlist();
    profilePage.sendWishlistItems();
    profilePage.sendAddFirstTimer();
    profilePage.sendAddRecords();
    profilePage.sendPrivacySettings();
    profilePage.sendDeleteYourChild();
});

//-------------- Invite your friends and family -------------//
Scenario('Invite your friends and family', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.sendInviteYourFriends();
});


//-----------------  Verify my profile -------------------------//
Scenario('Verify my profile', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.sendVerifyMyProfile();
});

//-----------------  Change Password Delete Profile Invalid -------------------//
Scenario('Change Password Delete Profile Invalid', (I, loginPage) => {
    loginPage.sendLoginForm();
    loginPage.sendChangePassword();
    loginPage.sendDeleteProfile();
});

//----------------- Verify footer header ----------------//
Scenario('Verify footer header', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.verifyFooterHeader();
});

//----------------- Verify Search People -----------------//
Scenario('Verify Search People', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.verifySearchPeople();
});

//----------------- Verify Sponsored ------------------//
Scenario('Verify Sponsored', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.verifySponsored();
});

//------------------ Verify Timeline -------------------//
Scenario('Verify Timeline', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.setTimeline();
});

//------------------ Verify Connections -----------------//
Scenario('Verify Connections', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.verifyConnections();
});

//----------------- Suggested/Delete Connections ----------------//
Scenario('Suggested/Delete Connections', (I, loginPage, profilePage) => {
    loginPage.sendLoginForm();
    profilePage.verifySuggestedConnections();
    profilePage.deleteSuggestedConnections();
});















