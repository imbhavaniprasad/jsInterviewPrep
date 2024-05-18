// const libraryMap = {
//   "libraryA": ["libraryB", "libraryC"],
//   "libraryB": ["libraryC", "libraryA"],
//   "libraryC": ["libraryD"],
//   "libraryD": ["libraryE"],
//   "libraryE": ["libraryF"],
//   "libraryF": ["libraryX"]
// };
// function checkDependencies() {
//   let ans = {};
//   for (let key in libraryMap) {
//     libraryMap[key].map(lib => {
//       if (!libraryMap.hasOwnProperty(lib)) {
//         console.log("invalid value ", lib)
//         return;
//       }
//       if (libraryMap[lib].includes(key)) {
//         console.log(key + " depends " + lib);
//       }

//     })
//   }
// }
// checkDependencies();

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

//flatten with keys

// function flatten(y = {}, prefix = "") {
//   for (let key in y) {
//     if (typeof y[key] === "object" && y[key] !== null) {
//       flatten(y[key], `${prefix}${key}.`);
//     }
//     else {
//       ans[`${prefix}${key}`] = y[key];
//     }
//   }
// }





const trans = [{ "category": 'Sports', "amount": 50 }, { "category": 'Sports', "amount": 100 }, { "category": 'Sports', "amount": -20 }, { "category": 'Travel', "amount": 100 }, { "category": 'Dinning', "amount": 150 }, { "category": 'Travel', "amount": 120 }]

//{ "Sports": 100, "Travel": 120,  "Dinning": 150 }
// function getCategoryData(trans) {

//   const ans = trans.reduce((acc, init) => {
//     const onValue = init["category"];
//     const amount = init["amount"];
//     if (acc && acc.hasOwnProperty(onValue)) {
//       if (acc[onValue] < amount) {
//         acc[onValue] = amount;
//       }
//     }
//     else {
//       acc[onValue] = amount;
//     }
//     return acc;
//   }, {});
//   console.log(ans);
// }
// getCategoryData(trans);

const test = {
  name: 'Bhavani',
  anonFunction: function () {
    return function () {
      console.log(this.name);
      console.log(arguments);
    };
  },

  arrowFunction: function () {
    return () => {
      console.log(this.name);
      console.log(arguments);
    };
  }
};


const anon = test.anonFunction('Hi', 'Bhavani');
const arrow = test.arrowFunction('hello', 'Bhavani');

anon("bhavani");
arrow();
//Explanation: https://chatgpt.com/share/23b749f8-9df9-49df-88bc-d47074b37a67

// Promise.allSettled.forEach(element => {
//   if(rejected){

//   }
// });

//Backend
//middleware
// const logMid = (err, req, res, next) => {
//   console.log("user logged from", req.hostName)
//   next();
// }

// 1 express server listen port
// 2 router, express.Router()=> router.get("/data", logMid, controllerfun);
// 3) controller:

// const controllerfun = (req, res) => {
//   if (req.params.id) {

//     try {
//       const res = await SchemaIdentifier.find({ id })
//       res.json({
//         data: res
//       })
//     } catch (e) {

//     }

//   }


// }
// 4) DB: Have a schema

// 5)
// //Front
// const Dropdown = ({ handleSelect }) => {


//   return (
//     <select onChange={handleSelect}>
//       <option>Sports</option>
//       <option>Sports</option>
//       <option></option>
//     </select>
//   )

// }

// const DisplayList = () => {
//   const [value, setValue] = useState("all");
//   const [data, setData] = useState([]);
//   const fetchList = async () => {
//     try {
//       const res = await fetch(`url/id=${value}`);
//       const respone = res.json();
//       setData(response.data);
//     } catch (e) {

//     }

//   }
//   useEffect(() => {
//     fetchList()
//   }, [value])

//   // const handleSelect = (e)=>{
//   //    setValue(e.target.value);
//   // }

//   return (
//     {
//       data.length > 0 && data.map((d, idx) => {

//       })
//     }
//     //  <ul>

//     //  </ul>
//     < Dropdown handleSelect = { handleSelect } />
//   )
// }