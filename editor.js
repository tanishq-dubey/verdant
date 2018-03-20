var remote = require('electron').remote;

var currentWindow = remote.getCurrentWindow();
var jsMode = ace.require('ace/mode/verilog').Mode;
var editorInstance = ace.edit('editor');
editorInstance.setTheme('ace/theme/monokai');
editorInstance.session.setMode('ace/mode/verilog');
