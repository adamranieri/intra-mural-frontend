

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

function optionHTML(title,value){
    return `<option value="${value}">${title}</option>`
}
