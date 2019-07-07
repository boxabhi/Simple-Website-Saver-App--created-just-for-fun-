
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
    location.reload();
    e.preventDefault();
}

function fetchbookmark(){
    var img = ['google' , 'facebook' , 'linkeddin' , 'medium' , 'whatsapp' , 'youtube'];
    var show =  JSON.parse(localStorage.getItem('bookmark'));
    var bookmarkresults = document.getElementById('show_results');

    for(var i=0;i< show.length;i++){
    var show_img = (show[i].name).toLowerCase();
    var just = (show_img+'.png').trim();
    var sitename = show[i].name;
    var url = show[i].url;
    bookmarkresults.innerHTML += '<div id="bookmarks" class="bg-dark p-5 mt-5"> '+
    '<h3 class="md-4" style="color: white" id="showSiteName"> <img src=img/'+just+' class="img-rounded img-responsive mr-4" style="height:40px">'+sitename +'</h3>'+
        '  <a target="_blank" href='+url+'> <button class="btn btn-outline-primary mt-2 mr-3" target = "_blank" > Open </button></a>'+
   
        '<a  onclick="deleteBookmark(\''+sitename+'\')" href="#"> <button class="btn btn-outline-danger mt-2 mr-3"> Delete </button></a> </div>';
    }
   // window.reload();
    console.log(show);
}


function deleteBookmark(sitename){
    var bookmark = JSON.parse((localStorage.getItem('bookmark')));
    for(var i=0;i<bookmark.length;i++){
        if(bookmark[i].name == sitename){
          bookmark.splice(i,1);
        }
    }
    localStorage.removeItem('man' );
    localStorage.setItem('bookmark' , JSON.stringify(bookmark));

   console.log(bookmark);
   fetchbookmark();
   location.reload();
    
}














