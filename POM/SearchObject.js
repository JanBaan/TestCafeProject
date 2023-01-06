import { t, Selector, ClientFunction } from 'testcafe';

class SearchObject
{
    constructor()
    {
        this.searchElement = Selector('.proinput');
    }

    //checks if the search bar exists
    async CheckIfSearchBarExist()
    {
        await t.expect(this.searchElement.visible).eql(true);

        var searchInput = this.searchElement.find('input');
        await t.expect(searchInput.exists).eql(true);
    }

    //add a query in the search bar
    async SearchByQuery(query)
    {
        await t.typeText(this.searchElement, query, {caretPos: 0});
        await t.expect(Selector('.cliverse-search-item').count).eql(5);
    }

    //selects the first item in the search list
    async SelectFirstSearchItemInList()
    {
        var firstItem = Selector('.cliverse-search-item').nth(0);
        await t.expect(firstItem.visible).eql(true);

        var firstItemText = await firstItem.child(0).child(1).innerText;
        
        await t.click(Selector('.cliverse-search-item').nth(0));

        await t.expect(Selector('[class="title single-title entry-title"]').visible).eql(true);
        await t.expect(Selector('[class="title single-title entry-title"]').innerText).eql(firstItemText);
    }

    //selects the enter button in search bar if a query is present
    async SelectEnterInSearchBar()
    {
        await t.expect(this.searchElement.textContent).notEql('');

        await t.expect(Selector('[class="innericon"]').visible).eql(true);
        await t.click(Selector('[class="innericon"]'));
    }

    //checks the list of items based on query and see if there is more than 1 item in the list
    async CheckSearchList(query)
    {
        const getLocation = ClientFunction(() => document.location.href);
        await t.expect(getLocation()).contains('?s={0}', query);

        await t.expect(Selector('.page-title').child(0).innerText).eql(query);

        const numberOfArticles = await Selector('#content').find('article');
        await t.expect(numberOfArticles).gte(1);
    }
}

export default new SearchObject();