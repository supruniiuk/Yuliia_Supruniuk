function sortByFullName(arr) {
  return arr.sort(function (a, b) {
    if (a.surname == b.surname) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    } else {
      return a.surname < b.surname ? -1 : 1;
    }
  });
}

function meeting(str) {
  let friends = [];
  let separatedNames = str.toUpperCase().split(";");
  let resultStr = "";

  separatedNames.forEach((el) => {
    const fullName = el.split(":");
    friends.push({ name: fullName[0], surname: fullName[1] });
  });

  friends = sortByFullName(friends);
  friends.forEach((friend) => {
    resultStr += `(${friend.surname}, ${friend.name})`;
  });

  return resultStr;
}

const str =
  "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(str));

/* "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)" */
