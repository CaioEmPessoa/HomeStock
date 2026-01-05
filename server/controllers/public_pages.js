
const PUBLIC_PAGES = [
    {
        "webPath"  : "/",
        "filePath" : "/public/index.html"
    }
];

function publishPages(app, ROOT) {
    PUBLIC_PAGES.forEach(el => {
    app.get(el.webPath, (req, res) => {
      res.sendFile(el.filePath, { root: ROOT });
    });
  });
}

module.exports = publishPages;