import { Given, When, Then } from '@cucumber/cucumber';
import { promisedExpect } from '../support/chai';


Given('User go to partstown home page using a browser', { timeout: 2 * 140000 }, async () => {
    await browser.url(browser.options.baseUrl!);
    const baseUrl = browser.options.baseUrl!;
    console.log(`\n===>  You are testing this web site:  ${baseUrl}`);
    await browser.pause(5000);
})
// Then('button Visible', { timeout: 2 * 140000 }, async () => {
//     await promisedExpect(await ($('.gNO89b')).isExisting(), "Login failed1! Account navigation not visible!").to.be.true;
// })