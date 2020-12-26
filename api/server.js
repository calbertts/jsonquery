const _ = require('lodash');

module.exports = (req, res) => {
  const NEWLINE = '\n';

  const path = req.query.path;
  const shouldFail = req.query.failIfNotFound === 'true';

  if (!req.body) {
    res.status(400).send('No JSON found\n');
    return;
  }

  try {
    const object = JSON.parse(req.body);
    if (!_.has(object, path) && shouldFail) {
      res.status(400).send(`No '${req.query.path}' path found${NEWLINE}`);
      return;
    }

    const result = _.get(object, req.query.path);
    res.status(200).send(result+NEWLINE);
  } catch(err) {
    res.status(400).send(`Not valid JSON input: ${err}\n`);
  }
}
