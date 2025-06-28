export const validateInputValue = ($input: HTMLInputElement) => {
  const value = $input.value as String;
  const condition = value.trim() !== "" && value.length > 0;
  return condition;
};
