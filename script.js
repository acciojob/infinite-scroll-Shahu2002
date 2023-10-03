//your code here!
// Get references to the list and the container
const list = document.getElementById('infi-list');
const container = document.getElementById('infi-list');

// Function to add a single list item
function addListItem() {
  const listItem = document.createElement('li');
  listItem.textContent = 'List Item';
  list.appendChild(listItem);
}

// Function to add 10 list items by default
for (let i = 0; i < 10; i++) {
  addListItem();
}

// Function to add 2 more list items when the user reaches the end
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    addListItem();
  }
}

// Event listener to detect scroll and add more items
container.addEventListener('scroll', () => {
  const containerHeight = container.clientHeight;
  const listHeight = list.clientHeight;
  const scrollTop = container.scrollTop;

  if (containerHeight + scrollTop >= listHeight) {
    // User has reached the end of the list, add more items
    addMoreItems();
  }
});

