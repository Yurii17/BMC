module.exports = {


    fields: {
        email            : 'input[type="email"]',
        password         : 'input[type="password"]',
        old_password     : 'input[name="oldPassword"]',
        new_password     : 'input[name="password"]',
        repeat_password  : 'input[name="password2"]',
        first_name       : 'input[name="first-name"]',
        last_name        : 'input[name="last-name"]',
        invite_email     : 'input[name="email"]',
        invite_byPhone   : 'input[type="text"]',
        search_people    : 'input[placeholder="Search people..."]',
        search_memories  : 'input[placeholder="Search memories..."]',
        search_advice    : 'input[placeholder="Search advices..."]',
        edit_userName    : 'input[name="name"]',
        edit_userLastName: 'input[name="last_name"]',
        edit_userEmail   : 'input[name="email"]',
        firstName        : 'input[name="first-name"]',
        lastName         : 'input[name="last-name"]',
        phone            : 'input[firstName="phone"]',
        confirmPassword  : 'input[firstName="confirmPassword"]',
        enterCode1       : 'input[id="mat-input-3"]',
        enterCode2       : 'input[id="mat-input-4"]',
        enterCode3       : 'input[id="mat-input-5"]',
        enterCode4       : 'input[id="mat-input-6"]',
        deleteChildPopup : 'input[name="password"]',
        recordTitle      : 'input[name="title"]',

    },

    submitButton: {
        login                 : {css: 'a[href="/auth/login"]'},
        submitLogin           : 'button[type="submit"]',
        forgotPassword        : {css: 'a[href="/auth/forgot"]'},
        resetPassword         : {css: 'button[type="submit"]'},
        addYourChild          : {css: 'a[href="/create-child"'},
        labelGirl             : {css: 'div.box.female'},
        labelBoy              : {css: 'div.box.male'},
        labelNotborn          : {css: 'div.box'},
        bloodType             : {css: 'select[firstName="blood_type"]'},
        bloodValue            : {css: 'option[value="2"]'},
        eyeColor              : {css: 'select[firstName="eye_color"]'},
        eyeValue              : {css: 'option[ng-repeat="type in color"][value="3"]'},
        dateOfBirth           : {css: 'input[ng-model="childButtons.dob"]'},
        dateOfBirthValue      : {css: 'a[href="javascript:void(0)"][ng-click="setDatepickerDay(item)"]'},
        submit_reg            : {css: 'input[id="sumbit-reg"]'},
        inviteYourFriends     : {css: 'a[href="/user/invite"]'},
        inviteByEmail         : {css: 'a[href="/user/invite/email"]'},
        inviteByPhone         : {css: 'a[href="/user/invite/phone"]'},
        inviteSubmit          : {css: 'button[type="submit"]'},
        searchForPeople       : {css: 'a[href="/user/search"]'},
        searchPeopleID        : {css: 'a[href="/child/1130"]'},
        searchMemories        : {css: 'a[href="/user/search/memories"]'},
        searchAdvice          : {css: 'a[href="/user/search/advice"]'},
        searchAdviceID        : {css: 'a[href="/user/articles/know-your-child/57"]'},
        logout                : {css: 'a.mat-menu-item'},
        notifications         : {css: 'button.bmc-grey.icon.mat-flat-button'},
        yourChildren          : {css: 'button.bmc-grey.icon.mat-flat-button'},
        profile               : {css: 'a[href="/user/587"]'},
        menuItemDrop          : {css: 'a[id="single-button"]'},
        changePassword        : {css: 'a[href="/user/profile/change-password"]'},
        goUp                  : {css: 'span[class="goUp"]'},
        day                   : {css: 'input[firstName="date"]'},
        month                 : {css: 'input[placeholder="Month"]'},
        year                  : {css: 'input[placeholder="Year"]'},
        single                : {css: '/html/body/app-root/div/app-header/header/div/div/div[2]/button[2]'},
        logo                  : {css: 'a[href="#"]'},
        registration          : {css: 'a[href="/auth/register"]'},
        joinUsNow             : {css: 'a[ui-sref="auth.registration"]'},
        down                  : {css: 'a[href="#down"]'},
        privacyPolicy         : {css: 'a[href="/privacy"]'},
        termsAndConditions    : {css: 'a[href="/terms"]'},
        labelFemale           : {css: 'div.box.female'},
        labelMale             : {css: 'div.box.male'},
        createMyAccount       : {css: 'input[firstName="register"]'},
        editAccount           : {css: 'a.mat-menu-item[href="/user/profile"]'},
        googlePlay            : {css: 'a[href="https://play.google.com/store/apps/details?id=com.syneweb.blogmychild&hl=en"]'},
        appStore              : {css: 'a[href="https://itunes.apple.com/us/app/blogmychild/id1265063273?mt=8"]'},
        next                  : {css: '/html/body/app-root/div/div/app-create-child/div/div/div/div/form/div/div/div[2]/div[2]/button'},
        nextSecond            : {css: '/html/body/app-root/div/div/app-auth/div/div/div/app-register/div/form/div/div/div[2]/div[2]/button'},
        nextThird             : {css: '.row > .col:last-child button'},
        goChildProfile        : {css: 'a[class="bmc-gradient fluid mat-flat-button"]'},
        editChild             : {css: 'div[class="settings ng-star-inserted"]'},
        deleteChild           : {css: 'button[class="mat-menu-item ng-star-inserted"]'},
        deleteChildApprove    : {css: 'button[class="mat-flat-button mat-warn"]'},
        deleteProfile         : {css: 'a[href="/user/profile/delete"]'},
        sponsoredProfessional : {css: 'a[href="/user/articles/professional"]'},
        sponsoredKnowYourChild: {css: 'a[href="/user/articles/know-your-child"]'},
        records               : {css: 'a.count'},
        addRecord             : {css: 'button.bmc-gradient.mat-flat-button'},
        selectRecord          : {css: 'mat-select[placeholder="Select Record"]'},
        selectAcademic        : {css: 'mat-option[aria-selected="false"]'},


    },


    url: {
        profileURL               : 'http://new.bmc.hibridmena.com/user/587',
        forgotPasswordURL        : 'http://new.bmc.hibridmena.com/auth/forgot',
        addChildURL              : 'http://new.bmc.hibridmena.com/create-child',
        inviteEmailURL           : 'http://new.bmc.hibridmena.com/user/invite/email',
        invitePhoneURL           : 'http://new.bmc.hibridmena.com/user/invite/phone',
        searchForPeopleURL       : 'http://new.bmc.hibridmena.com/user/search',
        searchResultIdURL        : 'http://new.bmc.hibridmena.com/child/1130',
        searchAdviceURL          : 'http://new.bmc.hibridmena.com/user/search/advice',
        searchAdviceIdURL        : 'http://new.bmc.hibridmena.com/user/articles/know-your-child/57',
        editAccountURL           : 'http://new.bmc.hibridmena.com/user/profile',
        authLoginURL             : 'http://new.bmc.hibridmena.com/auth/login',
        homePageURL              : 'http://new.bmc.hibridmena.com/',
        privacyPolicyURL         : 'http://new.bmc.hibridmena.com/privacy',
        termsAndConditionsURL    : 'http://new.bmc.hibridmena.com/terms',
        authRegistrationURL      : 'http://new.bmc.hibridmena.com/auth/register',
        googlePlayURL            : 'https://play.google.com/store/apps/details?id=com.syneweb.blogmychild&hl=en',
        appStoreURL              : 'https://itunes.apple.com/us/app/blogmychild/id1265063273?mt=8',
        createChildUrl           : 'http://new.bmc.hibridmena.com/child/',
        changePasswordURL        : 'http://new.bmc.hibridmena.com/user/profile/change-password',
        deleteProfileURL         : 'http://new.bmc.hibridmena.com/user/profile/delete',
        sponsoredProfessionalURL : 'http://new.bmc.hibridmena.com/user/articles/professional',
        sponsoredKnowYourChildURL: 'http://new.bmc.hibridmena.com/user/articles/know-your-child',
        recordsURL               : 'http://new.bmc.hibridmena.com/child/',
    },

    elementPage: {
        search_user           : {css: 'div[ng-if="s.model == \'user\'"]'},
        footer                : {css: 'footer.footer'},
        blocMyChild           : {css: 'div[class="col-auto copyrights"]'},
        createYourAccountE    : {css: 'div[class="login-btn inline-block"]'},
        homeText              : {css: 'h1'},
        createYourAccountLogin: {css: 'div[class="col-sm-auto hide xs"]'},
        down                  : {css: 'div[class="arrow-down"]'},
        congratulations       : {css: 'div[class="step congratulations ng-star-inserted"]'},
        sponsoredProfessional : {css: 'div[class="articles-page"]'},
    },

    childButtons: {
        childId            : {css: 'a[href="/child/1721"]'},
        editChild          : {css: 'i[class="fa fa-cog editChild"]'},
        editChildId        : {css: 'a[href="#!/children/500"]'},
        deleteChildId      : {css: 'a[class="forPopoverMenu"]'},
        article            : {css: 'a[class="nav-link"]'},
        addAMemory         : {css: 'div.addFeedButton.ng-star-inserted'},
        addPost            : '/html/body/app-root/div/div/app-child/div/div/div[2]/div/app-feeds/div[2]/div[2]/div[1]/div',
        addFavorite        : '/html/body/app-root/div/div/app-child/div/div/div[2]/div/app-feeds/div[2]/div[2]/div[2]/div[2]',
        addEvents          : '/html/body/app-root/div/div/app-child/div/div/div[2]/div/app-feeds/div[2]/div[2]/div[3]/div[2]',
        addWishlist        : '/html/body/app-root/div/div/app-child/div/div/div[2]/div/app-feeds/div[2]/div[2]/div[3]/div[1]',
        addFirstTimer      : '/html/body/app-root/div/div/app-child/div/div/div[2]/div/app-feeds/div[2]/div[2]/div[2]/div[1]',
        savePost           : {css: 'button[type="submit"]'},
        deletePost         : {css: 'div[class="open-tools ng-star-inserted"]'},
        deletePostProve    : {css: 'button[class=mat-menu-item]'},
        postDatepicker     : {css: '//*[@id="mat-datepicker-0"]/mat-calendar-header/div/div/button[1]'},
        postDatepickerYear : {css: '//*[@id="mat-datepicker-0"]/div/mat-multi-year-view/table/tbody/tr[1]/td[4]/div'},
        postDatepickerMonth: {css: '//*[@id="mat-datepicker-0"]/div/mat-year-view/table/tbody/tr[2]/td[4]/div'},
        postDatepickerDay  : {css: '//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[6]/td[3]/div'},
        privacySettings    : {css: 'div.privacy-settings.ng-star-inserted'},

    },

    childFields: {
        title        : {css: 'input[name="title"]'},
        description  : {css: 'textarea[formcontrolname="description"]'},
        date         : {css: 'input[formcontrolname="date"]'},
        enterLocation: {css: 'input[name="location"]'},
        address      : {css: 'input[name="address"]'},
        wishlist     : {css: 'input[placeholder="Add Items to Wishlist"]'},
    },

    file: {
        attachFile      : {css: 'input[id="avatar-input"]'},
        attachFileMother: {css: 'input[id="file_mother"]'},
        attachChildPost : {css: 'input[accept="image/*"]'},

    },

    footerElements: {
        fElement: {css: 'div[class="row align-items-center justify-content-between"]'},
    },

    root: {
        startDate: {css: 'input[ng-model="childButtons.dob"]'},
        date     : '01-02-2019',
    },

}
