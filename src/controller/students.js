const StudentsModel = require("../models/students");

const getDataStudents = async (req, res) => {
  try {
    const [data] = await StudentsModel.getDataStudents();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      messsage: "Server Error",
      data: error,
    });
  }
};

module.exports = {
  getDataStudents,
};
