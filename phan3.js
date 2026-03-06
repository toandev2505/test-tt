let users = [];
const searchNameInput = document.getElementById('searchName');
const searchCompanyInput = document.getElementById('searchCompany');
const userBody = document.getElementById('userBody');

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    users = data.map(u => ({
        name: u.name,
        email: u.email,
        company: u.company.name
    }));

    renderTable(users);
}

function renderTable(dataList) {
    userBody.innerHTML = dataList.map(user => `
        <tr>
            <td data-label="Name">${user.name}</td>
            <td data-label="Email">${user.email}</td>
            <td data-label="Company">${user.company}</td>
        </tr>
    `).join('');
}

function handleFilter() {
    const nameQuery = searchNameInput.value.toLowerCase();
    const companyQuery = searchCompanyInput.value.toLowerCase();

    const filteredUsers = users.filter(user => {
        const matchName = user.name.toLowerCase().includes(nameQuery);
        const matchCompany = user.company.toLowerCase().includes(companyQuery);
        return matchName && matchCompany;
    });

    renderTable(filteredUsers);
}

searchNameInput.addEventListener('input', handleFilter);
searchCompanyInput.addEventListener('input', handleFilter);

fetchUsers();