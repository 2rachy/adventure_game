Adventure Game
==============

A choose your own adventure type game. To get started clone the repository on to your machine, then follow the directions below.



Start Game (using a browser)
----------------------------

1. Get into the directory adventure_game/game
>cd "where game is stored on your machine/adventure_game/game"


2. Run
>npm install


3. Run
>ionic serve


This should bring up a new tab in your default browser with the game running.



Start Game (using Cordova simulator)
------------------------------------

1. Get into the directory adventure_game/game
>cd "where game is stored on your machine/adventure_game/game"


2. Run
>npm install -g cordova ionic


3. Run
>ionic platform add ios (or android*)


4. Run
>ionic build ios (or android*)


5. Run
>ionic emulate ios (or android*)

<code>
*If on windows and ionic platform add android (etc) doesn't work. Try replacing the word ionic with cordova and repeat steps 3-4.
</code>

If you have any problems with this I suggest looking at the documentation for ionic at: http://ionicframework.com/getting-started/
