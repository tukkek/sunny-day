# Sunny day
Userscript that filters out Twitch channel listings by tags and more.

Information overload and content discoverability are two major issues that top sites like Twitch and YouTube fail miserably to manage. While software tools will never be as good as user-driven curation, they still can help (minimally or majorly) while the issues remain addressed by the websites themselves. From that perspective, seeminlgy insignificant best-practices can be identified and processed automatically in an attempt to help users who are constantly overwhelmed with unwieldely amounts of information to separate quality from low-effort content.

## Installation

1. Install Tampermonkey (or a similar userscript engine) for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).
2. Install the userscript from [this link](https://github.com/tukkek/sunny-day/raw/main/Sunny%20day.user.js) by clicking `Install`.

## Configuration 

### Tags

A channel needs at least one whitelisted tag to make it through the filter. Usually this will be a language:

```js
const WHITELIST=['English','Russian','Japanese']
```

Any black-listed tag will be filtered out from the directory results:

```js
const BLACKLIST=['Backseating Allowed','Vtuber']
```

### Title

The script only allows sensibly-short titles by default. If you want to allow longer titles, change this line to a higher value like so:

```js
const MAXTITLE=9000
```

By default, the script will only allow titles that contain an initial uppercase letter and are not written entirely in uppercase or lowercase. To disable this behavior, replace the relevant line with the one below. **This feature does not currently support non-latin alphabets** so make sure to disable it if needed.

```js
const CHECKCASE=false
```
