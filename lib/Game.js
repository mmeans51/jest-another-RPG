const inquirer = require('inquirer');
const Enemy = require('../lib/Enemy');
const Player = require('../lib/Player');

function Game() {
this.roundNumber = 0;
this.isPlayerTurn = false;
this.enemies = [];
this.currentEnemy;
this.player;
}

Game.prototype.initializeGame = function() {
this.enemies.push(new Enemy('Golin', 'sword'));
this.enemies.push(new Enemy('orc', 'baseball bat'));
this.enemies.push(new Enemy('skeleton', 'axe'));
this.currentEnemy = this.enemies[0];

inquirer
    .prompt({
        type:'text',
        name: 'name',
        message: 'What is your name?'
    })
    //destructure name from the prompt object
    .then(({ name }) => {
        this.player = new Player(name);
        this.startNewBattle();
    })
};

Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    }
    console.log("Your stats are as follows:");
    console.table(this.player.getStats());
    console.log(this.currentEnemy.getDescription());
    this.Battle();
};

Game.prototype.battle = function() {
    if(this.isPlayerTurn) {
        inquirer
            .prompt({
                type:'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['Attack', 'Use potion']
            })
            .then(({ action}) => {
                if(action === 'Use potion') {
                    //follow-up will go here
                
            
    } else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);

        console.log(`You were attacked by the ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());
    }
    });
};
};
module.exports = Game;