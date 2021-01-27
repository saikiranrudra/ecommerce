// To create a state object

class DataClass {
    constructor(state) {
        this.state = state;
    }
    
    set(key, value, callback) {
        console.log("Key: " + key);
        console.log("Value: " + value);
        this.state[key] = value;
        // callback is called on value change
        callback(this.state);
    }
    
    get() {
        return this.state;
    }
}

module.exports = DataClass;