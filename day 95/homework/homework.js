document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const id = document.getElementById('id').value;
    const height = document.getElementById('height').value;
    const description = document.getElementById('description').value;

    const randomNum = Math.floor(Math.random() * 1000);

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}${randomNum}@example.com`;

    const personDiv = document.createElement('div');
    personDiv.innerHTML = `
        <strong>Name:</strong> ${firstName} ${lastName}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>ID:</strong> ${id}<br>
        <strong>Height:</strong> ${height} cm<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Email:</strong> ${email}<br>
    `;

    document.getElementById('peopleList').appendChild(personDiv);

    document.getElementById('personForm').reset();
});
