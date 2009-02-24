// Parses the items form correctly for a button editor.  

var ButtonEdit = {
  init: function() {
    TSEditor.registerOnEdit('button', function(el) { ButtonEdit.buttonInstance(el); });
  },
  
  buttonInstance: function(buttonEl) {
    TS.Assets.Selector.register(buttonEl);
  }
}
ButtonEdit.init();