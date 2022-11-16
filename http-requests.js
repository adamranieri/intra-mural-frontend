
const server = "http://127.0.0.1:7000";

async function sendLogin(username, password){
    const body = JSON.stringify({username,password});
    const result = await fetch(`${server}/login`,{method:"POST", body, headers:{"Content-type":"application/json"}, credentials:"include"});
    const responseBody = await result.json();
    
    return responseBody;
}

async function sendLogout() {
    const result = await fetch(`${server}/logout`, {method:"POST", credentials:"include"});
    return result;
}

async function sendUserUpdate(username, password, heightInches, weightLbs, profilePic, hideBiometrics) {
    const body = JSON.stringify({username, password, heightInches, weightLbs, profilePic, hideBiometrics});
    const result = await fetch(`${server}/users`, {method:"PUT", body, credentials:"include"});
    const responseBody = await result.json();

    return responseBody;
}

async function sendUserRegistration(username, password, heightInches, weightLbs, profilePic, hideBiometrics) {
    const body = JSON.stringify({username, password, heightInches, weightLbs, profilePic, hideBiometrics});
    const result = await fetch(`${server}/users`, {method:"POST", body, headers:{"Content-type":"application/json"}, credentials:"include"});
    const responseBody = await result.json();

    return responseBody;
}

async function retrieveAllUsers() {
    const result = await fetch(`${server}/users`);
    const users = await result.json();
    return users;
}

async function demoteToPlayer(userId) {
    const result = await fetch(`${server}/users/${userId}/role`, {method:"PATCH", body: JSON.stringify({role: "player"}), headers:{"Content-type":"application/json"}, credentials:"include"})
    document.location.reload();
}

async function promoteToAdmin(userId) {
    const result = await fetch(`${server}/users/${userId}/role`, {method:"PATCH", body: JSON.stringify({role: "admin"}), headers:{"Content-type":"application/json"}, credentials:"include"})
    document.location.reload();
}

async function promoteToReferee(userId) {
    const result = await fetch(`${server}/users/${userId}/role`, {method:"PATCH", body: JSON.stringify({role: "referee"}), headers:{"Content-type":"application/json"}, credentials:"include"})
    document.location.reload();
}

async function sendTeamRegistration(name, captain, teamStatus, sport){
    const body = JSON.stringify({name,captain,teamStatus,sport});
    const result = await fetch(`${server}/teams`,{method:"POST", body, headers:{"Content-type":"application/json"}, credentials:"include"});
    return result.status === 204;
}

async function sendGame(game){
    const body = JSON.stringify(game);
    const result = await fetch(`${server}/games`,{method:"POST", body, headers:{"Content-type":"application/json"}, credentials:"include"});
    const savedGame = await result.json();
    return savedGame;
}

async function sendSeason(title) {
    const body = JSON.stringify({title});
    const result = await fetch(`${server}/seasons`,{method:"POST", body, headers:{"Content-type":"application/json"}, credentials:"include"})
    const savedSeason = await result.json();
    return savedSeason
}

async function retrieveAllVenues(){
    const result = await fetch(`${server}/venues`);
    const venues = await result.json();
    return venues;
}

async function retrieveAllTeams(){
    const result = await fetch(`${server}/teams`);
    const teams = await result.json();
    return teams;
}

async function retrieveAllSeasons(){
    const result = await fetch(`${server}/seasons`);
    const seasons = await result.json();
    return seasons;
}

async function retrieveAllGames(){
    const result = await fetch(`${server}/games`);
    const games = await result.json();
    return games;
}

async function retrieveRosterForTeam(teamName){
    const result = await fetch(`${server}/teams/${teamName}/players`);
    const players = await result.json();
    return players;
}

async function retrieveStatsForPlayer(playerId = 0,sport =""){ // returns stats
    const result = await fetch(`${server}/players/${playerId}/stats?sport=${sport}`)
    const stats = await result.json();
    return stats;
}

async function retreiveGameStats(gameId = 0){ // returns stats
    const result = await fetch(`${server}/stats?gameId=${gameId}`)
    const stats = await result.json();
    return stats; 
}