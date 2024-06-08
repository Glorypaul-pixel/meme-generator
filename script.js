const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

memeImage.style.width = "80%";
memeImage.style.height = "60vh";

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
const style = document.createElement("style");
style.textContent = `
  .meme-generator .generate-meme-btn {
    padding: 0.9rem;
    width: 100%;
    border: none;
    border-left: 8px solid #222;
    border-right: 8px solid #222;
    margin: 24px 0;
    font-size: 20px;
    color: blueviolet;
    font-weight: 900;
    cursor: pointer;
    transition: all 400ms ease;
  }
`;
document.head.append(style);
