const quotes = [
  ["What I cannot create, I do not understand", "Richard Feynman"],
  ["Code is like humour. When you have to explain it, it's bad", "Cory House"],
  ["First, solve the problem. Then, write the code.", "John Johnson"],
  ["Software is like sex: it's better when it's free.", "Linus Tovalds"]
]

const select_random = (array) => {
  return array[Math.floor(Math.random()*array.length)]
}

let quote = select_random(quotes);

document.getElementById("quote").innerText = `"${quote[0]}"`;
document.getElementById("qauthor").innerText = `~ ${quote[1]}`;
