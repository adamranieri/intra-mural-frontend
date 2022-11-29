function gameTableRowHTML(game){
    const {gameStart,venueTitle,homeTeam,awayTeam,outcome} = game;
    const gameDate = new Date(gameStart*1000);
    return`<tr>
        <td>${gameDate.toLocaleDateString()}</td>
        <td>${gameDate.toLocaleTimeString()}</td>
        <td>${venueTitle}</td><td>${homeTeam}</td>
        <td>${awayTeam}</td><td>${outcome}</td>
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

function teamTableRowHTML(team) {
    return (
    `<tr>
        <td>${team.name}</td>
        <td>${team.sport}</td>
        <td>${team.teamStatus}</td>
        <td>${team.applicationStatus}</td>
        <td><button onclick="showCaptainInfo('${team.name}', ${team.captain})">See The Captain</button></td>
    </tr>`);
}

async function showCaptainInfo(teamName, id) {
    let body = document.getElementsByTagName('body')[0];

    let stats = await retrieveStatsForPlayer(id);
    console.log(stats);

    removeCaptainInfo();

    let captainInfoSection = (
        `<section>
            <button onclick="removeCaptainInfo()">Close</button>
            <h2>${teamName}'s Captain</h2>
            <p>Player Id: ${stats.id}</p>
            <p>Username: ${stats.username}</p>
            ${stats.hideBiometrics === false ? `<p>Height (inches): ${stats.heightInches}</p> <p>Weight (lbs): ${stats.weightLbs}</p>` : '<p><strong>The Captain has chosen not to show biometric information</strong></p>'}
            ${stats.profilePic != 'none' ? `<img src="${stats.profilePic}" />` : '<p><strong>The Captain has no profile picture</strong></p>'}
        </section>`
    );

    body.innerHTML += captainInfoSection;
}

function teamApplyOptions(teams) {
    let applyMenu = `
            <select>
                ${(function() {
                    let result = "";
                    for (team of teams) {
                        result += optionHTML(team.name, team.name);
                    }
                    return result;
                })()}
            </select>
            <button onclick=applyForTeam(document.getElementsByTagName('select')[0].value)>Apply</button>
        `;
    
    return applyMenu;
}

function removeCaptainInfo() {
    if (document.getElementsByTagName('section').length > 0) {
        let captainInfo = document.getElementsByTagName('section')[0];

        if (captainInfo) {
            captainInfo.parentNode.removeChild(captainInfo);
        }
    }
}

function changePasswordInputType() {
    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
}
