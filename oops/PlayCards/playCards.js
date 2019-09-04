/************************************************************************
 * @purpose :distribution of deck of cards
 * @file: playCardBL.js
 * @overview:  initializing deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades")
 *  & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 *  Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and
 *  Print the Cards the received by the 4 Players using 2D Array…

 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 03/09/2019
 */

const input=require("readline-sync");
const playCardobject=require("../PlayCards/playCardsBL");

console.log(playCardobject.suffle());