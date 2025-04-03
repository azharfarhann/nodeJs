import axios from "axios";

// async function serverCall() {
//   try {
//     let response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// serverCall();

// async function farhan() {
//     try {
//        let response = await axios.get("https://api.github.com/users/azharfarhann");
//        console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// farhan();

async function farhan() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(response.data);
    let userArray = response.data;
    // console.log(userArray);
    let name= userArray.map((y)=>{
        return user.name
    })
    console.log(name);
  } catch (error) {
    console.log(error);
  }
}
farhan();
