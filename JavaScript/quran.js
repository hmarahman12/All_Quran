//All Quran

function allParaANDsura(){
    document.querySelector(".para-All").innerHTML = '';
    document.querySelector(".mobile-div").innerHTML = `
        <div class="alQuran">
            <div class="alQuranPara">
                <span onclick="para1()">পাড়া : ১</span>
                <span onclick="para2()">পাড়া : ১</span>
                <span onclick="para3()">পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
                <span>পাড়া : ১</span>
            </div>
            <div class="alQuranSura">
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
                <span onclick="para1()"><a href="#sura-fatihah">সূরা : الفاتحة</a></span>
            </div>
        </div>
    `;
    document.querySelector(".containerr").style.display = "none";
}

function para1(){
    if(document.querySelector(".alQuran")){
        document.querySelector(".alQuran").style.display = "none";
    }
    for (para1_1 of para1Array) {
        document.querySelector(".para-All").innerHTML += para1_1;
        
    }
}


function para2(){
    if(document.querySelector(".alQuran")){
        document.querySelector(".alQuran").style.display = "none";
    }
    for (para1_1 of para1Array) {
        document.querySelector(".para-All").innerHTML += para1_1;
        
    }
}

function para3(){
    if(document.querySelector(".alQuran")){
        document.querySelector(".alQuran").style.display = "none";
    }
    for (para1_1 of para1Array) {
        document.querySelector(".para-All").innerHTML += para1_1;
        
    }
}

function search(){
    const query = document.querySelector("textarea#hidden").value.trim().toLowerCase();
    if(query !== ''){
        document.querySelector(".containerr").style.display = "none";
        para1();
        para2();
        para3();
//ayat Searche//////////////
        setTimeout(() => {
            const spans = document.querySelectorAll(".line span.hedden");
            let anyMatch = false;
            spans.forEach(span => {
              const originalText = span.textContent;
              const lowerText = originalText.toLowerCase();
      
              if (query && lowerText.includes(query)) {
                const regex = new RegExp(`(${query})`, 'gi');
                span.innerHTML = originalText.replace(regex, '<mark id="mark">$1</mark>');
                document.querySelector(".result2").innerHTML = originalText.replace(regex, '<mark><a href="#mark">$1</a></mark>');
                anyMatch = true;
              } else {
                span.innerHTML = originalText;
              }
            });
      
            // Optional: hide all if no matches
            if (!anyMatch && query !== "") {
                document.querySelector(".result2").innerHTML  = query ;
            }
        }, 1000);
    }
}

if(window.innerWidth > 800){
    document.querySelector(".mbaile-menu").innerHTML = '';

    let allPages = document.querySelector(".allPages");
        allPages.innerHTML = `
            <div><img src="./pic/home.png" alt=""></div>
            <div class="hard"></div>`;
            for (para1_1 of para1Array) {
                allPages.innerHTML += para1_1;
                
            }
            allPages.innerHTML += `<div class="hard"></div>
            <div class="hard"></div>`;

    function para_sura(){
        allParaANDsura()  
        document.querySelector(".allPages.flipbook").style.display = "none";
        document.querySelector(".pages").style.display = "block !important";
    }

}else if (window.innerWidth < 800) {

    document.querySelector(".mbaile-menu").innerHTML = `
        <a href=""><img id="home" src="./pic/home (1).png" alt=""></a>
        <img id="books" src="./pic/book.png" alt="">
        <img id="quran" src="./pic/quran.png" alt="" onclick="para_sura()">
        <img id="search" src="./pic/search.png" alt="">
        <img id="menu-bar" src="./pic/menu-bar.png" alt="">
        `;

    //All Books
    document.querySelector("img#books").addEventListener('click',function(){
        document.querySelector(".para-All").innerHTML = '';
        document.querySelector(".mobile-div").innerHTML = `
            <div class="alQuran">
                <div class="alQuranPara">
                    <span onclick="sura1()">সূরা : الم</span>
                    <span onclick="sura2()">সূরা : الم</span>
                    <span onclick="sura3()">সূরা : الم</span>
                    <span onclick="sura4()">সূরা : الم</span>
                    <span onclick="sura5()">সূরা : الم</span>
                    
                </div>
            </div>
        `;
        document.querySelector(".containerr").style.display = "none";
    })




    document.querySelector("img#quran").addEventListener('click',function(){
        allParaANDsura()
    })
    //Searche ber
    document.querySelector("img#search").addEventListener('click',function(){
        document.querySelector(".para-All").innerHTML = '';
        document.querySelector(".containerr").style.display = "block";
    })
    



}

