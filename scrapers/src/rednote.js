const axios = require("axios");
const cheerio = require("cheerio");

async function rednote(url) {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const jsonString = $("script").last().text().split("window.__INITIAL_STATE__=")[1].replace('\\/', '/');
    const data = JSON.parse(removeUnicode(jsonString));
    const id = data.note.currentNoteId
    const meta = data.note.noteDetailMap[id].note
    const result = {
        metadata: {},
        download: {}
    }
    result.metadata.title = meta.title
    result.metadata.category = meta.tagList.map(a => a.name)
    result.metadata.stats = meta.interactInfo
    result.metadata.author = meta.user
    if (meta.video) {
        result.download = meta.video.media.stream["h264"][0].masterUrl
    } else {
        result.download = meta.imageList.map(a => a.urlDefault)
    }
    return result
}

function removeUnicode(jsonString) {
    return jsonString.replace(/\\u/g, '')
        .replace(/\\n/g, '\n')
        .replace(/002F/g, "/")
        .replace(/undefined/g, "null")
        .replace(/\\r/g, '\r')
        .replace(/\\t/g, '\t')
        .replace(/\\f/g, '\f')
        .replace(/\\b/g, '\b')
        .replace(/\\\\/g, '\\')
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"');
}

module.exports = rednote