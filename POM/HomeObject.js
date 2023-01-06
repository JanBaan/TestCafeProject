import { t, Selector, ClientFunction } from 'testcafe';

class HomeObject
{
    constructor()
    {
        this.tabNameArray = new Array('Cat Food', 'Cat Litter', 'Litter Box', 'Cat Health', 'Cat Behavior', 'Cat Breeds', 'Resources', 'About Us');
    }

    //checks which browser is being used
    async CheckBrowser()
    {
        if(t.browser.name == 'Chrome')
        {
            console.log(`For this test, you're using Chrome`);
        }
        else if (t.browser.name = 'Firefox')
        {
            console.log(`For this test, you're using Firefox`);
        }
    }

    //asserts the URL from the homepage
    async AssertHomeURL()
    {
        const getLocation = ClientFunction(() => document.location.href);
        await t.expect(getLocation()).contains('allaboutcats.com');
    }

    //asserts the tabs on the homepage
    async AssertHomeTabs()
    {
        await t.expect(Selector('#menu-primary-navigation').visible).eql(true);
        
        for(let i = 0; i < this.tabNameArray.length; i++)
        {
            await t
                .expect(Selector('#menu-primary-navigation')
                .child(i).child(0).textContent)
                .eql(this.tabNameArray[i]);
        }
    }
}

export default new HomeObject();