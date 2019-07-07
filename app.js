
document.getElementById('btn').addEventListener('click', savebookmark)
function savebookmark(e){
    var siteName = document.getElementById('sitename').value;
    var siteUrl = document.getElementById('siteurl').value;
    // Variable for storing values to local storage
    var save_info = {
        name : siteName,
        url : siteUrl
    }
    if(localStorage.getItem('bookmark') === null){
        var bookmark = [];   
        bookmark.push(save_info);
        localStorage.setItem('bookmark' , JSON.stringify(bookmark));
    }
    else{
        var bookmark = [];
        bookmark = JSON.parse((localStorage.getItem('bookmark')));
        bookmark.push(save_info);
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
    }
   
    window.reload();
    e.preventDefault();
}

function fetchbookmark(){
    var img = ['google' , 'facebook' , 'linkeddin' , 'medium' , 'whatsapp' , 'youtube'];

    var show =  JSON.parse(localStorage.getItem('bookmark'));
    var bookmarkresults = document.getElementById('show_results');
    
    for(var i=0;i< show.length;i++){
    var show_img = (show[i].name).toLowerCase();
    var just = (show_img+'.png').trim();
    

    bookmarkresults.innerHTML += '<div id="bookmarks" class="bg-dark p-5 mt-5"> '+
    '<h3 class="md-4" style="color: white" id="showSiteName"> <img src=img/'+just+' class="img-rounded img-responsive mr-4" style="height:40px">'+show[i].name +'</h3>'+
        '  <a target="_blank" href='+show[i].url +'> <button class="btn btn-outline-primary mt-2 mr-3" target = "_blank" > Open </button></a>'+
   ' <button class="btn btn-outline-danger mt-2"> Delete</button> </div>';
    
    }
    
    
    
    

    console.log(show);
}













