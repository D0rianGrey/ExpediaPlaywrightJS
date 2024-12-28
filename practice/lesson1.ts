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

const elem = await getInfo(1);
console.log(elem);

