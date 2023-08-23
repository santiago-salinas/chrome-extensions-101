const textCountElement = document.querySelector(
  ".kix-documentmetrics-widget-number"
);

if (textCountElement) {
  const textCount = textCountElement.textContent;
  console.log("Number of words:", textCount);
} else {
  console.log("Element not found.");
}
