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
const CHECKCASE=true //check for a first-letter uppercase and at least one lowercase letter in title
const REFRESH=3 // run filter every few seconds, use a higher number if this script slows Twitch down

const UPPERCASE=new RegExp('[A-Z]')
const LOWERCASE=new RegExp('[a-z]')

function find(tags,channel){
    for(let t of tags) if(channel.querySelector(`*[data-a-target="${CSS.escape(t)}" i]`))
        return true
    return false
}

function check(title){
    if(!title) return true
    title=title.textContent
    if(title.length>=MAXTITLE) return false
    if(CHECKCASE){
        let cases=Array.from(title)
        if(!UPPERCASE.exec(cases[0])) return false
        if(!cases.find(c=>LOWERCASE.exec(c))) return false
    }
    return true
}

function allow(channel){
    return check(channel.querySelector('*[data-a-target=preview-card-title-link]'))&&
        find(WHITELIST,channel)&&!find(BLACKLIST,channel)
}

function clear(){
    for(let c of document.querySelectorAll('*[data-target=directory-container]>*>*'))
        if(!allow(c)) c.remove()
}

setInterval(clear,REFRESH*1000);
