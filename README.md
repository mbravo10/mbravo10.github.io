# Details

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React Bootstrap 
- Function Components with hooks
- Class Components 
- Tic Tac Toe game with *following requirements met*
1. Public repo found in [mbravo10 Github](https://github.com/mbravo10/mbravo10.github.io)
2. Game has 6 function components and 1 class component (7 total)
3. Components are found in [src/components](https://github.com/mbravo10/mbravo10.github.io/tree/main/src/components) 
4. The component, Jumboheader, has a JSON data file that reads the game name and game user from the [public/data.json file](https://mbravo10.github.io/data.json)
5. Game is deployed to this link [HERE](https://mbravo10.github.io/)
6. Tests can be found [HERE](https://github.com/mbravo10/mbravo10.github.io/tree/main/tests)

###``` Score - 100%```

# Details on tests 

- Used Puppeteer testing framework to test UI of the main class component, Gameboard.js 
- These tests are ran headless (without opening a browser)
- Their API docs can be found [by clicking here](https://developers.google.com/web/tools/puppeteer)

![Pic of tests](/tests/passedTests.png)

# To play
- First go to https://mbravo10.github.io/
1. Any square in game cane be clicked 
2. If you get a winning 3, the buttons will be disabled
3. To reset game press the reset game button and state goes back to normal while saving the current match stats
4. To reset the whole game, select the *Reset board and winners* button
5. Have fun!

![Gameplay](/tests/howTo.png)