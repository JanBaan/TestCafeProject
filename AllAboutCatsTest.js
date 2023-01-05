import HomeObject from './POM/HomeObject';
import SearchObject from './POM/SearchObject';

fixture`HomePageTest`
    .page`https://allaboutcats.com/`
    .beforeEach(async t => {
        await HomeObject.CheckBrowser();
    });

// test('visiting home page', async t => {
//     await HomeObject.AssertHomeURL();
//     await HomeObject.AssertHomeTabs();
// });

test('search first article from list', async t => {
    //await SearchObject.CheckIfSearchBarExist();
    await SearchObject.SearchByQuery('funny');
    await SearchObject.SelectFirstSearchItemInList();
});