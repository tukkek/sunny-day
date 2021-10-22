# Sunny day
Userscript that filters out Twitch channel listings by tags and more.

## Installation

1. Install Tampermonkey (or a similar userscript engine) for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).
2. Install the userscript from [this link](https://github.com/tukkek/sunny-day/raw/main/Sunny%20day.user.js) by clicking `Install`.

## Configuration 

To keep this highly-customizable, users need to edit (via Tampermonkey's dashboard) the following lines according to their preference:

```js
const BLACKLIST=[]
const WHITELIST=[]
```

For example, you will want to allow at least one language:

```js
const WHITELIST=['English','Russian','Japanese']
```

If you want to remove sexist or racist tags (those are just examples as there are hundreds of identity-related tags now and this project isn't interested in cataloguing all of them):

```js
const BLACKLIST=['Asexual','Asian','Bisexual','Black']
```

You can also filter based on formats and styles you are not interested in:

```js
const BLACKLIST=['Backseating Allowed','Vtuber']
```
