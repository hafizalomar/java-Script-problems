var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var big_name = friends[0]

for (let i = 1; i < friends.length; i++) {
    if (big_name.length < friends[i].length) {
        big_name = friends[i];
    }
}

console.log(big_name);