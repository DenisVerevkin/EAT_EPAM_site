const utils = require('../UTILS/utils');
const outline = require('../UTILS/outline');
const world = require('../PO/world');
const urlList = require('../DATA/url-list.json');
const data = require('../DATA/data');

describe('EGE', () => {

    xdescribe('test 001 Start Page', () => {
        outline (urlList, (url) => {
            it(`Verify that page opens: ${url.url}`, async () => {
                await utils.openBrowser(url.url); 
            });
        });
    });

    xdescribe('test 002 Start Page', () =>{

        beforeEach(async () => {
            utils.openBrowser(data.url.start);
        });

        it(`Verify that Careers Button opens pop-up with correct links : `, async () => {

            const careersLink = element(by.css(world.start.careersLink));
            const expectedDropdown = ["ВАКАНСИИ", "КАРЬЕРНЫЙ ПУТЬ", "СОЦИАЛЬНЫЙ ПАКЕТ", "ТЕХНОЛОГИИ", "ОТПРАВИТЬ РЕЗЮМЕ"];

            await  browser.wait(utils.ECHelper(careersLink, "clickable"), browser.params.timeout, "Link is missing");
            await browser.actions().mouseMove(element(by.css(world.start.careersLink))).perform();
            await browser.sleep(1000);
            const actualDropdown = await element.all(by.css(world.start.linkList)).getText();
            utils.checkListData(expectedDropdown, actualDropdown); 
           
        });

        it(`Verify that Careers Button navigates to Careers page `, async () => {

            await  browser.wait(utils.ECHelper(element(by.css(world.start.careersLink)), "clickable"), browser.params.timeout, "Link is missing");
            await element(by.css(world.start.careersLink)).click();
            const applyNowButton = element(by.css(world.careers.applyNowButton));
            expect(await browser.wait(utils.ECHelper(applyNowButton, "clickable"), browser.params.timeout, "Link is missing")).toBe(true);
           
        });

    });
    describe('test 003 Careers Page', () =>{

        beforeEach(async () => {
            utils.openBrowser(data.url.careers);
        });

        xit(`Verify that Department Filter contains 14 options : `, async () => {

            const departmentSelect = element(by.css(world.careers.departmentSelect));
            const expectedDropdown = ["UX и дизайн", "Административные и финансовые", "Анализ данных и цифровые стратегии", "Консалтинг и бизнес-анализ", 
            "Обучение", "Подбор и управление персоналом", "Продажи, маркетинг и PR", "Проектирование архитектуры", "Разработка", "Сопровождение и поддержка", 
            "Тестирование", "Управление разработкой и проектами", "Управление услугами и контроль качества", "Управленческие позиции"];

            await browser.wait(utils.ECHelper(departmentSelect, "clickable"), browser.params.timeout, "Link is missing");
            await departmentSelect.click();
            await browser.sleep(1000);
            const actualDropdown = await element.all(by.css(world.careers.departmentList)).getText();
            utils.checkListData(expectedDropdown, actualDropdown); 
           
        });

        it(`Verify that Department Filter check-boxes invoke a correct tag-tiles : `, async () => {

            
            const departmentSelect = element(by.css(world.careers.departmentSelect));
            await browser.wait(utils.ECHelper(departmentSelect, "clickable"), browser.params.timeout, "Link is missing");
            await departmentSelect.click();
            await browser.sleep(1000);

            const departmentCollection = await element.all(by.css(world.careers.departmentList)).asElementFinders_();

            for(let i = 0; i < departmentCollection.length; i++) {
                await departmentCollection[i].click();
                text = await departmentCollection[i].getText();
                textBuf = text.toUpperCase();
                buf = await element.all(by.css(world.result.tagList)).last().getText();
                expect(buf).toBe(textBuf);
            }
        });
    });
    
})