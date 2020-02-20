module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let dreamName = members.reduce((dreamTeam, member) => {
    if (typeof member === "string") {
      dreamTeam = [
        ...dreamTeam,
        member
          .trim()
          .charAt(0)
          .toUpperCase()
      ];
      return dreamTeam;
    }

    return dreamTeam;
  }, []);

  return dreamName.sort().join("");
};
