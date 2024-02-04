

var MovieList = [];
getMovie('now_playing');
async function getMovie(lists){
    let data = await fetch(`https://api.themoviedb.org/3/movie/${lists}?api_key=ef4dce1bd4acbe59df7f28fdb0d62c55`)
    let result= await data.json()
    MovieList=result.results
    console.log(MovieList)
    //     return result;
display()
}



function display() {
    let Box = ``;

    for (var i = 0; i < MovieList.length; i++) {
        Box += `
        <div class="col  p-4 h-100">
        <div class="card  ">
            <div class="transperant-layer  h-100  p-5 text-light  ">
                <div class="tran">
                    <h2 class="text-center  title animate__slideOutLeft">${MovieList[i].title}</h2>
                    <p class="stop">${MovieList[i].overview}.</p>
                    <h6>Released : ${MovieList[i].release_date}</h6>
                    <div class="ic pt-3 mt-4">
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
                    </div>
                    <p class="rating pt-2 mt-4">${MovieList[i].vote_average}</p>
                </div>
            </div>
            <div class=" ">
                <img src="https://image.tmdb.org/t/p/w500/${MovieList[i].backdrop_path}"
                    class="img-fluid " id="image" alt="...">
            </div>
        </div>

    </div>
 `

    }
    // console.log(Box)
    document.getElementById('col').innerHTML = Box;
}
 
// --------------------------------------open&close nav--------------------------------------

$('.slider-white .close-icon ' ).click(function(){ 
        console.log('hi')
    
        let navwidth= $("nav").outerWidth();
        let leftnav= $("nav").offset().left;
        console.log(navwidth)
        console.log(leftnav)
    
        if(leftnav == 0){
            $('.close-icon').html('<i class="fa-solid fa-align-justify"></i>')
            $("nav").css( {
                transform: 'translate(-100%)' , 
                transition:'all 1s' ,
                
            })
            console.log('close')
        }else{
            $("nav").css( {
                transform :`translate(0%)` , 
                transition:'all 1s'
                
            })
            console.log('open')
        }
    });

// --------------------------------------arrow anchor----------------------------------------


$(window).scroll(function () { 
    // $('.arrow').hide(1000)
    
    let windowScroll=$(window).scrollTop();
   let Homwhieght=$('.stop').height();
//    console.log(windowScroll)
//    console.log(Homwhieght)

   if(windowScroll > Homwhieght){
   
    $('.arrow').show(1000);
   }else{
   
    $('.arrow').hide(1000)
   }
});
$('.arrow').click(function(){
    $(window).scrollTop(50)
    // $('body,html').animate({scrollTop:'0'},1000)
})



// --------------------------------------display list--------------------------------------

$('.Now ').click(() => {

    getMovie('popular')

},)
$('.Popular ').click(() => {

    getMovie('popular')

},)

$('.TopRated ').click(() => {

    getMovie('top_rated')

},)
$('.Upcoming ').click(() => {

    getMovie('upcoming')

},)


// --------------------------------------search--------------------------------------
let searchInput=document.getElementById('search')

function search(){
    let searchvalue = searchInput.value;
    console.log(searchvalue)
   var Box=``
    for(let i=0; i<MovieList.length ;i++){
        if(MovieList[i].title.includes(searchvalue)==true){
            Box += `
            <div class="col-md-4  p-4 h-100">
            <div class="card  ">
              <div class="transperant-layer h-100  p-5 text-light  animate__animated">
                <div class="tran">
                  <h2 class="text-center">${MovieList[i].title}</h2>
                  <p class="stop">${MovieList[i].overview}.</p>
                  <h6>Released : ${MovieList[i].release_date}</h6>
                  <div class="ic pt-3 mt-4">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
                  </div>
                  <p class="rating pt-2 mt-4">${MovieList[i].vote_average}</p>
                </div>
              </div>
              <img src=https://image.tmdb.org/t/p/w500/${MovieList[i].backdrop_path} class="img-fluid " id="image" alt="...">
    
            </div>
    
          </div>
     `
        }
    }
    document.getElementById('col').innerHTML = Box;
}


// --------------------------------------Loading--------------------------------------

$(window).ready(function(){
   $('#loading').slideUp(1000);
})

// --------------------------------------Regex--------------------------------------
let FName=document.getElementById('Name')
let Phone=document.getElementById('Phone')
let Email=document.getElementById('emailp')
let Age=document.getElementById('agep')
let Pass=document.getElementById('passp')


function validationName(){
    var regexName=/^[A-Z][a-z]{3,10}$/;
    if(regexName.test(FName.value)==true){
        console.log('match')
        document.getElementById('namep').innerHTML='match';
        return true
    }else{
        console.log('no match')
        document.getElementById('namep').innerHTML='start with 1 capital letter then 3 to 10 small';
    return false
    }
    }
function validationPhone(){
    var regexName=/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
    if(regexName.test(Phone.value)==true){
        console.log('match')
        document.getElementById('Phonep').innerHTML='match';
        return true
    }else{
        console.log('no match')
        document.getElementById('Phonep').innerHTML='start with 011/012/015 then write 8 numbers';
    return false
    }
    }
function validationEmail(){
    var regexName=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regexName.test(Email.value)==true){
        console.log('match')
        document.getElementById('emailp').innerHTML='match';
        return true
    }else{
        console.log('no match')
        document.getElementById('emailp').innerHTML='no-match';
    return false
    }
    }
function validationAge(){
    var regexName=/^(?:18|1[7-9]|[2-9][0-9])$/;
    if(regexName.test(Age.value)==true){
        console.log('match')
        document.getElementById('agep').innerHTML='match';
        return true
    }else{
        console.log('no match')
        document.getElementById('agep').innerHTML='you should be up to 18';
    return false
    }
    }
function validationPassword(){
    var regexName=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regexName.test(Pass.value)==true){
        console.log('match')
        document.getElementById('passp').innerHTML='match';
        return true
    }else{
        console.log('no match')
        document.getElementById('passp').innerHTML='Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:';
    return false
    }
    }