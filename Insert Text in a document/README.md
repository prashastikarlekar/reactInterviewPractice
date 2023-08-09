<!-- @format -->

- Thought Process for solving the question

* I started by adding a text area and a div to display text.
* Created `text` state variable to maintain the text entered in the textarea and `doc` state variable to maintain the whole document element
* Added onChange event in textarea to capture the changes to the text
* Created a onKeyDown event in textarea to capture the event of pressing `Enter` in textarea
* Created handleKeyDown method, checked if the key pressed was `Enter`
* If yes, created a new variable whose value was set to a paragraph html element displaying only the `text` and not entire `doc`. This was done because in upcoming steps I have to add a highlight to only recently added text and not the entire doc text. So, to segregate both parts, only text was displayed here.
* Next, setDoc was called with a value given to it as doc + newDoc since it should contain the entire text entered in textarea till now. And text was set to empty string again.
* Conditional Rendering was performed to render the document container.
  -- If document is present then the value of doc was programmatically set using dangerouslySetInnerHTML{{__html: doc}} since my doc is an html element whose content I want to display in this document-container div. Refer [https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/]
  -- If document is not yet set then empty div with placeholder is displayed.
* To add highlight, I created another state variable `highlight` to check when to show highlight and when not. Default value is set to false.
* Once enter is pressed, highlight is set to true and the newDoc has a class `highlight` added to it which is replace to null when setDoc is called inside setTimeout after 2 seconds. Also, setHighlight is set to false in this callback function.
* CSS animation fade out is added along with keyframes to give highlight effect.
