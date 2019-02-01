'use strict';

class StartPage {
    constructor() {
        this.logo = '.header__logo';
        this.linkList = '.top-navigation__item:first-child div a';
        this.careersLink = '.top-navigation__item-link[href="/careers"]';
        this.jobListingLink = 'a.top-navigation__main-link[href="/careers/job-listings"]';
        this.technologiesLink = 'a.top-navigation__main-link[href="/careers/technologies"]';
        this.careersPathLink = 'a.top-navigation__main-link[href="/careers/career-path"]';
        this.applyNowLink = 'a.top-navigation__main-link[href="/careers/apply-now"]';
        this.benefitsLink = 'a.top-navigation__main-link[href="/careers/benefits"]';
    }
}

module.exports = StartPage;