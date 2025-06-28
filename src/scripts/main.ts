import { $btnAdd, $todoInput } from "./dom-elements";
import { validateInputValue } from "./utils/validateInputValue";

$btnAdd!.onclick = () => {
  const isValidInputValue = validateInputValue($todoInput!);
  if (!isValidInputValue) {
    console.error("Empty string");
    return;
  }
};
