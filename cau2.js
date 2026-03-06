async function fetchUserData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const result = users.map(user => ({
        name: user.name,
        email: user.email,
        companyName: user.company.name
    }));
    return result;
}

async function displayUsers() {
    const userData = await fetchUserData();
    const container = document.getElementById('result1-container');
    
    const htmlContent = userData
        .map(u => `${JSON.stringify(u)}`)
        .join(',\n');

    container.innerHTML = `<pre>[\n${htmlContent}\n]</pre>`;
}

displayUsers();