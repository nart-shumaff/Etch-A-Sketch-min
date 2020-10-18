{/* <div class="screen-disply">
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                
               
            </div> */}
const LocationX = []  ;
LocationX[0] = 1
const LocationY = [] ;  
LocationY[0] = 1        
// geanrit an 

// get the node arrey 
function getAllDivInScreen(numRow){
    elementList = document.querySelectorAll('.screen-disply div');
    console.log(elementList)
    const sources = Array.from(elementList, item => item);
    console.log(sources)
    // make the div arr to 2d 
    screenArr = arr1Dto2D(sources,numRow);
}

// convert the div node arrey to a 2d arrey 
function arr1Dto2D(arr1 , numXnum){
const arr = arr1;
    
const DivArr2d = [];
while(arr.length) DivArr2d.push(arr.splice(0,numXnum));
return DivArr2d ;
}
// console.log(arr1Dto2D(sources));
//add grid-template-columns: repeat(arry lenghe,auto)

//ceaing 1 div proprty to filled

// DivArr2d[1][0].classList.add('filled');

//a funcsin thet move the pinter brist on an arowKey 
document.addEventListener('keydown', ChangePleas );
function ChangePleas (e){
    //delet the new class
    screenArr[LocationY[0]][LocationX[0]].classList.remove('now-pixel');
    // if the Location is out of screen dont move   
    if(e.code === 'ArrowDown' && screenArr.length - 1 >  LocationY[0]){
        LocationY[0] = LocationY[0] + 1;
        console.log("good");
    }
    // if the Location is out of screen dont move
    if(e.code === 'ArrowUp' && LocationY[0] > 0){
        LocationY[0] = LocationY[0] - 1;
        console.log("good");
    }
    // if the Location is out of screen dont move
        if(e.code === 'ArrowRight' && screenArr.length - 1 > LocationX[0]){
        LocationX[0] = LocationX[0] + 1;
        console.log("good");
    }
    // if the Location is out of screen dont move
    if(e.code === 'ArrowLeft' && LocationX[0] > 0){
        LocationX[0] = LocationX[0] - 1;
        console.log("good");

    }
    
    
    // if Location is filled dont fill it agine
    if (screenArr[LocationY[0]][LocationX[0]].classList[1] !== 'filled'){
    screenArr[LocationY[0]][LocationX[0]].classList.add('filled');
    console.log(screenArr[LocationY[0]][LocationX[0]].classList);
    }
    // add a new class to the 
    screenArr[LocationY[0]][LocationX[0]].classList.add('now-pixel');
}
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
// screenArr = arr1Dto2D(sources);
// screenArr[LocationY[0]][LocationX[0]].classList.add('filled');
addEventListener('submit', val);
//geting the input from the form to desid the size of the bord
function val()
{
    // removeDivs()
    removeElementsByClass('pixel'); 

    const input = document.getElementById("userInput").value;
    // make sure thet input is a numbre 
    if (isNaN(input)){
        alert("enret only numbres")
    }
    //  create the elements
    const DivNum = input * input;
    for (let index = 0; index < DivNum; index++) {
        
        let newDivPixle = document.createElement('div');
        console.log(newDivPixle)
        newDivPixle.classList.add('pixel');

        let screen = document.getElementsByClassName('screen-disply');
        screen.item(0).appendChild(newDivPixle);
        
    }
    const screen = document.getElementsByClassName("screen-disply");
    screen.item(0).style.gridTemplateColumns = `repeat(${parseInt(input)},auto)`;
    screen.item(0).style.gridTemplateRows = `repeat(${parseInt(input)},auto)`;

    getAllDivInScreen(input);
}
// add grid-template-columns: repeat(arry lenghe,auto)
