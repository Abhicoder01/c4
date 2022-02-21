async function apiCall(url) {
try{
   let x=await fetch(url)
   let articles= await x.json()
   return articles
    //add api call logic here
}
catch(error){
    console.log(error)
}
}


function appendArticles(articles, main) {
articles.forEach((element) => {
    let div=document.createElement("div")

    let h3=document.createElement("h3")
    h3.textContent=element.title
    let image=document.createElement("img")
    
    image.src=element.urlToImage
    let button=document.createElement("button")
    button.textContent="read more.."
    button.setAttribute("id","name")
    
    div.append(h3,image,button)
    main.append(div)
});
    //add append logic here

}

export { apiCall, appendArticles }