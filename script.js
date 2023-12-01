function login() {
    let username = document.getElementById('userName').value
    let password = document.getElementById('password').value

    if (username == "" || password == "") {
        alert("Please full all the fields")
    }
    else {
        if(username in localStorage){
            account = JSON.parse(localStorage.getItem(username))
            // console.log(account);
            if (password == account.password) {
                // console.log('asdasd');
                localStorage.setItem("Logged In", JSON.stringify(account))
                window.location = ('./home.html')
            }
            else {
                alert('Incorrect password')
                location.reload();
            }
        }
        else{
            alert('Account does not exists')
        }
    }
}




function register() {

    let regEmail = document.getElementById('regEmail').value

    let regUsername = document.getElementById('reguserName').value
    let regPassword = document.getElementById('regPassword').value

    if (regEmail == "" || regUsername == "" || regPassword == "") {
        alert("Please full all the fields")
    }
    else {
        if (regUsername in localStorage) {
            alert('Account already exisits')
        }
        else {
            allPrdocuts = []
            let account = {
                email: regEmail,
                username: regUsername,
                password: regPassword,
                products: allPrdocuts
            }
            localStorage.setItem(regUsername, JSON.stringify(account));
            alert("Registered!")
            location.reload();
        }
    }

}

function addProduct() {
    let productID = document.getElementById('productID').value;
    let productName = document.getElementById('productName').value;
    let productCategory = document.getElementById('productCategory').value;
    let productDescription = document.getElementById('productDescription').value;
    let productPrice = document.getElementById('productPrice').value;
    let productReview = document.getElementById('productReview').value;


    if (productID == '' || productName == '' || productCategory == '' || productDescription == '' || productPrice == '' || productReview == '') {
        alert('Please fill all feilds');
    }
    else {
        let account = JSON.parse(localStorage.getItem('Logged In'))
        console.log(account.products);
        if (account.products.some(product => product.id === productID)){
            alert('Product ID already exiits')
        }
        else{
            account.products.push({
                id: productID,
                name: productName,
                category: productCategory,
                description: productDescription,
                price: productPrice,
                review: productReview
            }
            )
            localStorage.setItem('Logged In', JSON.stringify(account))
            alert('Product added succesfully!')
            location.reload()
        }
        

        //    console.log(account);
        

    }
}

function searchProduct() {
    let searchID = document.getElementById('searchID').value;;

    let account= JSON.parse(localStorage.getItem('Logged In'))

    console.log(account);
    // console.log(account);
    if (searchID == "") {
        alert('Enter Id to search');
    }
    else {
        for(i of account.products){
            if(i.id == searchID){
                document.getElementById('result').innerHTML=`<div class="d-flex align-items-center justify-content-center" id="result">
                <div class="card mb-5" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${i.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${i.id}</li>
                        <li class="list-group-item">Category: ${i.category}</li>
                        <li class="list-group-item">Description: ${i.description}</li>
                        <li class="list-group-item">Price: ${i.price}</li>
                        <li class="list-group-item">Review: ${i.review}</li>
                    </ul>
                </div>
            </div>`
            }
            else{
                alert('Product does not exists')
            }
        }
        
    }
}


function logout() {
    let logaccount = JSON.parse(localStorage.getItem('Logged In'));
    console.log(logaccount);
    localStorage.setItem(logaccount.username, JSON.stringify(logaccount))
    window.location='./index.html'
}