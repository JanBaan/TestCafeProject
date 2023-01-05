import { t, Selector, ClientFunction } from 'testcafe';

class SearchObject
{
    constructor()
    {
        this.searchElement = Selector('.proinput');
    }

    async CheckIfSearchBarExist()
    {
        await t.expect(this.searchElement.visible).eql(true);

        const searchInput = this.searchElement.find('input');
        await t.expect(searchInput.exists).eql(true);
    }

    async SearchByQuery(name)
    {
        await t.typeText(this.searchElement, name, {caretPos: 0});
        await t.expect(Selector('.cliverse-search-item').count).eql(5);
    }

    async SelectFirstSearchItemInList()
    {
        
    }
}

export default new SearchObject();