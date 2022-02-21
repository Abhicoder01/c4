let info=localStorage.getItem("data")
    console.log(info)
async function apisearch() {
    
    try{
     let url=`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${info}`
       let x=await fetch(url)
       let term= await x.json()
       console.log(term)
       storeSearchterm(term)
        //add api call logic here
    }
    catch(error){
        console.log(error)
    }
    }
    
    apisearch()

        //add append logic here
    

function storeSearchterm(term) {

    term.forEach((element) => {
        let div=document.createElement("div")
    
        let h3=document.createElement("h3")
        h3.textContent=element.title
        let image=document.createElement("img")
        
        image.src=element.urlToImage
        
        div.append(h3,image)
        document.querySelector("#main").append(div)
    });


}

export default storeSearchterm