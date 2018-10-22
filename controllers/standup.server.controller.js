const Standup = require('../models/standup.server.model');

exports.list = (req, res) => {
  const query = Standup.find();
  query.sort({ createdOn: 'desc' })
    .limit(12)
    .exec((err, results) => {
      res.render('index',
        {
          title: 'Virtual Stand-up Meeting Notebook',
          subtitle: 'Submit your daily meeting notes',
          notes: results,
        });
    });
};

exports.filterByMember = (req, res) => {
  let query = Standup.find();
  const filter = req.body.memberName;
  if (filter.length > 0) {
    query = Standup.find({ memberName: filter });
  }

  query.sort({ createdOn: 'desc' });

  query.exec((err, results) => {
    res.render('index',
      {
        title: 'Virtual Stand-up Meeting Notebook',
        subtitle: 'Submit your daily meeting notes',
        notes: results,
      });
  });
};

exports.create = (req, res) => {
  const entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment,
  });
  entry.save((err) => {
    if (err) {
      const errMsg = `there was an error saving the note. ${err.toString()}`;
      res.render('newnote', { title: 'Standup New Note (error)', message: errMsg });
    } else {
      res.redirect(301, '/');
    }
  });
};

exports.getNote = (req, res) => {
  res.render('newnote', { title: 'Standup - New Note' });
};
