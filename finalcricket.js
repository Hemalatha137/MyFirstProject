document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('newsList');
    const newsItems = [
        { title: "Team A wins against Team B", date: "2024-08-01" },
        { title: "Player X scores a century", date: "2024-07-31" },
        { title: "Team C sets a new record", date: "2024-07-30" },
    ];

    newsItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.date} - ${item.title}`;
        newsList.appendChild(li);
    });
});
