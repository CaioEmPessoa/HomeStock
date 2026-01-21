
const PUBLIC_PAGES = [
    {
        "webPath"  : "/",
        "filePath" : "index",
        "data": {}
    }
];

function publishPages(app) {
    PUBLIC_PAGES.forEach(el => {
    app.get(el.webPath, (req, res) => {
      res.render(el.filePath, el.data);
    });
  });
}

module.exports = publishPages;