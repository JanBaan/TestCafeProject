import HomeObject from './POM/HomeObject';

fixture`HomePageTest`
    .page`https://allaboutcats.com/`
    .beforeEach(async t => {
        await HomeObject.CheckBrowser();
    });

test('visiting home page', async t => {
    await HomeObject.AssertHomeURL();
    await HomeObject.AssertHomeTabs();
});