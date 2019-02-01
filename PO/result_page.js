'use strict';

const ResultFilter = require('./Components/filter');

class ResultPage {
    constructor() {

        this.positionList = '.search-result__item-name';
        this.locationList = '.search-result__location';
        this.relocationList = '#icon-relocation';
        this.tagList = '.filter-tag';
        this.resultNumber = '.search-result__heading';

        this.resultFilter = new ResultFilter.Filter();
    }
}



module.exports = ResultPage;