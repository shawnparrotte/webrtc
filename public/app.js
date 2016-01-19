var selfView, peerView, btnCall, peerConnection, signaling;

function gotStream(stream){
  attachMediaStream(localView1, stream);
  attachMediaStream(localView2, stream);
  attachMediaStream(localView3, stream);
  attachMediaStream(localView4, stream);
  attachMediaStream(localView5, stream);
  attachMediaStream(localView6, stream);


}

function onStreamError(error){
    console.log("Error In Getting Media");
}

function setupConnection(){

    var constraints = {"video": true, "audio": false};
    getUserMedia(constraints, gotStream, onStreamError)
}

setupConnection();
