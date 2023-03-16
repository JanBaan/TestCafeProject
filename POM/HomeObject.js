import { t, Selector, ClientFunction } from 'testcafe';

class HomeObject
{
    constructor()
    {
        
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
        await t.expect(Selector('#menu-primary-navigation').child().count).eql(8);

        await t.expect(Selector('#menu-primary-navigation').child(0).child('a').textContent).eql('Cat Food');
        await t.expect(Selector('#menu-primary-navigation').child(1).child('a').textContent).eql('Cat Litter');
        await t.expect(Selector('#menu-primary-navigation').child(2).child('a').textContent).eql('Litter Box');
        await t.expect(Selector('#menu-primary-navigation').child(3).child('a').textContent).eql('Cat Health');
        await t.expect(Selector('#menu-primary-navigation').child(4).child('a').textContent).eql('Cat Behavior');
        await t.expect(Selector('#menu-primary-navigation').child(5).child('a').textContent).eql('Cat Breeds');
        await t.expect(Selector('#menu-primary-navigation').child(6).child('a').textContent).eql('Resources');
        await t.expect(Selector('#menu-primary-navigation').child(7).child('a').textContent).eql('About Us');
    }

    //opens a page depending if it needs to open a tab or hover over one to select a page in a dropdown
    async OpenPage(tab, dropdownItem)
    {
        var selectedTab = null;
        
        for(let i = 0; i < await Selector('#menu-primary-navigation').child().count; i++)
        {
            if(await Selector('#menu-primary-navigation').child(i).child('a').textContent == tab)
            {
                selectedTab = Selector('#menu-primary-navigation').child(i).child('a');
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