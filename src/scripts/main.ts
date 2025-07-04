import { $btnAdd, $todoInput } from "./dom-elements";
import { startDatabase } from "./storage";
import { validateInputValue } from "./utils/validateInputValue";

(async function () {
  await startDatabase();
})();

$btnAdd!.onclick = () => {
  const isValidInputValue = validateInputValue($todoInput!);
  if (!isValidInputValue) {
    console.error("Empty string");
    return;
  }
};
