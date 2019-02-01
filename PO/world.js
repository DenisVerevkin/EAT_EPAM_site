'use strict';

const StartPage = require('./start_page');
const CareersPage = require('./careers_page');
const ResultPage = require('./result_page');

class World {
	constructor() {
		this.start = new StartPage();
		this.careers = new CareersPage();
		this.result = new ResultPage();
	};
};

module.exports = new World();