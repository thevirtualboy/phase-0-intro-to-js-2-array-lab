// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(`${name}`);
}

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, `${name}`];
    return newCats;
}

function prependCat(name) {
    const moreCats = [`${name}`, ...cats];
    return moreCats;
}

function removeLastCat() {
    const oneLessCat = cats.slice(0, -1);
    return oneLessCat;
}

function removeFirstCat() {
    const firstCatGone = cats.slice(1);
    return firstCatGone;
}