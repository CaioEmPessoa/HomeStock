
const PUBLIC_PAGES = [
    {
        "webPath"  : "/",
        "filePath" : "index"
    }
];

function publishPages(app) {
    PUBLIC_PAGES.forEach(el => {
    app.get(el.webPath, (req, res) => {
      res.render(el.filePath);
    });
  });
}

module.exports = publishPages;