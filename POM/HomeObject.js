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
    async AssertURL(expectedURL)
    {
        const getLocation = ClientFunction(() => document.location.href);
        await t.expect(getLocation()).contains(expectedURL);
    }

    //asserts the tabs on the homepage
    async AssertHomeTabs()
    {
        await t.expect(Selector('#menu-primary-navigation').visible).eql(true);
        
        for(let i = 0; i < await Selector('#menu-primary-navigation').child().count; i++)
        {
            await t
                .expect(Selector('#menu-primary-navigation')
                .child(i).child(0).textContent)
                .eql(this.tabNameArray[i]);
        }
    }

    //opens a page depending if it needs to open a tab or hover over one to select a page in a dropdown
    async OpenPage(tab, dropdownItem)
    {
        var selectedTab = null;
        
        for(let i = 0; i < await Selector('#menu-primary-navigation').child().count; i++)
        {
            if(await Selector('#menu-primary-navigation').child(i).child(0).textContent == tab)
            {
                selectedTab = Selector('#menu-primary-navigation').child(i).child(0);

                await t.expect(selectedTab.visible).eql(true);

                break;
            }
        }

        if(dropdownItem != null)
        {
            await t.hover(selectedTab);
            
            for(let i = 0; i < await selectedTab.sibling().child().count; i++)
            {
                if(await selectedTab.sibling().child(i).textContent == dropdownItem)
                {
                    await t.expect(await selectedTab.sibling().child(i).visible).eql(true);
                    await t.click(selectedTab.sibling().child(i));

                    break;
                }
            }
        }
        else
        {
            await t.click(selectedTab);
        }
    }
}

export default new HomeObject();