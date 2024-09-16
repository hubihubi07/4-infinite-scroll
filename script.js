



function getData() {

    fetch(`https://akademia108.pl/api/ajax/get-users.php`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            


            for (let user of data) {

                let id = document.createElement('p')
                let puser = document.createElement('p')
                let url = document.createElement('p')

                id.innerText = `User ID: ${user.id}`
                puser.innerText = `User Name: ${user.name}`
                url.innerHTML = `User URL: ${user.website} </br> --------`

                document.body.appendChild(id)
                document.body.appendChild(puser)
                document.body.appendChild(url)
               
                
            }
            console.log(data);
        })

}



function scrollToEndOfPage() {

    let scrollHeight = document.documentElement.scrollHeight
    let scrollTop = document.documentElement.scrollTop
    let clientHeight = document.documentElement.clientHeight

    let sumScrollTopClientHeight = Math.round(scrollTop + clientHeight)

    /*  console.log(`Heiht ${scrollHeiht}  Top ${scrollTop}  client${clientHeight} suma ${sumScrollTopClientHeight}`); */

 
    if (scrollHeight == scrollTop + clientHeight) {

        getData()


    }


}


addEventListener('scroll', scrollToEndOfPage)