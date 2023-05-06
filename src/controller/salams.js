const SalamsModel = require("../models/salams");

const getDataSalams = async (req, res) => {
  try {
    const [data] = await SalamsModel.getDataSalams();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      messsage: "Server Error",
      data: error,
    });
  }
};

module.exports = {
  getDataSalams,
};
