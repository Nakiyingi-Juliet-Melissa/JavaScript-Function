//Function to validate user credentials.
function validUserCredentials(email,password){

//conditional if statement that checks for valid invalid user credentials.
if(email==="2200706555@gmail.com" && password==="22/U/6555@2024"){
    console.log(`User email is ${email},login successful!`)
    
}else{
    console.log("Incorrect user credentials.");
}
}
//valid UserCredentials.
validUserCredentials("2200706555@gmail.com" , "22/U/6555@2024");