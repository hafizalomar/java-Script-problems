var mark = 70;

if (mark < 0 || mark > 100) {
    console.log("invalid mark")
} else if (mark >= 0 && mark < 40) {
    console.log("fail")
} else if (mark >= 40 && mark < 50) {
    console.log("C")
} else if (mark >= 50 && mark < 60) {
    console.log("B")
} else if (mark >= 60 && mark < 70) {
    console.log("A-")
} else if (mark >= 70 && mark < 80) {
    console.log("A")
} else {
    console.log("A+")
}


