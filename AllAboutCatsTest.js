import HomeObject from './POM/HomeObject';
import SearchObject from './POM/SearchObject';
import CatAgeCalculatorObject from './POM/CatAgeCalculatorObject';

fixture`HomePageTest`
    .page`https://allaboutcats.com/`
    .beforeEach(async t => {
        await HomeObject.CheckBrowser();
    });

// test('visiting home page', async t => {
//     await HomeObject.AssertHomeURL();
//     await HomeObject.AssertHomeTabs();
// });

// test('search first article from list', async t => {
//     await SearchObject.CheckIfSearchBarExist();
//     await SearchObject.SearchByQuery('funny');
//     await SearchObject.SelectFirstSearchItemInList();
// });

// test('search all articles', async t => {
//     await SearchObject.CheckIfSearchBarExist();
//     await SearchObject.SearchByQuery('cheese');
//     await SearchObject.SelectEnterInSearchBar();
//     await SearchObject.SelectEnterInSearchBar('cheese')
// });

test('calculate cat\'s age', async t => {
    await HomeObject.OpenPage('Resources', 'Cat Age Calculator');
})