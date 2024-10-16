

let fun = async () => {
    let resp = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await resp.json();
    let name = data.map(d => d.name)
    console.log(name)
}
fun()