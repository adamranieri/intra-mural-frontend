function gameTableRowHTML(game){
    const {gameStart,venueTitle,homeTeam,awayTeam,outcome} = game;
    const gameDate = new Date(gameStart*1000);
    return`<tr>
        <td>${gameDate.toLocaleDateString()}</td>
        <td>${gameDate.toLocaleTimeString()}</td>
        <td>${venueTitle}</td><td>${homeTeam}</td>
        <td>${awayTeam}</td><td>${outcome}</td>
        <td><button>Scorecard</button>
    </tr>`
}

function venueTableRowHTML(venue) {
    const {title} = venue;
    return `<tr><td>${title}</td></tr>`
}

function seasonTableRowHTML(season) {
    const {title} = season;
    return `<tr><td>${title}</td></tr>`
}

function gamesAndRefereeTableRowHTML(gamesAndReferee) {
    const {gameRequestId,gameId,userId,venue,season} = gamesAndReferee;
    return`<tr>
        <td>${gameRequestId}</td><td>${gameId}</td>
        <td>${userId}</td><td>${venue}</td><td>${season}</td>
    </tr>`
}

function userTableRowHTML(user) {
    const { userId, username, role } = user;
    return `<tr><td>${userId}</td><td>${username}</td><td>${role}</td>
        ${role === 'player' ? `<td><button onclick="promoteToAdmin(${userId})">Promote To Admin</button></td><td><button onclick="promoteToReferee(${userId})">Promote To Referee</button</td>` : `<td><button onclick="demoteToPlayer(${userId})">Demote To Player</button></td>`}
        </tr>`
}

function optionHTML(title,value){
    return `<option value="${value}">${title}</option>`
}

function changePasswordInputType() {
    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
}
