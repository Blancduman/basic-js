const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;

  let sA = parseFloat(sampleActivity);
  if (sA > 0 && sA < MODERN_ACTIVITY && !isNaN(sA))
    return Math.ceil(Math.log(15 / sA) / (0.693 / HALF_LIFE_PERIOD));

  return false;
}

module.exports = dateSample;
