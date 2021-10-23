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
const BLACKLIST=[] //remove channels with these tags
const WHITELIST=[] //remove channels without at least onf of these tags
const MAXTITLE=30 //maximum allowed stream title length
const CHECKCASE=true //check first-letter uppercase and removes all-uppercase or all-lowercase title
const REFRESH=3 //run filter every few seconds, use a higher number if this script slows Twitch down

const UPPERCASE=new RegExp('[A-Z]')
const LOWERCASE=new RegExp('[a-z]')

function find(tags,channel){
    for(let t of tags) if(channel.querySelector(`*[data-a-target="${CSS.escape(t)}" i]`))
        return true
    return false
}

function checkcase(letters,re){return letters.filter(l=>re.exec(l)).length<letters.length}

function check(title){
    if(!title) return true
    title=title.textContent
    if(title.length>=MAXTITLE) return false
    if(CHECKCASE){
        if(!UPPERCASE.exec(title[0])) return false
        let letters=Array.from(title).filter(l=>UPPERCASE.exec(l)||LOWERCASE.exec(l))
        if(!checkcase(letters,UPPERCASE)||!checkcase(letters,LOWERCASE)) return false
    }
    return true
}

function allow(channel){
    return check(channel.querySelector('*[data-a-target=preview-card-title-link]'))&&
        (WHITELIST.length==0||find(WHITELIST,channel))&&
        !find(BLACKLIST,channel)
}

function clear(){
    for(let c of document.querySelectorAll('*[data-target=directory-container]>*>*'))
        if(!allow(c)) c.remove()
}

setInterval(clear,REFRESH*1000);
