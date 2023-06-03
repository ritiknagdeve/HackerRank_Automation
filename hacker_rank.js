const puppeteer = require("puppeteer");

const loginlink = 'https://www.hackerrank.com/auth/login';
const email = 'test.automation2708@gmail.com';
const password = '@hackerrank';

const codeObj = require('./anscode');


// function waitAndClick(selector, cPage){
//     return new Promise(function(resolve, reject){
//         let waitForModelPromise = cPage.waitForSelector(selector);
//         waitForModelPromise.then(function(){
//             let clickModal = cPage.click(selector);
//             return clickModal;
//         }).then(function(){
//             resolve()
//         }).catch(function(err){
//             reject()
//         })
//     })
// }

let browserOpen = puppeteer.launch({
    headless : false,
    args : ['--start maximized'],
    defaultViewport : null
});

let page;

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;

}).then(function(newTab){
    page = newTab;
    let hackerRankOpenPromise = newTab.goto(loginlink);
    return hackerRankOpenPromise;

}).then(function(){
    let emailIsEntered = page.type("input[id='input-1']", email , {delay:50});
    return emailIsEntered;

}).then(function(){
    let passwordIsEntered = page.type("input[id='input-2']", password , {delay:50});
    return passwordIsEntered;

}).then(function(){
    let loginButtonClicked = page.click("button[type='submit']", {delay:50});
    return loginButtonClicked;

}).then(function(){
    let ClickOnAlgoPromise = page.waitForSelector('.topic-card a[data-attr1="algorithms"]', {visible:true} );
    return ClickOnAlgoPromise;

    // let ClickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page )
    // return ClickOnAlgoPromise;
    
}).then(function(){
    let ClickAlgo = page.click('.topic-card a[data-attr1="algorithms"]', {delay:50});
    return ClickAlgo;

}).then(function(){
    let warmupWaitPromise = page.waitForSelector('.checkbox-wrap input[value="warmup"]', {visible:true});  
    return warmupWaitPromise;
    
    // let clickWarmUp =   waitAndClick('.checkbox-wrap input[value="warmup"]', page );

    // console.log("Clicked on warmup checkbox");
    // return clickWarmUp;

}).then(function(){

    // let clickWarmup = page.click('.checkbox-wrap input[value="warmup"]', {delay:50});
    // let clickWarmup = page.goto("https://www.hackerrank.com/interview/interview-preparation-kit/warmup/challenges")
    // console.log("finally on warmup page😤");

    let clickWarmup = page.goto("https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=warmup");
    console.log("finally on warmup page😤");
    return clickWarmup;


}).then (function(){
    let waitfor2Seconds = page.waitForTimeout(2000);
    return waitfor2Seconds;

}).then(function(){
    let gotoFirstQue = page.click('.ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled', {delay:50});
    return gotoFirstQue;

}).then(function(){
    let waitfor2Seconds = page.waitForTimeout(2000);
    return waitfor2Seconds;

}).then(function(){
    let editorInFocus = page.click('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', {delay:50});
    return editorInFocus;

}).then(function(){
    let clickOnTextInput = page.click('.checkbox-wrap', {delay:50});
    return clickOnTextInput;

}).then(function (){
    return page.waitForSelector('textarea[id="input-1"]', {delay:50});

}).then(function(){
    return page.type('textarea[id="input-1"]', codeObj.answer[1] , {delay:10});

}).then(function(){
    let ctrlIsPressed = page.keyboard.down('Control');
    return ctrlIsPressed;

}).then(function(){
    let AIsPressed = page.keyboard.press('A', {delay:100});
    return AIsPressed;
    
}).then(function(){
    let XIsPressed = page.keyboard.press('X', {delay:100});
    return XIsPressed;
    
}).then(function(){
    let ctrlIsUnPressed = page.keyboard.up('Control');
    return ctrlIsUnPressed;

}).then(function(){
    let waitfor2Seconds = page.waitForTimeout(2000);
    return waitfor2Seconds;

}).then(function(){
    let editorInFocus = page.click('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', {delay:100});
    return editorInFocus;

}).then(function(){
    let ctrlIsPressed = page.keyboard.down('Control');
    return ctrlIsPressed;

}).then(function(){
    let AIsPressed = page.keyboard.press('A', {delay:100});
    return AIsPressed;

}).then(function(){
    let VIsPressed = page.keyboard.press('V', {delay:100});
    return VIsPressed;

}).then(function(){
    let ctrlIsUnPressed = page.keyboard.up('Control');
    return ctrlIsUnPressed;

}).then(function(){
    return page.click('button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled',{delay:50});

})