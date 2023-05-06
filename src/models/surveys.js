const dbPool = require("../config/database");

const getDataSurvey = () => {
  const SQLQuery =
    "SELECT nama, nim, lokasi_kp, pekerjaan, tahap_pendaftaran_kp, tahap_pelaksanaan_kp, seminar_kp, pembimbing_akademik, pembimbing_instansi FROM `u3283226_monitoring_kp`.`surveys`";

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getDataSurvey,
};
