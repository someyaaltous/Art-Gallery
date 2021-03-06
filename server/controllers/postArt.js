const addArt = require('../database/queries/addArtQuery')

const postArt = (req, res) => {
  const data = req.body
  addArt(data)
    .then(result => res.status(200).json({ message: 'successfully added' }))
    .catch(err => res.status(500).json({ message: 'Internal Server Error' }))
}

module.exports = postArt
