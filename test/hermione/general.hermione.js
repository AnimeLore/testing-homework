const {assert} = require('chai');

describe('Тесты общих требований', async function () {
    it('Гамбургер-меню появляется', async function () {
        await this.browser.setWindowSize(500, 1000)
        await this.browser.url('/hw/store');
        const appMenu = await this.browser.$(".Application-Menu");
        await appMenu.waitForExist();
        const appMenuDisplay = await appMenu.isDisplayed();
        assert.equal(appMenuDisplay, 0, 'меню ссылок не скрывается')

        const appToggler = await this.browser.$(".Application-Toggler");
        await appToggler.waitForExist();
        const appTogglerDisplay = await appToggler.isDisplayed();
        assert.notEqual(appTogglerDisplay, 0, 'гамбургер-меню не появляется')
    });

    it('Ссылки в шапке отображаются', async function () {
        await this.browser.setWindowSize(1980, 728)
        await this.browser.url('/hw/store');
        const linkBox = await this.browser.$(".navbar-nav");
        await linkBox.waitForExist();
        const links = await linkBox.$$('.nav-link');
        await links.filter(async (element, index) => {
            const elDisplay = await element.isDisplayed();
            assert.notEqual(elDisplay, false, `Ссылка номер ${index} не отображается`)
        });
    });
});
