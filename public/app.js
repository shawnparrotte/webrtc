var selfView, peerView, btnCall, peerConnection, signaling;

function gotStream(stream){
  attachMediaStream(localView, stream);
  attachMediaStream(localView2, stream);
  attachMediaStream(localView3, stream);


}

function onStreamError(error){
    console.log("Error In Getting Media");
}

function setupConnection(){

    var constraints = {"video": true, "audio": true};
    getUserMedia(constraints, gotStream, onStreamError)
}

setupConnection();
