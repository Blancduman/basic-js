const defaultOptions = {
  repeatTimes: 1,
  separator: "+",
  addition: "",
  additionRepeatTimes: 1,
  additionSeparator: ""
};
module.exports = function repeater(str, options) {
  let newOptions = {
    ...defaultOptions,
    ...Object.keys(options).reduce((actully, key) => {
      if (typeof options[key] !== "undefined")
        return { ...actully, [key]: options[key] };
      return actully;
    }, {})
  };

  let result = "";

  for (let i = 0; i < newOptions.repeatTimes; i++) {
    result += `${str}`;
    for (let j = 0; j < newOptions.additionRepeatTimes; j++) {
      result += `${newOptions.addition}${
        j !== newOptions.additionRepeatTimes - 1
          ? newOptions.additionSeparator
          : ""
      }`;
    }

    if (i !== newOptions.repeatTimes - 1) result += `${newOptions.separator}`;
  }

  return result;
};
