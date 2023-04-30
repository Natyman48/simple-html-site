document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI

    // Things to look out for
    // ---
    // Use es6

    const res = await fetch('http://localhost:8000/')
    const json = await res.json()

    const result = `<li>${json.join('</li><li>')}</li>`
    document.getElementById('results').innerHTML = result
}
    var xhr = new XMLHttpRequest()
    xhr.onload = function(){
        //handle response
    };
    xhr.onerror = function(){
        //handle error
    };
    xhr.open('POST','https://jsonplaceholder.typicode.com/comments?postId=3',true);
    xhr.setRequestHeader('name: string','application.json');

    var data = JSON.stringify({});  //provide data to send to PHP file
    xhr.send(data);

    // User input keywords
    const userKeyword = ['user']

    // API response data containing the keyword properties
    const apiData = {id: 1. keyword: ['user']}

    // Filter API response data based on the user's input keywords
    const filteredData = apiData.filter(item=>{// Compare each keyword in the user input with the current item's keywords
    const matchingKeywords = userKeywords.filter(user=>{return item.JSONkeyword.includes(user);
    });
return matchingKeywords.length === userKeywords.length;
});
console.console.log(filteredData); 