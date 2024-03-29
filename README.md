# **STAR MATCH**

## TABLE OF CONTENT 
* [Introduction](#introduction)
* [UX](#ux)
* [Features](#features)
* [Features](#features)
* [Technologies used](#technologies_used)
* [Javascript game logic](#javascript_game_logic)
* [Testing](#testing)
* [Deployment](#deployment)
* [Future improvments](#future_improvements)
* [Credits](#credits)

## INTRODUCTION 

This project is a Star Wars themed memory match game. The game objective is to match the
cards with a minimum  amount of tries. The game can also be used as a brain training tool 
to primarily strengthen memory whilst also being fun to play.

![Responsive image for game](assets/doc/responsive.png)

The game is more geared towards Star Wars fans and incorportes Star Wars themed images, audio and
facts with the intention of improving the overall playing experience. 

## UX 

By visiting this site the user should:
* improve congnitive function  
* be able to navigate through the site with minimal difficulty. 
* be able to modify settings to suit user requirements. 
* have feedback on how well the user is performing.
* have a fun experience while playing.
* be exposed to general Star Wars character facts.

A wireframe was constructed using balsamique wireframes. It can be found  [here](assets/doc/wireframe.pdf).

## FEATURES

The site consists of a two page design. The first page consists of the game which is made up of a logo, 
card grid system, control buttons, counter and footer. Two modals have also been included and described below.

![Image of cards](assets/doc/main.png)

The second page consists of card grid system which can be clicked to show character facts with a home button to return
back to game. The second page was not originally planned and was added as an afterthought to improve user experience.

![Image of cards](assets/doc/facts.png)

### Grid system

The card grid system forms the main part of the site whereby the user can select a pair of cards for comparison.
The design also includes a hover effect to assist the user is knowing which card will be selected.

### Control buttons

2 control buttons were included. The restart button permits the user to reset the game whilst the sound button
removes/adds sound effects.

### Counter

A counter was included to provide the user with a running count of every turn made.

### Modals

Two modals were included for the game. The first one permits the user to choose a difficulty level
which would change the size of card grid system. The second modal activated when the game was complete and contained:
* stats on the number of turns required to complete the game
* Star Wars character fact obtained from https://swapi.py4e.com API 
* a button to play again.

![Image of cards](assets/doc/level.png)

### footer

A footer was added which incoporated social links to:
* official Star Wars facebook site
* official Star Wars twitter site
* official Star Wars Istagram site

## TECHNOLOGIES_USED

* HTML
* css 
* javacript
* Jquery to simplify DOM manipulation
* official W3C validator to check HTML syntax
* css official validator(jigsaw) to check css syntax
* JSHint to check javacript syntax 
* Jasmine testing framework for unit testing
* Chrome developers tools for analysing scripts and debugging
* Bootstrap 4 for page layout purposes and responsive design aspects
* balsamiq wireframes application to create the site design


## JAVASCRIPT_GAME_LOGIC

The code logic behind the main game was as follow:
* Determine grid size my selecting difficulty level which would hide or expose div elements which specific classes.
* Provide the attribute of '.card' and '.character' (e.g ".yoda") to the class of all card elements using a for loop for the
'.character' class.
The '.card' class would be situated below '.character' class in css to make it the dominant class.
* Select two cards. 
* For each card selected the class attribute of '.card' would be removed using removeClass method, which would expose the '.character' class.
* A Comparison of the remaining class attribute of the two selected cards is then performed.
* If the remaining class attribute for two cards are the same then the off click method (.off("click")) would be applied and match count increased by 1.
* If the remaining class attribute are not the same the class attribute of ".card" would be added back which would hide the character class.
* sequence continues until all '.character' classes are exposed which is identified by using match count and grid size. 


## TESTING 

The following provides details of testing performed during development.

### UX testing

The goals set out in the UX section were accomplished as follows:

1. User goal: *Improve congnitive function*<br>
Although difficult to measure, memory match games have been shown to be an effective brain training tool, especially
improving:
* concentration
* shorterm memory
* attention to detail 
* finding similarities and differences in objects

2. User goal: *Be able to navigate through the site with minimal difficulty*</br>
The site design used straight forward user friendly step-by-step guides to help assist the player navigate
the options with ease. This was further achieved by the use of hide/show jquery methods which manipulated modals and text changes.
For example once the user selected "click here to play' the grid system would appear together with a 
modal allowing the user to select grid size. Also the text "click here to play" changes to "match the cards" indicating that the game has started.
This was further tested by allowing test users to play the game with minimum prompting.

3. User goal: *Be able to modify settings to suit user requirement*</br>
This was primarily achieved by providing a level select option which would change the card grid size and hence difficulty.
There is also a sound on/off and restart button to modify settings.

4. User goal: *Have feedback on how well the user is performing*</br>
This was achieved by audio and visual means. Firsly a specific audio can be heard if the match is correct or
not. Secondly a counter is provided indicating how many turns have been taken which can be used as a
baseline for future game attempts.

5. User goal: *Have a fun experience while playing*</br>
This was achieved by using Star Wars themed design which made the game more visually appealing.

6. User goal: *Be exposed to general Star Wars character facts*</br>
This was achieved by consuming a Star Wars API provided by https://swapi.py4e.com. This would provide a random character
fact highlighting the characters name, height, weight, and hair-clour when the game finished. A second page
was also included during delvelopment which allowed the user to click on specific Star wars characters to obtain facts.


### Validators
Code syntax were checked for errors with the following validators:
* official W3C validator
* css official validator(jigsaw)
* JSHint 

![Image of html validator](assets/doc/htmlValidator.png)
![Image of html validator](assets/doc/cssValidator.png)

All tests passed sucessfully except for Jshint with the warning " 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).".</br>
This is due to the syntax used for defining variables.


### Chrome DevTools

Chrome DevTools were used extensively during development phase to assist in:
* page layout issues 
* checking errors
* debugging
* verifying correct output using console  

### Jasmine unit testing
Some testing using Jasmine framework was performed during game development on the main javascript to ensure 
functions were defined and output were correct. Tests were successful.

![Image of cards](assets/doc/jasmine.png)

### Game testing

The game was tested with friends and relatives and feedback provided. Consequently some adjustments were then made. For example an audio
sound effect was added when cards did not match and a image was added to the main screen on initial load.

### Reponsive design

The site was viewed on different device sizes to check for correct reponsive design. This was done using primarily
Chrome DevTools with different emulated devices(moto G4, iphone 6/7/8, ipad, ipad pro etc...). The game was also 
played on smart phones, tablets and desktop computers. 
A final check was done using the website http://ami.responsivedesign.is/.  

### Issues Encountered during development 

1. Once a specific card was clicked it could be selected again causing the card game logic to breakdown. This was 
resolved by adding a condition in the click function whereby clicked card could not be seleted again. 

2. Once the game was reset using the restart button the game logic would breakdown. Problem was identified
with one of the conditions contained in the click function. Problem Was resolved by changing ($(this).attr("class")).length)>=5 to
($(this).attr("class")).length)>=6.

3. The Star Wars character funfact at the end of the game would not show up if a status 404 was obtained.
To resolve this issue an else if statement was included in the getData function so that if a status 404 was obtained a default character fact would 
appear. Character chosen was Luke Skywalker. This was further tested by providing an incorrect URL to the getdata function 
and checking the output.</br>
In the case of character facts on the character-info.html page, if a status of 404 occured then data unavailable would appear in
the fields. 
![Image of unavailable data](assets/doc/data.png)

4. After second card selection, if the cards did not match, both cards would flip immediately back. This would not give sufficient
time for the user to identify which card was selected. This issue was resolved by adding a setTimeout function.

5. On the level select modal the play button could be pressed without a level being selected. To fix this bug
a condition was added to activate the play button only when a level was selected and the "choose your difficulty level" text 
was made to blink so as to prompt the user.

6. After completing the game and pressing the restart button, two modals would superimpose on each other. This bug was fixed
by hiding the 'gameEnd' module if the restart button is pressed.

7. Once the main page was loaded it was advised by a tester to add a a image since the page lacked content. Consequently a 
galactic senate logo was added. The logo disappears once the grid appears.

8. Each star wars character had its own character class which was very repetitive with only a change in image URL. To avoid having
to repeat each character class, consuming large amount of css lines, a solution was found whereby the background-image URL was added 
with Javacsript once the card was selected. This provided a more efficient style sheet. 


## DEPLOYMENT
Gitpod was used as an online IDE and then pushed to GITHUB for [hosting](https://zahur76.github.io/MilestoneProject2/).

To deploy the project on github pages the following steps were used:
1. Login to Github and select the the MilestoneProject2 repository.
2. Press the setting button on the top menu bar located on the right-hand side.
![image of github menu bar](assets/doc/github.png)
3. Scroll down to the Github pages section and select Master branch from the dropdown menu and press save.
![image of github pages section](assets/doc/githubpages.png)
4. Once completed an active link is published for the repository. 

## FUTURE_IMPROVEMENTS

Add a countdown option to add another level of difficulty to the game.

## CREDITS

### Content

* Star Wars character facts obtained from open source API provided by https://swapi.py4e.com.
* dev.to was consulted to assist in footer placement.

### Media

* Sound clips were obtained from https://www.101soundboards.com/.
* card images obtained from Etsy.com.
* logo obtained from https://flamingtext.com/.
* fontawesome.com

### Acknowledgment

* I would like to thank zara meerun, sofia meerun and behlal meerun  for testing the game.






