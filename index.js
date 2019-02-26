function theBeatlesPlay (musicians, instruments) {
  var mLen, musicianString;
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var musicianInstrument = [];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  for(var i=0; i<musicians.length; i++){
musicianString = musicians[i] + ' plays ' + instruments[i];
musicianInstrument[i]=musicianString;
}
return musicianInstrument;
}

function johnLennonFacts (){}