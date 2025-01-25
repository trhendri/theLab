const { expect, browser, $ } = require('@wdio/globals')
const page = require('./page.js');

/*describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})
    */

    describe('Speed Game', () => {
        beforeEach( async ()=> {
            await browser.url('/speedGame');
        });

        it('Should check that a message is shown when hitting the "End Game" button as soon as it appears', async() => {
            const startGameBtn =  $(page.startGameBtn);
            const endGameBtn =  $(page.endGameBtn);
            const message = $(page.message);

            await startGameBtn.click();
            await endGameBtn.waitForClickable();
            await endGameBtn.click();
            const messageTxt= await message.getText();
            
            console.log(messageTxt);

            await expect(message).toBeDisplayed();

        });
    });

    describe.only('waitGame', () => {
        beforeEach(async () => {
            await browser.url('/waitGame');
        });

        it('Should check that an error message is shown when hitting the "End Game" button as soon as it appears', async() => {
            const startGameBtn = $(page.startGameBtn);
            const endGameBtn = $(page.endGameBtn);
            const failMessage= $(page.failMessage);

            await startGameBtn.click();
            await endGameBtn.waitForClickable();
            await endGameBtn.click();
            const failMessageTxt = await failMessage.getText();
            console.log(failMessageTxt);

            await expect(failMessage).toHaveText("Try again!");
            await expect(failMessage).toBeDisplayed();


        });

        it('Should check that success message is shown when hitting the "End Game" button after 5 seconds', async() => {
            const startGameBtn = $(page.startGameBtn);
            const endGameBtn = $(page.endGameBtn);
            const successMessage = $(page.successMessage);

            await startGameBtn.click();
            await browser.pause(5000);
            await endGameBtn.click();
            const successMessageTxt = await successMessage.getText();
            console.log(successMessageTxt);
            await expect(successMessage).toHaveText("Success!");
            await expect(successMessage).toBeDisplayed();

        });


    });
    



