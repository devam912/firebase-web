var mDatabase = firebase.database().ref();

function submitbtn(){
    
    var txt = document.getElementById("mText").value;
    
    mDatabase.child("name").set(txt);
    
}