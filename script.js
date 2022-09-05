var createPolitician = function(name, partyColor) {

    var politician = { };
    politician.name = name;
    politician.partyColor = partyColor;

    politician.electionResults = null;
    politician.totalVotes = 0;
    
politician.tallyUpTotalVotes = function() {
 
this.totalVotes = 0;

for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
}

};

    return politician;

};

var stephanie = createPolitician("Stephanie Harpist", [132, 17, 11]);

var justine = createPolitician("Justine Trudawg", [245, 141, 136]);

console.log("Stephanie’s colour is: " + stephanie.partyColor);
console.log("Justine’s colour is: " + justine.partyColor);

stephanie.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7,  2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

justine.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

stephanie.electionResults[9] = 1;
justine.electionResults[9] = 28;

stephanie.electionResults[4] = 17;
justine.electionResults[9] = 38;

stephanie.electionResults[43] = 11;
justine.electionResults[43] = 27;

console.log(stephanie.electionResults);
console.log(justine.electionResults);

stephanie.tallyUpTotalVotes();
justine.tallyUpTotalVotes();

console.log(stephanie.totalVotes);
console.log(justine.totalVotes);

var winner = '???';

if (stephanie.totalVotes > justine.totalVotes) {
    winner = stephanie.name;
} else if (stephanie.totalVotes < justine.totalVotes) {
    winner = justine.name;
} else {
    winner = 'DRAW';
}

var setStateResults = function(state) {
    theStates[state].winner = null;

if (stephanie.electionResults[state] > justine.electionResults[state]) {

    theStates[state].winner = stephanie;

} else if (stephanie.electionResults[state] < justine.electionResults[state]) {

    theStates[state].winner = justine;

}
var stateInfoTable = document.getElementById('stateResults');
var header = StateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidateName2 = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnerName = body.children[2].children[1];

};

var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates.rgbColor = [11, 32, 57];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = '(' +theStates[state].nameAbbrev + ')';

candidate1Name.innerText = stephanie.name;
candidate2Name.innerText = justine.name;

candidate1Results.innerText = stephanie.electionResults[state];
candidate2Results.innerText = justine.electionResults[state];

if (theStates[state].winner === null) {
winnerName.innerText = 'DRAW';
} else {
winnersName.innerText = theStates[state].winner.name;

}

}

console.log = ('AND THE WINNER IS' + winner + '!!!');

var countryInfoTable = document.getElementById(countryResults);
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = stephanie.name;
row.children[1].innerText = stephanie.totalVotes;
row.children[2].innerText = justine.name;
row.children[3].innerText = justine.totalVotes;
row.children[5].innerText = winner;