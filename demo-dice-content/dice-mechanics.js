// DnD Dice Roller Mechanics
class DiceRoller {
    constructor() {
        this.history = [];
    }
    
    roll(sides, count = 1) {
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(Math.floor(Math.random() * sides) + 1);
        }
        
        this.history.push({
            sides,
            count,
            results,
            timestamp: new Date()
        });
        
        return results;
    }
    
    rollMultiple(diceConfig) {
        // diceConfig: [{sides: 20, count: 1}, {sides: 6, count: 2}]
        const allResults = {};
        
        diceConfig.forEach(config => {
            const key = `d${config.sides}`;
            allResults[key] = this.roll(config.sides, config.count);
        });
        
        return allResults;
    }
}

module.exports = DiceRoller;
