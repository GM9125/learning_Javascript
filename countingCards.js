var count = 0;

function countCards(card){
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:

            count++;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

        var holdbet = "hold";
        if (count>0){
            holdbet = 'Bet';
        }


        return count + " " + holdbet;
}

countCards(2); countCards('K'); countCards(10); countCards('K'); countCards('A');
console.log(countCards(4));