let userData = {}

function checkToken(){
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}

async function createAccount(createdUser){
    let res = await fetch('http://localhost:5206/User/AddUser',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(createdUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
}

async function login(loginUser){
    let res = await fetch('http://localhost:5206/User/Login',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(loginUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    return data;
}

async function GetLoggedInUserData(username){
    let res = await fetch(`http://localhost:5206/User/userbyusername/${username}`);
    let data = await res.json();
    userData = data;
    console.log(userData);
}

function loggedInData(){
    return userData;
}

async function addBlogItem(blogItem){
    let res = await fetch('http://localhost:5206/BlogItem/AddBlogItem',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(blogItem)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    return data;
}

async function getBlogItems(){
    let res = await fetch('http://localhost:5206/BlogItem/GetBlogItems');
    let data = await res.json();
    return data;
}

async function getBlogItemsByUserId(userId){
    let res = await fetch(`http://localhost:5206/BlogItem/GetItemsByUserId/${userId}`);
    let data = await res.json();
    return data;
}

async function updateBlogItem(blogItem){
    let res = await fetch('http://localhost:5206/BlogItem/UpdateBlogItem',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(blogItem)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    return data;
}

async function getPublishedBlogItems(){
    let res = await fetch('http://localhost:5206/BlogItem/GetPublishedItems');
    let data = await res.json();
    return data;
}

export {checkToken, 
    createAccount, 
    login, 
    GetLoggedInUserData, 
    loggedInData, 
    addBlogItem,
    getBlogItems,
    getBlogItemsByUserId, 
    updateBlogItem,
    getPublishedBlogItems
};