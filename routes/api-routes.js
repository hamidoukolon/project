const router = require('express').Router();
const db = require('../models');
// Activities
// GET index, get all activities
router.get('/activities', (req, res) => {
  db.Activity.findAll()
    .then((activities) => {
      res.json(activities);
    });
});
// POST create, create a new activity
router.post('/activities', (req, res) => {
  const activity = req.body;
  db.Activity.create(activity)
    .then((results) => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        errors: err.errors,
      });
    });
});
// DELETE deletes an activity by id
router.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  db.Activity.destroy({
    where: {
      id,
    },
  }).then((response) => {
    res.json({
      success: true,
    });
  });
});
// PUT updates an activity by id
router.put('/activities/:id', (req, res) => {
  res.send('updates an activity by id');
});
// GET individual activity by id
router.get('/activities/:id', (req, res) => {
  res.send('gets individual activity');
});

module.exports = router;
