# Sunny day
Userscript that filters out Twitch channel listings by tags and more.

## Installation

1. Install Tampermonkey (or a similar userscript engine) for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).
2. Install the userscript from [this link](https://github.com/tukkek/sunny-day/raw/main/Sunny%20day.user.js) by clicking `Install`.

## Configuration 

To keep this highly-customizable you need to edit (via Tampermonkey's dashboard) the line that says:

```js
const TAGS=[]
```

For example, if you want to remove foreign languages you don't speak, replace with:

```js
const TAGS=['German','Polish','Russian']
```

If you want to remove sexist or racist tags (those are just examples as there are hundreds of identity-related tags now):

```js
const TAGS=['Asexual','Asian','Bisexual','Black']
```

You can also filter based on formats and styles you are not interested in:

```js
const TAGS=['Backseating Allowed','Vtuber']
```
