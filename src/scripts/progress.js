// Calculate the percentage of properties filled of an object
module.exports.progressCalculate = (object) => {
    let count = 0; // fillCount
    let total = Object.keys(object).length // total properties of an object

    // For each key if value is truty then count as fill
    for (key in object) {
        if(object[key]) {
            count++;
        }
    }
    
    // calculate percentage
    return Math.round((count/total) * 100)
}

// move progress bar based on percentage in UI
module.exports.progressUI = (progressElement, progressAmount) => {
    progressElement.style.width = `${progressAmount}%`
}