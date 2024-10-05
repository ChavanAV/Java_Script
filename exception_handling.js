
// 1way

try {
    console.log(a);
} catch {
    console.log("A is not defined");

}

// 2way
try {
    // console.log(a)
    throw new Error("a is not defined")

} catch (e) {
    console.log(e);
}