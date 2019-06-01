const verbs = require('jp-conjugation');

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { verb, verbtype } = query

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache'
  })
  res.end(JSON.stringify({
    verb: verbs.conjugate(verb, verbtype)
  }))
}