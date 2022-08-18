// function for getting input field
getInputFieldById = (inputFieldId) => {
  const inputFieldElement = document.getElementById(inputFieldId);
  const inputFieldElementString = inputFieldElement.value;
  
  inputFieldElement.value = "";
  const previousInput = parseFloat(inputFieldElementString);
  return previousInput;
};
// function for getting inner text
getInnerTextById = (innerTextId) => {
  const inputTextElement = document.getElementById(innerTextId);

  const inputTextElementString = inputTextElement.innerText;
  const previousInnerText = parseFloat(inputTextElementString);
  return previousInnerText;
};
