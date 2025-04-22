if (window.innerWidth < 900) {
    document.querySelector("img#quran").addEventListener('click',function(){
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
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                    <span>সূরা : الم</span>
                </div>
            </div>
        `;
        document.querySelector(".containerr").style.display = "none";
    })
    document.querySelector("img#search").addEventListener('click',function(){
        document.querySelector(".para-All").innerHTML = '';
        document.querySelector(".containerr").style.display = "block";
    })
    
    //para start
    function para1(){
        if(document.querySelector(".alQuran")){
            document.querySelector(".alQuran").style.display = "none";
        }
        document.querySelector(".para-All").innerHTML += `
                    <div class="pagess">
                <div class="page-head">
                    <span class="sura">সূরা : الم</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                    <span class="para">পাড়া : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
            <div class="pagess">
                <div class="page-head">
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
            <div class="pagess">
                <div class="page-head">
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
        `;
    }
    
    function para2(){
        if(document.querySelector(".alQuran")){
            document.querySelector(".alQuran").style.display = "none";
        }
        document.querySelector(".para-All").innerHTML += `
            <div class="pagess">
                <div class="page-head">
                    <span class="sura">সূরা : الم</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                    <span class="para">পাড়া : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
            <div class="pagess">
                <div class="page-head">
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
            <div class="pagess">
                <div class="page-head">
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
        `;
    }
    
    function para3(){
        if(document.querySelector(".alQuran")){
            document.querySelector(".alQuran").style.display = "none";
        }
        document.querySelector(".para-All").innerHTML += `
                    <div class="pagess">
                <div class="page-head">
                    <span class="sura">সূরা : الم</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                    <span class="para">পাড়া : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
            <div class="pagess">
                <div class="page-head">
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
            <div class="pagess">
                <div class="page-head">
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُو۟لَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَٰئِكَ هُمُ ٱلْمُفْلِحُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم لا يؤمنون</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                </div>
                <div class="page-fotter">
                    <div class="text">
                        <input id="button" type="button" value=" অর্থ - পরুন ">
                        <input type="checkbox" id="wordmining">
                    </div>
                    <div class="icone">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                </div>
            </div>
        `;
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


}

