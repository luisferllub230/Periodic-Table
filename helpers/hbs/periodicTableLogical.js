const periodicTable = ["H","Be","Mg"];


const separators = value1 => {
    for (const i in periodicTable) {
        if (periodicTable[i] === value1) {
            return true;
        }
    }
};


exports.separators = separators;