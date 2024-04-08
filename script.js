const vibe=document.getElementById("tags")
const author=document.getElementById("author")
const quote=document.getElementById("text")
const generateor=document.getElementById("new-quote")
const apiv="https://api.quotable.io/quotes/random"
const tweetLink = document.getElementById("tweet-quote");
const tweetBaseUrl = "https://twitter.com/intent/tweet?text=";
const gett = async () => {
  try {
    const response = await fetch(
      apiv
    );
    const data = await response.json();
    vibe.innerHTML=data[0].tags
    author.innerHTML="by "+data[0].author
    quote.innerHTML=data[0].content
    tweetLink.href = tweetBaseUrl + encodeURIComponent(data[0].content);
    console.log(tweetLink)


  }catch(err){
    console.log(err)
  }
}
gett()
generateor.addEventListener("click",gett)