import { t, Selector, ClientFunction } from 'testcafe';

class HomeObject
{
    constructor()
    {
        this.tabNameArray = new Array('Cat Food', 'Cat Litter', 'Litter Box', 'Cat Health', 'Cat Behavior', 'Cat Breeds', 'Resources', 'About Us');
    }

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
    
    async AssertHomeURL()
    {
        const getLocation = ClientFunction(() => document.location.href);
        
        await t.expect(getLocation()).contains('allaboutcats.com');
    }

    async AssertHomeTabs()
    {
        await t.expect(Selector('#menu-primary-navigation').visible).eql(true);


    }
}

export default new HomeObject();