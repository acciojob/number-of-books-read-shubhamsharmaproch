const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = (library) => {
  // write your code here
	let count=0;
	for(const arr in library) {
		if(library[arr].readingStatus===true)
		count++;
	}
	return count;
};
alert(numberOfBooksRead(library));
// Do not change the code below


