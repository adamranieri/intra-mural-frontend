
const server = "http://localhost:7000";

async function sendLogin(username, password){
    const body = JSON.stringify({username,password});
    const result = await fetch(`${server}/login`,{method:"POST", body, headers:{"Content-type":"application/json"}});
    const responseBody = await result.json();
    return responseBody;
}

async function sendTeamRegistration(name, captain, teamStatus, sport){
    const body = JSON.stringify({name,captain,teamStatus,sport});
    const result = await fetch(`${server}/teams`,{method:"POST", body, headers:{"Content-type":"application/json"}});
    return result.status === 204;
}

async

async function sendGame(game){
    const body = JSON.stringify(game);
    const result = await fetch(`${server}/games`,{method:"POST", body, headers:{"Content-type":"application/json"}});
    const savedGame = await result.json();
    return savedGame;
}

async function retreiveAllVenues(){
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

async function retrieveGameStatsForUsers(players = [""]){
    
}