const todoData = [
  { _id: 1, text: "take out trash", completed: true },
  { _id: 2, text: "take out dog", completed: true },
  { _id: 3, text: "give food to the dog", completed: true },
  { _id: 4, text: "give food to the cat", completed: true },
  { _id: 5, text: "study coding", completed: true }
];

export function getData() {
  return todoData;
}
export function createData(text) {
  const newData = { _id: Date.now().toString(), text, completed: false };
  return newData;
}

export default todoData;
