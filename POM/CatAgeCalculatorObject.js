import { t, Selector, ClientFunction } from 'testcafe';

class CatAgeCalculationObject
{
    constructor()
    {

    }

    //clicks on a dropdown to select a cat's age
    async SelectCatAgeOption(age)
    {
        const catAgeSelect = Selector('[name="cat-age"]');
        const catAgeOptions = catAgeSelect.find('option');

        await t.expect(catAgeSelect.visible).eql(true);

        await t
            .click(catAgeSelect)
            .expect(catAgeOptions.visible).eql(true)
            .click(catAgeOptions.withText(age));
    }

    //clicks on a dropdown to select a cat's location
    async SelectCatWhereOption(location)
    {
        const catPlaceSelect = Selector('[name="cat-place"]');
        const catPlaceOptions = catPlaceSelect.find('option');

        await t.expect(catPlaceSelect.visible).eql(true);

        await t
            .click(catPlaceSelect)
            .expect(catPlaceOptions.visible).eql(true)
            .click(catPlaceOptions.withText(location));
    }
    
    //selects the `Next` button in the Cat Age Calculator page
    async SelectNextButton()
    {
        const nextBtn = Selector('[class="btn next-step"]');

        await t.expect(nextBtn.visible).eql(true);
        await t.click(nextBtn);
    }

    //selects the `Submit` button in the Cat Age Calculator page
    async SelectSubmitButton()
    {
        const submitBtn = Selector('[class="btn"]');

        await t.expect(submitBtn.visible).eql(true);
        await t.click(submitBtn);
    }

    //checks the result of the expected cat age
    async CheckAgeResult(expectedAge)
    {
        const resultBlock = Selector('div').withAttribute('class', 'result-block active');

        await t.expect(resultBlock.visible).eql(true);
        await t.expect(resultBlock.child(0).textContent).eql('Your Cat`s Age');
        await t.expect(resultBlock.child(1).textContent).eql(expectedAge)
    }
}

export default new CatAgeCalculationObject();