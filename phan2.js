const api_url = "https://jsonplaceholder.typicode.com/posts";
let allPosts = [];
let currentLimit = 0;

async function getResultList(){
    const response = await fetch(api_url);

    const data = await response.json();

    allPosts = data.map(item => ({
        userId: item.userId,
        id: item.id,
        title: item.title,
        body: item.body
    }));
}

function renderPosts() {
    const container = document.getElementById('posts-container');
    
    const displayData = allPosts.slice(0, currentLimit);

    container.innerHTML = displayData.map(post => `
        <div">
            <p>Post ${post.id}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
        </div>
    `).join('');

    if (currentLimit >= allPosts.length) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}

function handleLoadMore() {
    currentLimit += 10;
    renderPosts();
}

document.getElementById('load-more-btn').addEventListener('click', handleLoadMore);

getResultList();