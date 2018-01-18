var mDatabase = firebase.database().ref();
var mRetDatabase = firebase.database().ref().child("name");

var txtrt = document.getElementById("rettxt");

function submitbtn(){
    
    var txt = document.getElementById("mText").value;
    
    mDatabase.child("name").set(txt);
    
    mRetDatabase.on('value', function(snapshot) {
        
       txtrt.innerHTML = "welcome " + snapshot.val(); 
        
});
   
   
}


 var img = document.getElementById("image-file");

    img.addEventListener('change', function(e){
                var file = e.target.files[0];

                var storageRef = firebase.storage().ref().child(file.name);;
                storageRef.put(file);
        
});
 
