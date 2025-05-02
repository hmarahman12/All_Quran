if (window.innerWidth < 900) {
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
//All Quran
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
    })
    //Searche ber
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
            <div class="pagess" id="sura-fatihah">
                <div class="page-head">
                    <span class="sura">সূরা : الفاتحة</span>
                </div>
                <div class="page-body sura-fateha">
                    <div class="line">
                        <span class="hedden">سورة الفاتحة مكية</span>
                        <span class="arabic">سورة الفاتحة مكية</span>
                    </div>
                    <div class="line">
                        <span class="hedden">بسم الله الرحمن الرحيم</span>
                        <span class="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                        <hr>
                        <span class="ban">শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।</span>
                    </div>
                    <div class="line">
                        <span class="hedden">الحمد لله رب العالمين</span>
                        <span class="arabic"> (١) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</span>
                        <hr>
                        <span class="ban">যাবতীয় প্রশংসা আল্লাহ তা’আলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।</span>
                    </div>
                    <div class="line">
                        <span class="hedden">الرحمن الرحيم مالك يوم</span>
                        <span class="arabic"> الرَّحْمَٰنِ الرَّحِيمِ (٢) مَالِكِ يَوْمِ</span>
                        <hr>
                        <span class="ban">যিনি নিতান্ত মেহেরবান ও দয়ালু। বিচার দিনের</span>
                    </div>
                    <div class="line">
                        <span class="hedden">الدين اياك نعبد واياك</span>
                        <span class="arabic">الدِّينِ (٣) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ</span>
                        <hr>
                        <span class="ban">একমাত্র অধিপতি। আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই</span>
                    </div>
                    <div class="line">
                        <span class="hedden">نستعين اهدنا الصراط</span>
                        <span class="arabic">  نَسْتَعِينُ (٤) اهْدِنَا الصِّرَاطَ </span>
                        <hr>
                        <span class="ban">সাহায্য প্রার্থনা করি। আমাদের সরল </span>
                    </div>
                    <div class="line">
                        <span class="hedden">المستقيم صراط الذين</span>
                        <span class="arabic"> الْمُسْتَقِيمَ (٥) صِرَاطَ الَّذِينَ</span>
                        <hr>
                        <span class="ban">পথ দেখাও। সে সমস্ত লোকের পথ </span>
                    </div>
                    <div class="line">
                        <span class="hedden">انعمت عليهم غير المغضوب</span>
                        <span class="arabic">أَنْعَمْتَ عَلَيْهِمْ(٦) غَيْرِ الْمَغْضُوبِ</span>
                        <hr>
                        <span class="ban">যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়,যাদের প্রতি তোমার গজব নাযিল হয়েছে </span>
                    </div>
                    <div class="line">
                        <span class="hedden">عليهم ولا الضالين</span>
                        <span class="arabic">(٧) عَلَيْهِمْ وَلَا الضَّالِّينَ</span>
                        <hr>
                        <span class="ban">এবং যারা পথভ্রষ্ট হয়েছে।</span>
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

            <div class="pagess" id="sura-bakara">
                <div class="page-head">
                    <span class="sura">সূরা : الْبَقَرَة</span>
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০১</span>
                </div>
                <div class="page-body sura-bakara">
                    <div class="line">
                        <span class="hedden">سورة البقره مدنيه</span>
                        <span class="arabic">سورة البقره مدنيه</span>
                    </div>
                    <div class="line">
                        <span class="hedden">بسم الله الرحمن الرحيم</span>
                        <span class="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                        <hr>
                        <span class="ban">শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">الم(١)ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">هُدًى لِلْمُتَّقِينَ(٢)الَّذِينَ </span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">ُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ(٣)</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ختم الله على على سمعه وعلى ابصارهم ولهم عذاب عظيم</span>
                        <span class="arabic">وَبِالْآخِرَةِ هُمْ يُوقِنُونَ(٤)</span>
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
                    <span class="sura">সূরা : الْبَقَرَة</span>
                    <span class="para">পাড়া : ০১</span>
                    <span class="pista">পৃষ্ঠা : ০২</span>
                </div>
                <div class="page-body">
                    <div class="line">
                        <span class="hedden">اولئك على هدى من ربهم اولئك هم المفلحون</span>
                        <span class="arabic">أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ(٥)</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ان الذين كفروا سواء عليهم اانذرتهم ام لم تنذرهم</span>
                        <span class="arabic">إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ </span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">لا يؤمنون ختم الله على قلوبهم وعلى سمعهم وعلى</span>
                        <span class="arabic">لَا يُؤْمِنُونَ(٦) خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ابصارهم غشاوه ولهم عذاب عظيم ومن الناس</span>
                        <span class="arabic"> أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ(٧) وَمِنَ النَّاسِ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden"> من يقول امنا بالله وباليوم الاخر وما هم بمؤمنين</span>
                        <span class="arabic">مَنْ يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُمْ بِمُؤْمِنِينَ(٨)</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">يخادعون الله والذين امنوا وما يخدعون الا انفسهم</span>
                        <span class="arabic">ُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنْفُسَهُمْ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">وما يشعرون في قلوبهم مرض فزادهم الله مرضا </span>
                        <span class="arabic">وَمَا يَشْعُرُونَ(٩) فِي قُلُوبِهِمْ مَرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا </span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">ولهم عذاب عليم بما كانوا يكذبون واذا قيل</span>
                        <span class="arabic">وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ(١٠) وَإِذَا قِيلَ </span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">لهم لا تفسدوا في الارض قالوا انما نحن مصلحون</span>
                        <span class="arabic">َلَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ(١١)</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">الا انهم هم المفسدون ولكن لا يشعرون واذا</span>
                        <span class="arabic">َالَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ وَلَٰكِنْ لَا يَشْعُرُونَ(١٢)وَإِذَا </span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">قيل لهم  امنوا كما امن الناس قالوا انؤمن كما امن</span>
                        <span class="arabic">قِيلَ لَهُمْ آمِنُوا كَمَا آمَنَ النَّاسُ قَالُوا أَنُؤْمِنُ كَمَا آمَنَ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">السفهاء  الا انهم هم السفهاء ولكن لا يعلمون</span>
                        <span class="arabic">السُّفَهَاءُ أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ وَلَٰكِنْ لَا يَعْلَمُونَ(١٣)</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">واذا لقوا الذين امنوا قالوا امنا واذا خلوا الى</span>
                        <span class="arabic">وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَوْا إِلَىٰ</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">شياطينهم قالوا انا معكم انما نحن مستهزئون</span>
                        <span class="arabic">شَيَاطِينِهِمْ قَالُوا إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِئُونَ(١٤)</span>
                        <hr>
                        <span class="ban">এ সেই কিতাব যাতে কোনই সন্দেহ নেই। পথ প্রদর্শনকারী পরহেযগারদের জন্য,</span>
                    </div>
                    <div class="line">
                        <span class="hedden">الله يستهزئ بهم ويمدهم  في طغيانهم يعمهون</span>
                        <span class="arabic">اللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِي طُغْيَانِهِمْ يَعْمَهُونَ(١٥)</span>
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
    }para1()
    
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

