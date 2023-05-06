const dbPool = require("../config/database");

const getDataSalams = () => {
  const SQLQuery =
    "SELECT nim, full_name, final_grade FROM `u3283226_monitoring_kp`.`salams`";

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getDataSalams,
};
