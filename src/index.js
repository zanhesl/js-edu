/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

 const BASIC_LEARN = 500;
 const ADVANCED_LEARN = 800;

module.exports =
function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const time = (knowsProgramming) ? ADVANCED_LEARN / config[focus] : (ADVANCED_LEARN + BASIC_LEARN) / config[focus];
      return Math.ceil(time);
  };

  const defaultStudentSpeedConfig = {
      family: 4,
      friends: 10,
      normal_life: 20,
      profession: 30,
      carrier: 40,
      top_peformance: 60
  }
