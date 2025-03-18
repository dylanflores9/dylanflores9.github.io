/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array){
var n = array.length;
for(var i = 0; i < n - 1; i++){
    for(var j = 0; j < n - i - 1; j++){
        if (array[j] > array [j + 1]){
            swap(array, j, j + 1);
            updateCounter(bubbleCounter);
            await sleep();
        }
    }
}
}

// TODO 3: Implement quickSort
async function quickSort(array, low, high) {
    if (low < high) {
        var pi = await partition(array, low, high);
        await quickSort(array, low, pi - 1);
        await quickSort(array, pi + 1, high);
    }
}


// TODOs 4 & 5: Implement partition
async function partition(array, low, high) {
    var pivot = array[high]; // pivot
    var i = (low - 1); // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (array[j] <= pivot) {
            i++; // increment index of smaller element
            swap(array, i, j);
            await sleep(); // Pause for visualization
        }
    }
    swap(array, i + 1, high);
    await sleep(); // Pause for visualization
    return i + 1;
}


// TODO 1: Implement swap
function swap (array,i,j){
 var temp = array[i];
 array[i] = array[j];
 array[j] = temp;
 drawSwap(array, i, j);
}



///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}