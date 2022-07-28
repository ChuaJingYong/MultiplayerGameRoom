import { arrayUnion, doc, setDoc, updateDoc,getDoc,onSnapshot } from "firebase/firestore"
import {db} from "./firebase"
// CREATE NEW SESSION
// user key in name 
// user click on create or join
// save current user with unique randomized ID as global variable
// save current user name 
// pair the session code 
// blue and red score are set as 0

// User
// name
// id
// session code

// Button
// check for current user 
// read current score from database (red)
// add to their score (red)
// update to database (red)

// Room
// session id
// red button value
// blue button value
// default variables values

const redButton1 = document.getElementById("redButton1")
redButton1.addEventListener("click",updatedScore)

async function updatedScore(){
    var updatedScore = parseInt(document.getElementById("redScore1").innerHTML) + 1
    document.getElementById("redScore1").innerHTML = updatedScore

    // Get current score value from Firestore
    const sessionCode = document.getElementById("sessionCode").value
    console.log({sessionCode})
    const docRef = doc(db, "MultiplayerGame",sessionCode)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());

        await updateDoc(docRef, {
            red_score:updatedScore
        })
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}
var sessionCode = "Room001"
const unsub = onSnapshot(doc(db, "MultiplayerGame", sessionCode), (doc) => {
    console.log("Current data: ", doc.data());
    if (user.session == sessionCode){
        document.getElementById("blueScore1").innerHTML = doc.data().red_score
    }
});
    


const blueButton1= document.getElementById("blueButton1")
blueButton1.addEventListener("click",updatedScore1)
function updatedScore1(){
    var updatedScore = parseInt(document.getElementById("blueScore1").innerHTML) + 1
    document.getElementById("blueScore1").innerHTML = updatedScore
}

const create = document.getElementById("create")
const join = document.getElementById("join")

// event listener for create and join buttons
create.addEventListener("click",createSession)
join.addEventListener("click",joinSession)

async function createSession(){
    // read user name
    // read session id
    const username = document.getElementById("username").value
    const sessionCode = document.getElementById("sessionCode").value

    // create a new room with 4 variables. red_score, blue_score, users[],session
    await setDoc(doc(db, "MultiplayerGame", sessionCode), {
    red_score: 0,
    blue_score: 0,
    user:[username],
    session:sessionCode
    });

    createUser(username,sessionCode)
    console.log(`Session ${sessionCode} successfully created`)
}

async function joinSession(){
    // read username
    // read session code
    const username = document.getElementById("username").value
    const sessionCode = document.getElementById("sessionCode").value

    // join existing room and update the user array (to add new user)
    await updateDoc(doc(db, "MultiplayerGame", sessionCode), {
        // arrayUnion adds new element to existing array instead of overwriting it.
        user:arrayUnion(username)
    });
    createUser(username,sessionCode)
    console.log(username," has joined session ",sessionCode)
}

async function createUser(username,sessionCode){
    window.user = {
        "name":username,
        "session":sessionCode
    }
}

// CRUD
// Create
// Read
// Update
// Delete