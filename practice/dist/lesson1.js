async function getInfo(number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`);
    const json = await response.json();
    return json;
}
async function getInfoAll() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const json = await response.json();
    return json;
}
const elems = await getInfoAll();
console.log(elems.filter(elem => elem.id == 6).map(elem => elem.title)[0]);
export {};
//# sourceMappingURL=lesson1.js.map