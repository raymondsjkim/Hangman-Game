"use strict";

var Hangman = {
    words:            ["peacock", "crow", "pigeon", "eagle", "hawk"], // Set of words for hangman to choose from
    currentWord:      '', // Current word for the game
    correctGuesses:   [], // Correct letters the user has guesses
    incorrectGuesses: [], // Wrong letters the user has guessed
    maxGuesses:        7, // Maximum number of wrong guesses the user is allowed

    init: function() {
        // console.log("init");
        
        $("#start-btn").click(function() {
            $("#hangman-container").css("display", "inherit");
            Hangman.gameStart();
            Hangman.findLetterInWord();
        });
        $("#guess-letter").click(function() {  
            Hangman.letterEnterHandler();
        });
    },


    gameStart: function() {
        // console.log("gameStart");
        this.pickWord();
    },

    pickWord: function() {
        // console.log("pickWord");
    
        var arrayLength = this.words.length;
            // console.log(arrayLength);

        // Index of the word in the array
        var indexOfWord = this.getRandomInt(0, arrayLength-1);
            // console.log(indexOfWord);

        this.currentWord = this.words[indexOfWord];
        // console.log(this.currentWord);

        this.currentWord = this.currentWord.toLowerCase();
        console.log("The selected word is " + this.currentWord);

    },

    letterEnterHandler: function() {
        // console.log("letterEnterHandler");
    
        // the GUESSED LETTER INPUT
        var letter = $("#input-letter").val();
        letter = letter.toLowerCase();
        console.log(letter);

        // Clears the letter when player clicks the Guess a Letter button
        // $("#input-letter").val('');

        if(this.hasLetterBeenGuessed(letter)) {
            $("#guessed-words").append("<span>" + letter + " " +  "</span>");
        }

        // pass letter to its function
        if(this.isLetterInWord(letter)) {
            this.addCorrectGuess(letter);
            this.findLetterInWord(letter);  
            // console.log("true");
            
            alert("CORRECT! " + '"' +  letter + '"' + " is in the word");

        } else {
            this.addIncorrectGuess(letter);
            // console.log("false"); 
            alert("NOPE! " + '"' +  letter + '"' + " is not in the word");
        }


        $("#input-letter").val('');

        this.gameEnd();
        this.isGameWon();

    },

    getRandomInt: function(min, max) {
        // console.log("getRandomInt");
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    hasLetterBeenGuessed: function(letter) {
        // console.log("hasLetterBeenGuessed");

        if(this.correctGuesses.indexOf(letter) >= 0 || 
            this.incorrectGuesses.indexOf(letter) >=0) {
            return true;
        } else {
            return false;
        }
    },

    isLetterInWord: function(letter) {
        // console.log("isLetterInWord");

        var isInLetterInt = this.currentWord.indexOf(letter);
        
        // console.log(isInLetterInt);
        
        if(isInLetterInt >= 0) {
            return true;
        } else {
            return false;
        }


    },

    findLetterInWord: function(letter) {
        // console.log("findLetterInWord");
 
        // create new empty array
        var result = [];
        var wordArray = this.currentWord.split('');
        
        // console.log(wordArray);
        
        wordArray.forEach(function(lchar, indexOfWord) {

            if(lchar === letter) {
                result.push(indexOfWord);
                // console.log(indexOfWord);
                $("#word").append("<span>"+lchar+"</span>");
            }
        });
        console.log(result);
        return result;
    },

    addCorrectGuess: function(letter) {
        // console.log("addCorrectGuess");
        
        this.correctGuesses.push(letter);


        // console.log(this.correctGuesses.push(letter));
    },
    addIncorrectGuess: function(letter) {
        // console.log("addIncorrectGuess");
        
        this.incorrectGuesses.push(letter);
    },

    isGameWon: function() {
        
        if(this.correctGuesses.length === this.currentWord.length) {
            alert("winnnnnnnner");
        }

        // for (var i = 0; i < this.currentWord.length; i++) {
        //     console.log(this.currentWord[i]);
        // }
       
    },
    
    gameEnd: function() {
        console.log("gameEnd");
        
        // player lives
        if(this.incorrectGuesses.length >= this.maxGuesses) {
            alert("you have lost");
            $("img").css("display", "inherit");
        }
    }
};

Hangman.init();
