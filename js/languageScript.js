const select = document.querySelector('select');
const allLang = ['en', 'ru', 'kz'];

select.addEventListener('change', changeURLLanguage);
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
};

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload;
    };
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['title'][hash];
    
    var Aktobe = document.querySelector('.Aktobe');
    var Kostanai = document.querySelector('.Kostanai');
    var Kyzylorda = document.querySelector('.Kyzylorda');
    var Atyrau = document.querySelector('.Atyrau');
    var West = document.querySelector('.West');
    var Akmola = document.querySelector('.Akmola');
    var Karaganda = document.querySelector('.Karaganda');
    var North = document.querySelector('.North');
    var Pavlodar = document.querySelector('.Pavlodar');
    var East = document.querySelector('.East');
    var Almaty = document.querySelector('.Almaty');
    var Mangystau = document.querySelector('.Mangystau');
    var South = document.querySelector('.South');
    var Zhambyl = document.querySelector('.Zhambyl');
    var AlmatyCity = document.querySelector('.AlmatyCity');
    var AstanaCity = document.querySelector('.AstanaCity');

    if (hash == "kz") {
        Aktobe.setAttribute("description-data", "<span id='bold'>Ақтөбе облысы</span> <img src='src/regions/Aktobe.jpg' alt='AKTOBE'> <br> <span id='bold'>Құрылған күні:</span> 10 наурыз 1932 ж. <br> <span id='bold'>Бас қала:</span> Ақтөбе <br> <span id='bold'>Халық:</span> 893 669 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 300 629 км²");
        Kostanai.setAttribute("description-data", "<span id='bold'>Қостанай облысы</span> <img src='src/regions/Kostanai.jpg' alt='AKTOBE'> <br> <span id='bold'>Құрылған күні:</span> 29 шілде 1936 ж. <br> <span id='bold'>Бас қала:</span> Қостанай <br> <span id='bold'>Халық:</span> 864 529 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 196 001 км²");
        Kyzylorda.setAttribute("description-data", "<span id='bold'>Қызылорда облысы</span> <img src='src/regions/Kyzylorda.jpg' alt='KYZYLORDA'> <span id='bold'>Құрылған күні:</span> 15 қаңтар 1938 ж. <br> <span id='bold'>Бас қала:</span> Қызылорда <br> <span id='bold'>Халық:</span> 814 461 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 226 019 км²");
        Atyrau.setAttribute("description-data", "<span id='bold'>Атырау облысы</span> <img src='src/regions/Atyrau.jpg' alt='ATYRAU'> <br> <span id='bold'>Құрылған күні:</span> 15 қаңтар 1938 ж. <br> <span id='bold'>Бас қала:</span> Атырау <br> <span id='bold'>Халық:</span> 657 118 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 118 631 км²");
        West.setAttribute("description-data", "<span id='bold'>Батыс Қазақстан облысы</span> <img src='src/regions/Uralsk.jpg' alt='URALSK'> <br> <span id='bold'>Құрылған күні:</span> 10 наурыз 1932 ж. <br> <span id='bold'>Бас қала:</span> Орал <br> <span id='bold'>Халық:</span> 661 172 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 151 339 км²");
        Akmola.setAttribute("description-data", "<span id='bold'>Ақмола облысы</span> <img src='src/regions/Kokshetau.jpg' alt='AKMOLA'> <br> <span id='bold'>Құрылған күні:</span> 14 қазан 1939 ж. <br> <span id='bold'>Бас қала:</span> Көкшетау <br> <span id='bold'>Халық:</span> 735 481 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 146 219 км²");
        Karaganda.setAttribute("description-data", "<span id='bold'>Қарағанды облысы</span> <br> <img src='src/regions/Karaganda.jpg' alt='KARAGANDA'> <br> <span id='bold'>Құрылған күні:</span> 10 наурыз 1933 ж. <br> <span id='bold'>Бас қала:</span> Қарағанды <br> <span id='bold'>Халық:</span> 1 375 788 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 427 982 км²");
        North.setAttribute("description-data", "<span id='bold'>Солтүстік Қазақстан облысы</span> <img src='src/regions/Petropavlovsk.jpg' alt='PETROPAVLOVSK'> <br> <span id='bold'>Құрылған күні:</span> 29 шілде 1936 ж. <br> <span id='bold'>Бас қала:</span> Петропавл <br> <span id='bold'>Халық:</span> 543 679 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 97 993 км²");
        Pavlodar.setAttribute("description-data", "<span id='bold'>Павлодар облысы</span> <img src='src/regions/Pavlodar.jpg' alt='PAVLODAR'> <br> <span id='bold'>Құрылған күні:</span> 15 қаңтар 1938 ж. <br> <span id='bold'>Бас қала:</span> Павлодар <br> <span id='bold'>Халық:</span> 751 011 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 124 755 км²");
        East.setAttribute("description-data", "<span id='bold'>Шығыс Қазақстан облысы</span> <img src='src/regions/Ust-Kamenogorsk.jpg' alt='UST-KAMENOGORSK'> <span id='bold'>Құрылған күні:</span> 20 ақпан 1932 ж. <br> <span id='bold'>Бас қала:</span> Өскемен <br> <span id='bold'>Халық:</span> 1 363 656 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 283 226 км²");
        Almaty.setAttribute("description-data", "<span id='bold'>Алматы облысы</span> <img src='src/regions/Taldykorgan.jpg' alt='TALDYKORGAN'> <br> <span id='bold'>Құрылған күні:</span> 10 наурыз 1932 ж. <br> <span id='bold'>Бас қала:</span> Талдықорған <br> <span id='bold'>Халық:</span> 2 038 934 адам (2019 ж.) <br> <span id='bold'>Аудан:</span> 223 911 км²");
        Mangystau.setAttribute("description-data", "<span id='bold'>Маңғыстау облысы</span> <img src='src/regions/Aktau.jpg' alt='AKTAU'> <br> <span id='bold'>Құрылған күні:</span> 20 наурыз 1973 ж.<br> <span id='bold'>Бас қала:</span> Ақтау <br> <span id='bold'>Халық:</span> 719 559 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 165 642 км²");
        South.setAttribute("description-data", "<span id='bold'>Түркістан облысы</span>  <img src='src/regions/Turkestan.jpg' alt='TURKESTAN'> <span id='bold'>Құрылған күні:</span> 10 наурыз 1932 ж. <br> <span id='bold'>Бас қала:</span> Түркістан <br> <span id='bold'>Халық:</span> 2 044 551 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 117 249 км²");
        Zhambyl.setAttribute("description-data", "<span id='bold'> Жамбыл облысы </span> <img src='src/regions/Taraz.jpg' alt='TARAZ'> <br> <span id='bold'>Құрылған күні:</span> 14 қазан 1939 ж. <br> <span id='bold'>Бас қала:</span> Тараз <br> <span id='bold'>Халық:</span> 1 139 151 адам (2021 ж.) <br> <span id='bold'>Аудан:</span> 144 264 км²");
        AlmatyCity.setAttribute("description-data", "<span id='bold'> Алматы қаласы </span> <img src='src/regions/Almaty.jpg' alt='NUR_SULTAN'> <br> <span id='bold'>Қала болды:</span> 1862 ж. <br> <span id='bold'>Халық:</span> 1 916 822 адам (2020 ж.) <br> <span id='bold'>Аудан:</span> 682 км²");
        AstanaCity.setAttribute("description-data", "<span id='bold'> Нұр-Сұлтан қаласы (Астана) </span> <img src='src/regions/Nur-Sultan.jpg' alt='NUR_SULTAN'> <br> <span id='bold'>Қала болды:</span> 1862 ж. <br> <span id='bold'>Халық:</span> 1 002 874 адам (2017 ж.) <br> <span id='bold'>Аудан:</span> 722 км²");
    };

    if (hash == "en") {
        Aktobe.setAttribute("description-data", "<span id='bold'>Aktobe region</span> <img src='src/regions/Aktobe.jpg' alt='AKTOBE'> <br> <span id='bold'>Date of formation:</span> 10 March 1932 y. <br> <span id='bold'>Main city:</span> Aktobe <br> <span id='bold'>Population:</span> 893 669 people (2021 y.) <br> <span id='bold'>Area:</span> 300 629 km²");
        Kostanai.setAttribute("description-data", "<span id='bold'>Kostanay region</span> <img src='src/regions/Kostanai.jpg' alt='AKTOBE'> <br> <span id='bold'>Date of formation:</span> 29 July 1936 y. <br> <span id='bold'>Main city:</span> Kostanay <br> <span id='bold'>Population:</span> 864 529 people (2021 y.) <br> <span id='bold'>Area:</span> 196 001 km²");
        Kyzylorda.setAttribute("description-data", "<span id='bold'>Kyzylorda region</span> <img src='src/regions/Kyzylorda.jpg' alt='KYZYLORDA'> <span id='bold'>Date of formation:</span> 15 January 1938 y. <br> <span id='bold'>Main city:</span> Kyzylorda <br> <span id='bold'>Population:</span> 814 461 people (2021 y.) <br> <span id='bold'>Area:</span> 226 019 km²");
        Atyrau.setAttribute("description-data", "<span id='bold'>Atyrau region</span> <img src='src/regions/Atyrau.jpg' alt='ATYRAU'> <br> <span id='bold'>Date of formation:</span> 15 January 1938 y. <br> <span id='bold'>Main city:</span> Atyrau <br> <span id='bold'>Population:</span> 657 118 people (2021 y.) <br> <span id='bold'>Area:</span> 118 631 km²");
        West.setAttribute("description-data", "<span id='bold'>West-Kazakhstan region</span> <img src='src/regions/Uralsk.jpg' alt='URALSK'> <br> <span id='bold'>Date of formation:</span> 10 March 1932 y. <br> <span id='bold'>Main city:</span> Uralsk <br> <span id='bold'>Population:</span> 661 172 people (2021 y.) <br> <span id='bold'>Area:</span> 151 339 km²");
        Akmola.setAttribute("description-data", "<span id='bold'>Akmola region</span> <img src='src/regions/Kokshetau.jpg' alt='AKMOLA'> <br> <span id='bold'>Date of formation:</span> 14 October 1939 y. <br> <span id='bold'>Main city:</span> Kokshetau <br> <span id='bold'>Population:</span> 735 481 people (2021 y.) <br> <span id='bold'>Area:</span> 146 219 km²");
        Karaganda.setAttribute("description-data", "<span id='bold'>Karaganda region</span> <br> <img src='src/regions/Karaganda.jpg' alt='KARAGANDA'> <br> <span id='bold'>Date of formation:</span> 10 March 1933 y. <br> <span id='bold'>Main city:</span> Karagandy <br> <span id='bold'>Population:</span> 1 375 788 people (2021 y.) <br> <span id='bold'>Area:</span> 427 982 km²");
        North.setAttribute("description-data", "<span id='bold'>North-Kazakhstan region</span> <img src='src/regions/Petropavlovsk.jpg' alt='PETROPAVLOVSK'> <br> <span id='bold'>Date of formation:</span> 29 July 1936 y. <br> <span id='bold'>Main city:</span> Petropavlovsk <br> <span id='bold'>Population:</span> 543 679 people (2021 y.) <br> <span id='bold'>Area:</span> 97 993 km²");
        Pavlodar.setAttribute("description-data", "<span id='bold'>Pavlodar region</span> <img src='src/regions/Pavlodar.jpg' alt='PAVLODAR'> <br> <span id='bold'>Date of formation:</span> 15 January 1938 y. <br> <span id='bold'>Main city:</span> Pavlodar <br> <span id='bold'>Population:</span> 751 011 people (2021 y.) <br> <span id='bold'>Area:</span> 124 755 km²");
        East.setAttribute("description-data", "<span id='bold'>South Kazakhstan region</span> <img src='src/regions/Ust-Kamenogorsk.jpg' alt='UST-KAMENOGORSK'> <span id='bold'>Date of formation:</span> 20 February 1932 y. <br> <span id='bold'>Main city:</span> Ust-Kamenogorsk <br> <span id='bold'>Population:</span> 1 363 656 people (2021 y.) <br> <span id='bold'>Area:</span> 283 226 km²");
        Almaty.setAttribute("description-data", "<span id='bold'>Almaty region</span> <img src='src/regions/Taldykorgan.jpg' alt='TALDYKORGAN'> <br> <span id='bold'>Date of formation:</span> 10 March 1932 y. <br> <span id='bold'>Main city:</span> Taldykorgan <br> <span id='bold'>Population:</span> 2 038 934 people (2019 y.) <br> <span id='bold'>Area:</span> 223 911 km²");
        Mangystau.setAttribute("description-data", "<span id='bold'>Mangystau region</span> <img src='src/regions/Aktau.jpg' alt='AKTAU'> <br> <span id='bold'>Date of formation:</span> 20 March 1973 y.<br> <span id='bold'>Main city:</span> Aktau <br> <span id='bold'>Population:</span> 719 559 people (2021 y.) <br> <span id='bold'>Area:</span> 165 642 km²");
        South.setAttribute("description-data", "<span id='bold'>Turkestan region</span>  <img src='src/regions/Turkestan.jpg' alt='TURKESTAN'> <span id='bold'>Date of formation:</span> 10 March 1932 y. <br> <span id='bold'>Main city:</span> Turkestan <br> <span id='bold'>Population:</span> 2 044 551 people (2021 y.) <br> <span id='bold'>Area:</span> 117 249 km²");
        Zhambyl.setAttribute("description-data", "<span id='bold'> Jambyl region </span> <img src='src/regions/Taraz.jpg' alt='TARAZ'> <br> <span id='bold'>Date of formation:</span> 14 October 1939 y. <br> <span id='bold'>Main city:</span> Taraz <br> <span id='bold'>Population:</span> 1 139 151 people (2021 y.) <br> <span id='bold'>Area:</span> 144 264 km²");
        AlmatyCity.setAttribute("description-data", "<span id='bold'> Almaty city </span> <img src='src/regions/Almaty.jpg' alt='NUR_SULTAN'> <br> <span id='bold'>Became a city:</span> 1862 y. <br> <span id='bold'>Population:</span> 1 916 822 people (2020 y.) <br> <span id='bold'>Area:</span> 682 km²");
        AstanaCity.setAttribute("description-data", "<span id='bold'> Nur-Sultan city (Astana) </span> <img src='src/regions/Nur-Sultan.jpg' alt='NUR_SULTAN'> <br> <span id='bold'>Became a city:</span> 1862 y. <br> <span id='bold'>Population:</span> 1 002 874 people (2017 y.) <br> <span id='bold'>Area:</span> 722 km²");
    };

    console.log(hash)

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        };
    };
};

changeLanguage();