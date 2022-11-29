const userObj = JSON.parse(localStorage.getItem('user'));

const bodyElement = document.getElementsByTagName('body')[0];

/*
    Players, referees, and admins should all have the ability to 
*/
// Heading Text
bodyElement.innerHTML += `<h1>${userObj.role.charAt(0).toUpperCase() + userObj.role.substr(1).toLowerCase()} Page</h1>`;

// Welcome Text
bodyElement.innerHTML += `<div><p>Welcome, ${userObj.username}!</p>${userObj.profilePic != 'none' ? `<img src="${userObj.profilePic}" />` : ''}</div>`;

// Edit Profile
bodyElement.innerHTML += `<a href="/user-profile/user-profile.html">Edit User Profile</a>`

// Game Schedule Viewer
bodyElement.innerHTML += `<a href="/game-schedule/game-schedule.html">Games</a>`;

// Venue Viewer
bodyElement.innerHTML += `<a href="/venue-view/venue-view.html">View Venues</a>`

// Seasons Viewer
bodyElement.innerHTML += `<a href="/season-view/season-view.html">View Seasons</a>`

// Referee and Game Viewer
bodyElement.innerHTML += `<a href="/referee-game-view/referee-game-view.html">View Games and their referees`

/*
    Admin only links
*/
if (userObj.role === 'admin') {
    bodyElement.innerHTML += `<a href="/add-season/add-season.html">Add Season</a>`
    bodyElement.innerHTML += `<a href="/user-manager/user-manager.html">Manage User Roles</a>`;
    bodyElement.innerHTML += `<a href="/game-form/game-form.html">Schedule Game</a>`
}

if (userObj.role === 'player') {

}

if (userObj.role === 'referee') {
    bodyElement.innerHTML += `<a href="/apply-to-game-to-officiate/apply-to-officiate.html">Apply to game to officiate</a>`
}

// Logout button
const logoutButton = document.createElement('button');
logoutButton.innerHTML = 'Logout';
logoutButton.addEventListener('click', async () => {
    response = await sendLogout();
    if (response.status === 200) {
        document.location.href = '/index.html';
    }
});

bodyElement.appendChild(logoutButton);
