const mongoose = require('mongoose');

const memberNameValidator = [
  valu => (valu.length > 0 && valu.toLocaleLowerCase() !== 'none'),
  'Select a valid member name'];

const requiredStringValidator = [
  (valu) => {
    const testVal = valu.trim();
    return (testVal.length > 0);
  },
  '{PATH} cannot be empty'];

const Schema = mongoose.Schema;
const standupSchema = new Schema({
  memberName: { type: String, required: true, validate: memberNameValidator },
  project: { type: String, required: true, validate: requiredStringValidator },
  workYesterday: { type: String, required: true, validate: requiredStringValidator },
  workToday: { type: String, required: true, validate: requiredStringValidator },
  impediment: { type: String, required: true, default: 'none' },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Standup', standupSchema);
