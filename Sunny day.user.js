// ==UserScript==
// @name         Sunny day
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter Twitch directory listings
// @author       Alex Henry
// @match        https://www.twitch.tv/directory/game/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// ==/UserScript==

//sadly these need to be case-perfect and escaped with CSS syntax if there's any punctuation or symbols in them
const BLACKLIST=[] //remove channels with these tags
const WHITELIST=[] //remove channels without these tags

const REFRESH=3 //run filter every few seconds, raise if this slows down your browser
const MAXTITLE=30 //maximum allowed stream title character count

function find(tags,channel){
    for(let t of tags) if(channel.querySelector(`*[data-a-target=${t}]`))
        return true
    return false
}

function allow(channel){
    let title=channel.querySelector('*[data-a-target=preview-card-title-link]')
    return title&&title.textContent.length>=MAXTITLE&&
        find(WHITELIST,channel)&&!find(BLACKLIST,channel)
}

function clear(){
    for(let c of document.querySelectorAll('*[data-target=directory-container]>*>*'))
        if(!allow(c)) c.remove()
}

setInterval(clear,REFRESH*1000);
