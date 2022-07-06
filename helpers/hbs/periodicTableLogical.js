
let container = false;
const lookingForCharacter = (value1) => { 
    let callback = (value2) => {
        value1 === "0" ?  container = true : container = false;
    }
    callback(value1);
    return container;
}

const noLookingForCharacter = (value1) => { 
    let callback = (value2) => {
        value1 !== "0" ?  container = true : container = false;
    }
    callback(value1);
    return container;
}

exports.lookingForCharacter = lookingForCharacter;
exports.noLookingForCharacter = noLookingForCharacter;