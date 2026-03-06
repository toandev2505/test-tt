const students = [{
        id: 1,
        name: "An",
        score: 8
    },
    {
        id: 2,
        name: "Binh",
        score: 6
    },
    {
        id: 3,
        name: "Chi",
        score: 9
    },
    {
        id: 4,
        name: "Dung",
        score: 5
    }
];

function getExcellentStudents(students) {
    return students.filter(s => s.score >= 8)
        .sort((a, b) => b.score - a.score)
        .map(s => ({
            name: s.name,
            score: s.score
        }));
}

const excellentStudents = getExcellentStudents(students);
const container = document.getElementById('result-container');

container.innerHTML = `<pre>${JSON.stringify(excellentStudents)}</pre>`;

container.innerHTML = htmlContent;