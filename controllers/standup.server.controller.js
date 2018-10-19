const Standup = require('../models/standup.server.model');

exports.create = (req, res) => {
  const entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment,
  });
  entry.save();
  res.redirect(301, '/');
};

exports.getNote = (req, res) => {
  res.render('newnote', { title: 'Standup - New Note' });
};
