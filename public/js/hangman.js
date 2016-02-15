"use strict";

var Hangman = {
    words:            ['crow', 'pigeon', 'dove', 'hawk', 'duck'], // Set of words for hangman to choose from
    currentWord:      '', // Current word for the game
    correctGuesses:   [], // Correct letters the user has guesses
    incorrectGuesses: [], // Wrong letters the user has guessed
    maxGuesses:        0, // Maximum number of wrong guesses the user is allowed

    /**
     * Do all the initial game setup, register any necessary event listeners.
     * This method should only be run once.
     */
    init: function() {
        console.log("init was called");
        // attach a click event listener to a "start" button
        $("#start-btn").click(function() {
            $("#hangman-container").css('display', 'inherit');
            Hangman.gameStart();
        });
    },

    /**
     * Start a new game. Should be used whenever a new hangman game is begun.
     */
    gameStart: function() {
        console.log("gameStart was called");

        /*       
            PLAYERS INPUT (calls letterGuessedHandler function)
        */
        $("#guess-letter").click(function() {
           Hangman.letterGuessedHandler();
        });
        /*       
            Starting new random word (call pickWord)
        */
        this.pickWord();
        // hide the start button
        $("#start-btn").css('display', 'none');
        
        // display a blank for each letter in currentWord 
        for (var i = 0; i < Hangman.currentWord.length; i++) {
            // console.log(this.currentWord[i]);
            $("#dashed-letter-line").append("<span>" + Hangman.currentWord[i] + "</span>");
        }

        /*       
            Player chooses random word **WORK ON THIS LATER**
        */
        $("#new-word").click(function() {
            // Hangman.pickWord();
            
        });
    },

    /**
     * Pick a new random word and assign it to the currentWord property
     */
    pickWord: function() {
        console.log("pickWord was called");
        var arrayLength = this.words.length;
            // console.log(arrayLength);

        // Index of the word in the array
        var indexOfWord = this.getRandomInt(0, arrayLength-1);
        // console.log(indexOfWord);

        this.currentWord = this.words[indexOfWord];
        console.log(this.currentWord);

        this.currentWord = this.currentWord.toLowerCase();
        // console.log("The selected word is " + this.currentWord);
        

    },

    /**
     * The game has finished. Use this method at the end of the game if necessary
     * to remove things like event listeners or display a "New Game" button.
     */
    gameEnd: function() {
        console.log("gameEnd was called");
        // if game was won, show success alert
        // if game was lost, show failure alert
        // remove the keyPress listener
        // show the start button
    },

    /**
     * Event handler for when a keyboard key is pressed.
     *
     * @param Event event - JavaScript event object
     */
    letterGuessedHandler: function(event) {
        console.log("keyPressHandler was called");

        var guessedLetter = $("#input-letter").val();
        console.log(guessedLetter);



            // check if letter has been guessed before
            // check if letter is in the word
            // add to either correct or incorrect guesses
            // check if isGameWon, call endGame
            // check if incorrectGuesses.length >= maxGuesses, call endGame
        
    },

    /**
     * Random number generator, should return an integer between min and max.
     *
     * @param integer min
     * @param integer max
     *
     * @return integer
     */
    getRandomInt: function(min, max) {
        // console.log("getRandomInt was called with " + min + " and " + max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Check if the user has guessed a given letter before (either right or wrong).
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    hasLetterBeenGuessed: function(letter) {
        console.log("hasLetterBeenGuessed was called with " + letter);
        // if letter is is correctGuesses return true
        // if letter is in incorrectGuesses return true
        // all else return false


    },

    /**
     * Return whether or not a letter is in the current word.
     *
     * @param string letter - Letter the user typed
     *
     * @return boolean
     */
    isLetterInWord: function(letter) {
        console.log("isLetterInWord was called with " + letter);
        // use indexOf to check if letter is in currentWord
    },

    /**
     * Return the indexes where a given letter occurs in the current word
     * For example, if the word is "banana", and the letter passed was "a"
     * then this function should return [1, 3, 5]. If the letter passed was
     * "b" then the function should return [0]. If the letter was "q" then
     * it should return [].
     *
     * @param string letter - Letter the user typed
     *
     * @return array - Array of indexes in the word
     */
    findLetterInWord: function(letter) {
        console.log("findLetterInWord was called with " + letter);
        var indexes = [];

        // loop through each character in currentWord
        // if that character is equal to letter add its index to the indexes array

        return indexes;
    },

    /**
     * Add a letter to the array of correct guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addCorrectGuess: function(letter) {
        console.log("addCorrectGuess was called with " + letter);
        // add letter to the correctGuesses array
        // find where in the word it is using findLetterInWord
        // display letter in the blanks on the page at the given indexes
    },

    /**
     * Add a letter to the array of incorrect guesses and handle any additional steps
     *
     * @param string letter - Letter the user typed
     */
    addIncorrectGuess: function(letter) {
        console.log("addIncorectGuess was called with " + letter);
        // add letter to the incorrectGuesses array
        // display the letter in the page as an incorrect guess
        // reveal more of the "man"
    },

    /**
     * Check whether all the letters in the word have been guessed
     *
     * @return boolean
     */
    isGameWon: function() {
        console.log("isGameWon was called");
        // loop through each letter in current word
        // if that letter is not in correctGuesses, return false
        // if we pass through the loop, every letter in the word was in our set of correct guesses; return true
    }
};

Hangman.init();



