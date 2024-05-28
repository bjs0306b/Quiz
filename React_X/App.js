document.getElementById('inuButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://localhost:3000/web') // json-server의 주소입니다
        .then(response => {
            return response.json();
        })
        .then(profile => {
            localStorage.setItem('webData', JSON.stringify(profile));
            displayData(profile);
        })
}

function displayData(profile) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    profile.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `Class: ${item.class}`;
        output.appendChild(div);
    });
}
