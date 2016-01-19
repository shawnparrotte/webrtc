var selfView, peerView, btnCall, peerConnection, signaling;

function gotStream(stream){
  attachMediaStream(localView, stream);
}

function onStreamError(error){
    console.log("Error In Getting Media");
}

function setupConnection(){

    var constraints = {"video": true, "audio": true};
    getUserMedia(constraints, gotStream, onStreamError)
}

setupConnection();
