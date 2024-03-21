const libraryMap = {
    "libraryA": ["libraryB", "libraryC"],
    "libraryB": ["libraryC", "libraryA"],
    "libraryC": ["libraryD"],
    "libraryD": ["libraryE"],
    "libraryE": ["libraryF"],
    "libraryF": ["libraryX"]
};
function checkDependencies() {
    let ans = {};
    for (let key in libraryMap) {
        libraryMap[key].map(lib => {
            if (!libraryMap.hasOwnProperty(lib)) {
                console.log("invalid value ", lib)
                return;
            }
            if (libraryMap[lib].includes(key)) {
                console.log(key + " depends " + lib);
            }

        })
    }
}
checkDependencies();

// const x ={
//     name:'bhavani',
//     grades:{
//         subject:"Maths",
//     }
// }
// function flatten(x){
//     for(let key in x){
//         if(typeof x[key]=='object'){
//          flatten(x[key]);
//         }
//         else{
//             console.log(x[key]);
//         }
//     }
// }
