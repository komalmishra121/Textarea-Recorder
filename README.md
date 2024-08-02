# Textarea-Recorder

1-> HTML Structure:

Contains a textarea and buttons for starting/stopping the recording and playing back the changes.
Links to an external CSS file for styling and a JavaScript file for functionality.

2 -> CSS:

Simple styling to set the size of the textarea and add some margin to the controls.

3 -> JavaScript:

Variables: Defined for capturing the textarea and button elements, recording status, changes array, and playback interval.
Event Listeners:
input: Captures changes in the textarea when recording is enabled, storing the current text, selection start/end, cursor position, and timestamp.
click on startRecord: Clears previous recordings and starts a new recording session.
click on stopRecord: Stops the recording session.
click on playback: Plays back the recorded changes at a fixed interval (500ms by default).
Playback Functionality: Updates the textarea value and selection range based on the recorded changes, simulating user input and text selection.

4 -> Deployed Link

https://66ad11e7a22e2a8d21ea38a8--fancy-truffle-f3085c.netlify.app/
