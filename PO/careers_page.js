'use strict';

const Filter = require('./Components/filter');

class CareersPage {
    constructor() {

        this.applyNowButton = 'a.bg-color-light-blue'; // link to 
        this.keywordLabel = '[for="new_form_job_search-keyword"]';
        this.keywordInput = '#new_form_job_search-keyword';
        this.locationLabel = '[for="new_form_job_search-location"]';
        this.locationSelect = '.select2-selection__rendered';
        this.departmentLabel = 'label[for="new_form_job_search-department"]';
        this.departmentSelect = '.selected-params div';
        this.departmentList = '.job-search__departments ul li span';
        this.searchButton = 'button.recruiting-search__submit';
        this.trainingButton = '.bg-color-white'; // link to
        this.careersFilter = new Filter.Filter();
    }
}

module.exports = CareersPage;