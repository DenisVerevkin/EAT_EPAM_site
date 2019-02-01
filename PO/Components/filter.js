'use strict';

class Filter {
    constructor() {
        this.keywordLabel = '[for="new_form_job_search-keyword"]';
        this.keywordInput = '#new_form_job_search-keyword';

        this.locationLabel = '[for="new_form_job_search-location"]';
        this.locationSelect = '.select2-selection__rendered';

        this.departmentLabel = 'label[for="new_form_job_search-department"]';
        this.departmentSelect = '.selected-params div';
        this.departmentList = '.job-search__departments ul li span';

        this.relocationLabel = '.recruiting-search__label--always-shown';
        this.relocationCheckbox = '.recruiting-search__filter-items label';
        
        this.searchButton = 'button.recruiting-search__submit';
    }
}

class LocationSelectList{
    constructor() {
        this.allLocation = '#select2-new_form_job_search-location-result-pxgi-all_locations';
        this.au = {
            name:'[aria-label="Австралия"] strong',
            allCities:'[id$="all_Australia"]',
            cityList:'[aria-label="Австралия"] ul li:not([id$="all_Australia"])',
            values: ['Австралия, все города', 'Сидней']
        };
        this.am = {
            name:'[aria-label="Армения"] strong',
            allCities:'[id$="all_Armenia"]',
            cityList:'[aria-label="Армения"] ul li:not([id$="all_Armenia"])',
            values: ['Армения, все города', 'Ереван']
        };
        this.by = {
            name:'[aria-label="Беларусь"] strong',
            allCities:'[id$="all_Belarus"]',
            cityList:'[aria-label="Беларусь"] ul li:not([id$="all_Belarus"])',
            values: ['Беларусь, все города', 'Брест','Витебск','Гомель','Гродно','Минск', 'Могилев']
        };
        this.be = {
            name:'[aria-label="Бельгия"] strong',
            allCities:'[id$="all_Belgium"]',
            cityList:'[aria-label="Бельгия"] ul li:not([id$="all_Belgiuma"])',
            values: ['Бельгия, все города', 'Антверпен', 'Брюссель']
        };
        this.bg = {
            name:'[aria-label="Болгария"] strong',
            allCities:'[id$="all_Bulgaria"]',
            cityList:'[aria-label="Болгария"] ul li:not([id$="all_Bulgaria"])',
            values: ['Болгария, все города', 'София']
        };
        this.gb = {
            name:'[aria-label="Великобритания"] strong',
            allCities:'[id$="all_UK"]',
            cityList:'[aria-label="Великобритания"] ul li:not([id$="all_UK"])',
            values: ['Великобритания, все города', 'Лондон', 'Манчестер']
        };
        this.hu = {
            name:'[aria-label="Венгрия"] strong',
            allCities:'[id$="all_Hungary"]',
            cityList:'[aria-label="Венгрия"] ul li:not([id$="all_Hungary"])',
            values: ['Венгрия, все города', 'Будапешт', 'Дебрецен', 'Сегед']
        };
        this.de = {
            name:'[aria-label="Германия"] strong',
            allCities:'[id$="all_Germany"]',
            cityList:'[aria-label="Германия"] ul li:not([id$="all_Germany"])',
            values: ['Германия, все города', 'Мюнхен', 'Франкфурт-на-Майне', 'Херцогенаурах']
        };
        this.hk = {
            name:'[aria-label="Гонконг"] strong',
            allCities:'[id$="Kong"]',
            cityList:'[aria-label="Гонконг"] ul li:not([id$="Kong"])',
            values: ['Гонконг, все города']
        };
        this.in = {
            name:'[aria-label="Индия"] strong',
            allCities:'[id$="all_India"]',
            cityList:'[aria-label="Индия"] ul li:not([id$="all_India"])',
            values: ['Индия, все города', 'Бангалор', 'Пуна', 'Хайдарабад']
        };
        this.ie = {
            name:'[aria-label="Ирландия"] strong',
            allCities:'[id$="all_Ireland"]',
            cityList:'[aria-label="Ирландия"] ul li:not([id$="all_Ireland"])',
            values: ['Ирландия, все города', 'Дублин']
        };
        this.es = {
            name:'[aria-label="Испания"] strong',
            allCities:'[id$="all_Spain"]',
            cityList:'[aria-label="Испания"] ul li:not([id$="all_Spain"])',
            values: ['Испания, все города', 'Мадрид', 'Малага']
        };
        this.it = {
            name:'[aria-label="Италия"] strong',
            allCities:'[id$="all_Italy"]',
            cityList:'[aria-label="Италия"] ul li:not([id$="all_Italy"])',
            values: ['Италия, все города', 'Милан', 'Рим']
        };
        this.kz = {
            name:'[aria-label="Казахстан"] strong',
            allCities:'[id$="all_Kazakhstan"]',
            cityList:'[aria-label="Казахстан"] ul li:not([id$="all_Kazakhstan"])',
            values: ['Казахстан, все города', 'Алматы', 'Астана', 'Атырау']
        };
        this.ca = {
            name:'[aria-label="Канада"] strong',
            allCities:'[id$="all_Canada"]',
            cityList:'[aria-label="Канада"] ul li:not([id$="all_Canada"])',
            values: ['Канада, все города', 'Торонто']
        };
        this.cn = {
            name:'[aria-label="Китай"] strong',
            allCities:'[id$="all_China"]',
            cityList:'[aria-label="Китай"] ul li:not([id$="all_China"])',
            values: ['Китай, все города', 'Сучжоу', 'Шанхай', 'Шенжен']
        };
        this.lt = {
            name:'[aria-label="Литва"] strong',
            allCities:'[id$="all_Lithuania"]',
            cityList:'[aria-label="Литва"] ul li:not([id$="all_Lithuania"])',
            values: ['Литва, все города']
        };
        this.mx = {
            name:'[aria-label="Мексика"] strong',
            allCities:'[id$="all_Mexico"]',
            cityList:'[aria-label="Мексика"] ul li:not([id$="all_Mexico"])',
            values: ['Мексика, все города', 'Гвадалахара', 'Мехико']
        };
        this.nl = {
            name:'[aria-label="Нидерланды"] strong',
            allCities:'[id$="all_Netherlands"]',
            cityList:'[aria-label="Нидерланды"] ul li:not([id$="all_Netherlands"])',
            values: ['Нидерланды, все города', 'Амстердам']
        };
        this.pl = {
            name:'[aria-label="Польша"] strong',
            allCities:'[id$="all_Poland"]',
            cityList:'[aria-label="Польша"] ul li:not([id$="all_Poland"])',
            values: ['Польша, все города', 'Варшава', 'Вроцлав', 'Гданьск', 'Катовице', 'Краков']
        };
        this.ru = {
            name:'[aria-label="Россия"] strong',
            allCities:'[id$="all_Russia"]',
            cityList:'[aria-label="Россия"] ul li:not([id$="all_Russia"])',
            values: ['Россия, все города', 'Волгоград', 'Воронеж', 'Ижевск', 'Москва', 'Нижний Новгород', 'Рязань', 'Самара', 'Санкт-Петербург', 'Саратов', 'Сергиев Посад', 'Тверь', 'Тольятти']
        };
        this.sg = {
            name:'[aria-label="Сингапур"] strong',
            allCities:'[id$="all_Singapore"]',
            cityList:'[aria-label="Сингапур"] ul li:not([id$="all_Singapore"])',
            values: ['Сингапур, все города', 'Сингапур'] 
        };
        this.us = {
            name:'[aria-label="США"] strong',
            allCities:'[id$="all_USA"]',
            cityList:'[aria-label="США"] ul li:not([id$="all_USA"])',
            values: ['США, все города', 'Atlanta, GA', 'Austin, TX', 'Bloomfield, CT', 'Boston, MA', 'Bridgeport, CT', 'Cambridge, MA', 'Charlotte, NC', 'Chattanooga, TN', 'Chicago, IL', 
            'Conshohocken, PA', 'Cupertino, CA', 'Dallas, TX', 'Denver, CO', 'Hartford, CT', 'Houston, TX', 'Indianapolis, IN', 'Irvine, CA', 'Jersey City, NJ', 'Knoxville, TN', 
            'Los Angeles, CA', 'Malvern, PA', 'McLean, VA', 'Menlo Park, CA', 'Minneapolis, MN', 'Mountain View, CA', 'Nashville, TN', 'Newtown, PA', 'New York, NY', 'North Wales, PA',
            'O’Fallon, MO', 'Parsippany, NJ', 'Philadelphia, PA', 'Pittsburgh, PA', 'Plymouth Meeting, PA', 'Raleigh, NC', 'Salt Lake City, UT', 'San Francisco, CA', 'Santa Monica, CA', 
            'Seattle, WA', 'Somerville, NJ', 'Sunnyvale, CA', 'Tarrytown, NY', 'Washington D.C.', 'Weehawken, NJ', 'Westport, CT', 'Yonkers, NY']
        };
        this.ua = {
            name:'[aria-label="Украина"] strong',
            allCities:'[id$="all_Ukraine"]',
            cityList:'[aria-label="Украина"] ul li:not([id$="all_Ukraine"])',
            values: ['Украина, все города', 'Винница', 'Днепр', 'Киев', 'Львов', 'Харьков']
        };
        this.cz = {
            name:'[aria-label="Чехия"] strong',
            allCities:'[id$="Republic"]',
            cityList:'[aria-label="Чехия"] ul li:not([id$="Republic"])',
            values: ['Чехия, все города', 'Прага']
        };
        this.ch = {
            name:'[aria-label="Швейцария"] strong',
            allCities:'[id$="all_Switzerland"]',
            cityList:'[aria-label="Швейцария"] ul li:not([id$="all_Switzerland"])',
            values: ['Швейцария, все города', 'Базель', 'Риш-Роткройц', 'Цюрих']
        };
        this.se = {
            name:'[aria-label="Швеция"] strong',
            allCities:'[id$="all_Sweden"]',
            cityList:'[aria-label="Швеция"] ul li:not([id$="all_Sweden"])',
            values: ['Швеция, все города', 'Гетеборг', 'Стокгольм']
        };
    };
}

module.exports = {
    Filter,
    LocationSelectList
};