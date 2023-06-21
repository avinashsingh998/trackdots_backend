const Feedback = require("../models/feedback");

async function addFeedback(req, res) {
  try {
    const { name, subject, description, user_Id } = req.body;

    console.log({ name, subject, description, user_Id });

    if (!name || !subject || !description) {
      res.status(400).json({ message: "All input fields are required" });
    } else {
      const feedback = new Feedback({
        name: name,
        subject: subject,
        description: description,
        user_Id: user_Id,
      });

      const result = await feedback.save();
      console.log(result);
      res.status(201).json(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

async function getAllFeedbacks(req, res) {
  try {
    const result = await Feedback.find();
    if (!result) res.status(404).json({ message: "No feedbacks are there" });
    else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

async function markAsRead(req, res) {
  try {
    const id = req.query.id;
    console.log("this is the id : ", id);
    Feedback.findByIdAndUpdate()
    const obj = await Feedback.findByIdAndUpdate(id, { read: true }, { new: true });
    if (obj) res.status(200).json(obj);
    else res.status(204).json(obj);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

module.exports = { addFeedback, getAllFeedbacks, markAsRead };
