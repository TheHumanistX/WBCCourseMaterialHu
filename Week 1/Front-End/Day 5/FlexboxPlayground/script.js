// Setting variables for the whole flex container and each individual flex item
var flex = document.querySelector('#exampleContainer');
var flexItem1 = document.querySelector('#example1');
var flexItem2 = document.querySelector('#example2');
var flexItem3 = document.querySelector('#example3');
var flexItem4 = document.querySelector('#example4');
var flexItem5 = document.querySelector('#example5');
var flexItem6 = document.querySelector('#example6');

// Updates flex-direction property for flex container
function updateDirection() {
    let selected = document.querySelector('input[name="flexdirection"]:checked').value;
    console.log(`Direction: ${selected}`);
    flex.style.flexDirection = selected;
}

// Updates justify-content property for flex container
function updateJustify() {
    let selected = document.querySelector('input[name="justifyContent"]:checked').value;
    console.log(`Justify Content: ${selected}`);
    flex.style.justifyContent = selected;
}


// Updates align-items property for flex container
function updateAlign() {
    let selected = document.querySelector('input[name="alignItems"]:checked').value;
    console.log(`Align Items: ${selected}`);
    flex.style.alignItems = selected;
}

// Updates align-content property for flex container
function updateAlignC() {
    let selected = document.querySelector('input[name="alignContent"]:checked').value;
    console.log(`Align Content: ${selected}`);
    flex.style.alignContent = selected;
}

// Updates flex-wrap property for flex container
function updateWrap() {
    let selected = document.querySelector('input[name="flexWrap"]:checked').value;
    console.log(`Gap: ${selected}`);
    flex.style.flexWrap = selected;
}

// Updates flex gap property for flex container
function changeFlexGap() {
    let numberSet = document.querySelector('input[name="flexGap"]').value;
    console.log(`Gap: ${numberSet}`);
    flex.style.gap = `${numberSet}px`;
}

// Listens for changes to flexGap number input before passing off to changeFlexGrow()
document.querySelector('input[name="flexGap"]').addEventListener('change', changeFlexGap);

// Updates flex-grow property for individual flex items
function changeFlexGrow(e, t) {
    console.log(`var e, t: ${e}, ${t}`);
    var n = isNaN(e.value) ? 0 : e.value;
    console.log(`Box ${t} Grow: ${n}`);
    document.querySelector(`#example${t}`).style.flexGrow = n;
}
// Listens for changes to any of the individual flexGrow number inputs before passing off to changeFlexGrow()
for (var flexGrow = document.querySelectorAll("input[type='number'][name^='flexGrow']"), i = 0; i < flexGrow.length; i++) {
    (function(index) {
        flexGrow[index].addEventListener("change", function () {
            var e = index + 1;
            changeFlexGrow(this, e);
        });
    })(i);
}

// Updates flex-shrink property for individual flex items
function changeFlexShrink(e, t) {
    console.log(`var e, t: ${e}, ${t}`);
    var n = isNaN(e.value) ? 0 : e.value;
    console.log(`Box ${t} Shrink: ${n}`);
    document.querySelector(`#example${t}`).style.flexShrink = n; // Update the style property of the corresponding flex item
}
// Listens for changes to any of the individual flexShrink number inputs before passing off to changeFlexShrink()
for (var flexShrink = document.querySelectorAll("input[type='number'][name^='flexShrink']"), i = 0; i < flexShrink.length; i++) {
    (function(index) {
        flexShrink[index].addEventListener("change", function () {
            var e = index + 1;
            changeFlexShrink(this, e);
        });
    })(i);
}

// Updates flex order property for individual flex items
function changeFlexOrder(e, t) {
    var n = isNaN(e.value) ? 0 : e.value;
    document.querySelector(`#example${t}`).style.order = n;
}
// Listens for changes to any of the individual flexOrder number inputs before passing off to changeFlexOrder()
for (var flexOrder = document.querySelectorAll("input[type='number'][name^='flexOrder']"), i = 0; i < flexOrder.length; i++) {
    (function(index) {
        flexOrder[index].addEventListener("change", function () {
            console.log(`flexOrder.length: ${flexOrder.length}`)
            console.log(`i: ${index}`);
            var e = index + 1;
            changeFlexOrder(this, e);
        });
    })(i);
}

// Updates flex-basis property for individual flex items
function changeFlexBasis(e, t) {
    var n = isNaN(e.value) ? 0 : e.value;
    console.log(`Basis 'n': ${n}`);
    document.querySelector(`#example${t}`).style.flexBasis = `${n}px`;
}
// Listens for changes to any of the individual flexBasis number inputs before passing off to changeFlexBasis()
for (var flexBasis = document.querySelectorAll("input[type='number'][name^= 'flexBasis'"), i = 0; i < flexBasis.length; i++) {
    (function(index) {
        flexBasis[index].addEventListener("change", function () {
            var e = index + 1;
            changeFlexBasis(this, e);
        })
    })(i);
}