module.exports = function countCats(backyard) {
  const catground = [].concat(...backyard);
  return catground.reduce((cats, cat) => {
    cats = cat === "^^" ? cats + 1 : cats;
    return cats;
  }, 0);
};
