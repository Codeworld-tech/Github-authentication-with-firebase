import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { 
getAuth,
signInWithPopup,
signOut,
GithubAuthProvider,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCs4UZYglGy3qTrjy7Yq6Y_QFTSyjdlm1M",
  authDomain: "logxpert.firebaseapp.com",
  projectId: "logxpert",
  storageBucket: "logxpert.firebasestorage.app",
  messagingSenderId: "565677449939",
  appId: "1:565677449939:web:7b5d51f9a62a0fb886ea26"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GithubAuthProvider();

const SigninButton = document.getElementById("SignInbtn");
const SignoutButton = document.getElementById("SignOutbtn");

SignoutButton.style.display = "none";

const SignInwithGithub = async()=>{
   signInWithPopup(auth, provider)
  .then((result) => {

    const user = result.user;
    console.log(user);
    alert("You have Successfuly Sign in!")
   
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error: ${errorMessage}`);
   
  });
}

const SignOut = async()=>{
 signOut(auth).then((
  alert("You have Signed out Successfuly!")
 )).catch(()=>{
  alert("Something went wrong!")
 })
}

onAuthStateChanged(auth,(user)=>{
 if(user){
    SignoutButton.style.display = "block";
 }else{
    SignoutButton.style.display = "none";
 }
})

SigninButton.addEventListener('click', SignInwithGithub );
SignoutButton.addEventListener('click', SignOut ); 