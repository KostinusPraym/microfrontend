export const getFetch = async (page = 1) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    const data = await res.json();

    return data;
};
