const puppeteer = require ( 'puppeteer' );
debugger
async function getPic () {
    const browser = await puppeteer.launch ( { headless: false } );
    const page = await browser.newPage ();
    // await page.setRequestInterception ( true );
    // page.on ( 'request', request => {
    //     if ( request.resourceType === 'stylesheet' ) {
    //         request.abort ();
    //     }
    //     else {
    //         request.continue ();
    //     }
    // } );
    await page.setViewport ( { width: 1000, height: 500 } );
    await page.goto ( 'https://google.com' );
    await page.screenshot ( { path: 'google.png' } );
    debugger
    await browser.close ();
}

getPic ();
