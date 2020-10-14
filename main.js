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
elementList = document.querySelectorAll('.screen-disply div');
console.log(elementList)
const sources = Array.from(elementList, item => item);
console.log(sources)
// convert the div node arrey to a 2d arrey 
function arr1Dto2D(arr1 ){
const arr = arr1;
    
const DivArr2d = [];
while(arr.length) DivArr2d.push(arr.splice(0,3));
return DivArr2d ;
}
// console.log(arr1Dto2D(sources));
//add grid-template-columns: repeat(arry lenghe,auto)

//ceaing 1 div proprty to filled

// DivArr2d[1][0].classList.add('filled');
screenArr = arr1Dto2D(sources);
//a funcsin thet move the pinter brist on an arowKey 
document.addEventListener('keydown', ChangePleas );
function ChangePleas (e){
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
}

// screenArr = arr1Dto2D(sources);
// screenArr[LocationY[0]][LocationX[0]].classList.add('filled');

