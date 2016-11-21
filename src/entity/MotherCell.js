var Cell = require('./Cell');
var Food = require('./Food');
var Virus = require('./Virus');

function MotherCell() {
    Cell.apply(this, Array.prototype.slice.call(arguments));

    this.cellType = 2;
    this.isSpiked = true;
    this.isMotherCell = true;       // Not to confuse bots
    this.motherCellMinSize = 149;   // vanilla 149 (mass = 149*149/100 = 222.01)
    this.motherCellSpawnAmount = 2;
    if (!this.getSize()) {
        this.setSize(this.motherCellMinSize);
    }
}

module.exports = MotherCell;
MotherCell.prototype = new Cell();

// Main Functions

MotherCell.prototype.canEat = function (cell) {
    return cell.cellType == 0 ||    // can eat player cell
        cell.cellType == 3;         // can eat ejected mass
};

MotherCell.prototype.onEaten = Virus.prototype.onEaten; // Copies the virus prototype function

MotherCell.prototype.onEat = function (prey) {
    // Called to eat prey cell
    this.setSize(Math.sqrt(this.getSizeSquared() + prey.getSizeSquared()));

    var size = (this.gameServer.config.foodMaxSize - this.gameServer.config.foodMinSize * Math.random());
    var counts = prey.getSize() / size;

    for (var i = 0; i < counts; i++) {
        // Spawn food with size2
        var angle = Math.random() * 2 * Math.PI;
        var r = this.getSize();
        var pos = {
            x: this.position.x + r * Math.sin(angle),
            y: this.position.y + r * Math.cos(angle)
        };

        // Spawn food
        var food = new Food(this.gameServer, null, pos, size);
        food.setColor(this.gameServer.getRandomColor());
        this.gameServer.addNode(food);

        // Eject to random distance
        food.setBoost(62 + 62 * Math.random(), angle);
    }
};

MotherCell.prototype.onUpdate = function () {
    if (this.getSize() < this.motherCellMinSize) {
        return;
    }

    if (this.getSize() > this.motherCellMinSize) {
        var size = this.getSize();
        size -= (this.gameServer.config.ejectSize / 8);
        if(size < this.motherCellMinSize) size = this.motherCellMinSize;
        this.setSize(size);
        return;
    }

    if(1 * Math.random() > 0.15) {
        return;
    }

    var maxFood = this.gameServer.config.foodMaxAmount;
    if (this.gameServer.currentFood >= maxFood) {
        return;
    }
    var size1 = this.getSize();
    var size2 = (this.gameServer.config.foodMaxSize - this.gameServer.config.foodMinSize * Math.random());
    for (var i = 0; i < this.motherCellSpawnAmount; i++) {
        size1 = Math.sqrt(size1 * size1 - size2 * size2);
        size1 = Math.max(size1, this.motherCellMinSize);
        this.setSize(size1);

        // Spawn food with size2
        var angle = Math.random() * 2 * Math.PI;
        var r = this.getSize();
        var pos = {
            x: this.position.x + r * Math.sin(angle),
            y: this.position.y + r * Math.cos(angle)
        };

        // Spawn food
        var food = new Food(this.gameServer, null, pos, size2);
        food.setColor(this.gameServer.getRandomColor());
        this.gameServer.addNode(food);

        // Eject to random distance
        food.setBoost(32 + 32 * Math.random(), angle);

        if (this.gameServer.currentFood >= maxFood || size1 <= this.motherCellMinSize) {
            break;
        }
    }
    this.gameServer.updateNodeQuad(this);
};

MotherCell.prototype.onAdd = function () {
    var random = Math.floor(Math.random() * 21) - 10;
    this.setColor({
        r: gameServer.config.virusColor.r + random,
        g: gameServer.config.virusColor.g + random,
        b: gameServer.config.virusColor.b + random
    });
    this.gameServer.nodesVirus.push(this);
};

MotherCell.prototype.onRemove = function () {
    var index = this.gameServer.nodesVirus.indexOf(this);
    if (index != -1) {
        this.gameServer.nodesVirus.splice(index, 1);
    } else {
        Logger.error("Virus.onRemove: Tried to remove a non existing virus!");
    }
};
