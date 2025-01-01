export { };

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getInfo(number: number): Promise<Todo> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`);
    const json = await response.json();
    return json;
}

async function getInfoAll(): Promise<Todo[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const json = await response.json();
    return json;
}

const elems: Todo[] = await getInfoAll();
console.log(elems.filter(elem => elem.id == 6).map(elem => elem.title)[0]);

