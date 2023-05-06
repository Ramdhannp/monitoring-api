const SurveysModel = require("../models/surveys");

const getDataSurvey = async (req, res) => {
  try {
    const [data] = await SurveysModel.getDataSurvey();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      messsage: "Server Error",
      data: error,
    });
  }
};

module.exports = {
  getDataSurvey,
};
