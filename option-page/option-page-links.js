const userObj = JSON.parse(localStorage.getItem('user'));

(async function() { 
    if (userObj) {
        const bodyElement = document.getElementsByTagName('body')[0];

        /*
            Players, referees, and admins should all have the ability to 
        */
        // Heading Text
        bodyElement.innerHTML += `<h1>${userObj.role.charAt(0).toUpperCase() + userObj.role.substr(1).toLowerCase()} Page</h1>`;
        
        // Welcome Text
        bodyElement.innerHTML += `<div><p>Welcome, ${userObj.username}!</p>${userObj.profilePic != 'none' ? `<img src="${userObj.profilePic}" />` : '<p><strong>You have not set a profile picture!</strong></p>'}</div>`;
        
        // Edit Profile
        bodyElement.innerHTML += `<a href="/user-profile/user-profile.html">Edit User Profile</a>`
        
        // Game Schedule Viewer
        bodyElement.innerHTML += `<a href="/game-schedule/game-schedule.html">Games</a>`;
        
        // Venue Viewer
        bodyElement.innerHTML += `<a href="/venue-view/venue-view.html">View Venues</a>`
        
        // Seasons Viewer
        bodyElement.innerHTML += `<a href="/season-view/season-view.html">View Seasons</a>`
        
        /*
            Admin only links
        */
        if (userObj.role === 'admin') {
            bodyElement.innerHTML += `<a href="/add-season/add-season.html">Add Season</a>`
            bodyElement.innerHTML += `<a href="/user-manager/user-manager.html">Manage User Roles</a>`;
            bodyElement.innerHTML += `<a href="/game-form/game-form.html">Schedule Game</a>`
        }
        
        /*
            Player only links
        */
        if (userObj.role === 'player') {
            let teamOfUser = await getTeamOfUser(JSON.parse(localStorage.getItem('user')).userId);

            // Check if player (not captain)
            if (userObj.userId != teamOfUser.captain) {
                bodyElement.innerHTML += `<a href="/team-application/team-application.html">Team Applications</a>`;
            } else {
                bodyElement.innerHTML += `<a href="/team-request-approvedeny/team-request-approvedeny.html">Approve/Deny Team Requests</a>`;
            }
            
            // Check if part of a team
            if (teamOfUser) {
                bodyElement.innerHTML += `<a href="/team-viewer/team-viewer.html">View Your Team</a>`
            }
        }
        
        if (userObj.role === 'referee') {
        
        }
        
        // Logout button
        const logoutButton = document.createElement('button');
        logoutButton.innerHTML = 'Logout';
        logoutButton.addEventListener('click', async () => {
            localStorage.removeItem('user');
            response = await sendLogout();
            if (response.status === 200) {
                document.location.href = '/index.html';
            }
        });
        
        bodyElement.appendChild(logoutButton);
        
    }
})();
