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
const REFRESH=3 //run filter every few seconds, raise if this slows down your browser
const MAXTITLE=30 //maximum allowed stream title character count
const TAGS=[] //sadly this needs to be case-perfect

function remove(channel){
    let title=channel.querySelector('*[data-a-target=preview-card-title-link]')
    if(!title) return false
    if(title.textContent.length>=MAXTITLE) return true
    for(let t of TAGS) if(channel.querySelector(`*[data-a-target=${t}]`))
        return true
    return false
}

function clear(){
    for(let c of document.querySelectorAll('*[data-target=directory-container]>*>*'))
        if(remove(c)) c.remove()
}

setInterval(clear,REFRESH*1000);
