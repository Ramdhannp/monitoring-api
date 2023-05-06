const dbPool = require("../config/database");

const getDataStudents = () => {
  const SQLQuery =
    "SELECT nim, full_name, student_year FROM `u3283226_monitoring_kp`.`students`";

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getDataStudents,
};
