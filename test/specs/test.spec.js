describe('Trello User Log In', () => {
    it('should successfully sign in a user', async () => {
        await browser.setWindowSize(1210, 900);
        await browser.url('https://trello.com');

        const selector = 'a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]';
        const loginButton = await $(selector);
        await loginButton.waitForClickable({ timeout: 5000 });
        await loginButton.click();

        const emailInput = await $('[aria-describedby="username-uid2-helper"]');
        await emailInput.setValue('evv.va@icloud.com');

        const loginSubmit = await $('#login-submit');
        await loginSubmit.click();

        const passwordInput = await $('input[data-testid="password"][autofocus]');
        await passwordInput.waitForClickable({timeout: 5000});
        await passwordInput.click();
        await passwordInput.setValue('Kaalbe1995');

        const loginSubmitButton = await $('#login-submit');
        await loginSubmitButton.click();
  });
});

describe ('User edits User Profile', () => {
    it('should successfully edit user profile', async() => {

        const profileIcon = await $('button[data-testid="header-member-menu-button"]');
        await profileIcon.click();

        const settingsLink = await $('a[data-testid="account-menu-profile"]');
        await settingsLink.waitForClickable({ timeout: 5000 });
        settingsLink.click();

        const bioSection = await $('#bio');
        await bioSection.waitForClickable({timeout: 5000});
        await bioSection.click();
        await bioSection.setValue("Hello there! I'm Altynay, a recent graduate with a keen interest in Quality Assurance and Automated Testing. I am excited to kick-start my career in the dynamic field of software testing and contribute to building high-quality software products.");
        
        const saveButton = await $('button.JhBc38JIAKzHAt.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc');
        saveButton.click(); 
   
    });
}); 

describe ('User creates a board', () =>{
    it('should create a new board', async() => {

        const iddIcon = await $('.nch-icon.A3PtEe1rGIm_yL.J2CpPoHYfZ2U6i.gNDonYrNSA1GXJ.ckKgC6Moz3kMqy.bvktrmtQeC1BXt span[data-testid="AddIcon"]');
        await iddIcon.click();

        const createBoard = await $('button[data-testid="header-create-board-button"]');
        await createBoard.click();
        await browser.pause( 5000);

        const createBoardInput = await $('input.nch-textfield__input.lsOhPsHuxEMYEb.VkPAAkbpkKnPst');
        await createBoardInput.waitForClickable();
        await createBoardInput.click();
        await createBoardInput.setValue('Automation team');

        const saveNewBoardButton = await $('button[data-testid="create-board-submit-button"]');
        await saveNewBoardButton.waitForClickable({timeout: 5000});
        await saveNewBoardButton.click();

        // Go back

        const goBack = await $('.CHqa1z442IX0Ya');
        await goBack.waitForClickable();
        await goBack.click();

    });
});

describe ('User filters new created board in the Search field', () =>{
    it('should filter the Automation team board in the search field', async () =>{
        
        const searchInput = await $('span.css-1wits42[data-vc="icon-undefined"]');
        await searchInput.waitForClickable();
        await searchInput.click();
        
        const searchResult = await $('div[role="presentation"] div[role="search"] input[data-test-id="search-dialog-input"]');
        await searchResult.waitForClickable();
        await searchResult.click();
        await searchResult.setValue('Automation team');

        const iconSpan = await $('.css-ebpaxw');
        await iconSpan.click();
       
    });
});

describe ('User creates a list in a board', () =>{
    it('should create a list in the Automation team board', async() =>{
        
        await browser.refresh();
        const newList = await $('button[data-testid="list-composer-button"]');
        await newList.waitForClickable();
        await newList.click()

        const nameList = await $('.oe8RymzptORQ7h');
        await nameList.waitForClickable();
        await nameList.click();
        await nameList.setValue('Backlog');

        const createList = await $('button[data-testid="list-composer-add-list-button"]');
        await createList.waitForClickable();
        await createList.click();

    });
});

describe ('User creates a card in a list', () =>{
    it ('should create a new card in the Backlog list', async() =>{

        await browser.refresh();

        const nameCardButton= await $('button[data-testid="list-add-card-button"]'); 
        await nameCardButton.waitForClickable();
        await nameCardButton.click();
        
        
        const nameCardText = await $('.qJv26NWQGVKzI9'); // no click
        await nameCardText.click();
        await nameCardText.setValue('Module 2: Practical task');
        

        await browser.pause(5000);
        const saveNewCard = await $('button[data-testid="list-card-composer-add-card-button"]');
        await saveNewCard.waitForClickable();
        await saveNewCard.click();

    })
});

describe ('User creates a Card filtering', () => {
    it('should only choose the card matching the selected criteria', async() =>{

        const filterPopover = await $('button[data-testid="filter-popover-button"]');
        await filterPopover.waitForClickable(5000);
        await filterPopover.click();

        await browser.pause( 5000);
        const inputField = await $('input.nch-textfield__input.lsOhPsHuxEMYEb');
        await inputField.setValue('Module 2: Practical task');
        await browser.pause( 5000);

    });
});

describe ('User edits the workspace settings', () =>{
    it ('should update workspace details', async () =>{

        const overflowIcon = await $('button[aria-label="Меню"]');
        await overflowIcon.waitForClickable();
        await overflowIcon.click();

        const workspaceAboutBtn = await $('div[data-testid="about-this-board-button-summary"]');
        await workspaceAboutBtn.click();

        const aboutAddText = await $('button[data-testid="description-content-placeholder"]');
        await aboutAddText.click();

        const placeholderSpan = await $('#ak-editor-textarea');
        await placeholderSpan.click();
        await placeholderSpan.setValue('Welcome to our workspace! Here, we embrace innovation, teamwork, and continuous learning to drive success and achieve excellence. Our workspace is designed to foster creativity and collaboration, allowing each member to contribute their unique skills and perspectives. We are committed to maintaining an inclusive, supportive environment where everyone feels valued and empowered to share ideas and take initiative.');

        const saveAbout = await $('button[data-testid="description-save-button"]');
        await saveAbout.click ();

    });
});

