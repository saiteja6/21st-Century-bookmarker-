window.onload = function(){
document.getElementById("attach").onclick = function(){
    // Get a value saved in a form.
    var theValue = document.getElementById('textarea').value;
    // Check that there's some code there.
    if (!theValue) {
      alert('Error: No value specified');
      return;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'value': theValue}, function() {
      // Notify that we saved.
      alert('Notes is saved');
    });
    chrome.storage.local.get(['value'], function(result) {
      console.log('Value currently is ' + result.value);
    });
  }
}
console.log("File Attached!");