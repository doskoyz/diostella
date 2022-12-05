/*  ================================================
    GENERAL CONFIGURATION
============================================= */
window.MUSIC = {
        'url': "https://doskoyz.github.io/diostella/assets/music/song.mp3",
        'box': '#music-box'
    };
window.EVENT = 1670641200;
window.BOOKS = [{"bank":"Bank Central Asia (BCA)","number_account":"1341464600"}];

// ---------- Start Your Journey (Function) --------------------------------------------------
function startTheJourney() {
    $('html, body').animate({ scrollTop: $('#start').offset().top }, 'slow');
    $('.top-cover').eq(0).addClass('hide');
    $('#gift-form').hide();
    $('body').eq(0).css('overflow', 'visible');

    if (typeof playMusicOnce === 'function') playMusicOnce();

    setTimeout(function() {
        // Looping the aos animate
        $('.aos-animate').each(function(i, el){
            // If the parent is not 'Top Cover'
            if ($(el).closest('.top-cover').length == 0) {
                // Remove 'aos-animate' class
                $(el).removeClass('aos-animate');
                setTimeout(function(){
                    // Add 'aos-amimate' class
                    $(el).addClass('aos-animate');
                }, 1000);
            }
        });
    }, 100);

    setTimeout(function(){
        $('.top-cover').eq(0).remove();
    }, 3000);
}

// ---------- ALERT --------------------------------------------------
var $alert = $('#alert');                           // alert
var $alertClose = $('#alert .alert-close');         // alert close
var $alertText = $('#alert .alert-text');           // Alert Text

// ---------- Hide Alert (Function) --------------------------------------------------
function hideAlert() {
    $alert.removeClass();           // Remove All Class
    $alert.addClass('alert hide');                                        // hiding alert
}

// ---------- Show Alert (Function) --------------------------------------------------
function showAlert(message, status) {
    if (status != '') {
        $alert.removeClass();     // Remove All Class
        $alert.addClass('alert show ' + status);
        $alertText.text(message);
        setTimeout(hideAlert, 3000);
    }
}

// ---------- Copy to  (Function) --------------------------------------------------
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". â€“ Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showAlert('Berhasil disalin ke papan klip', 'success');
}

// ---------- Copy Account [ON CLICK] ---------------------------------------------------------------
$(document).on('click', '.copy-account', function(e){
    e.preventDefault();
    var book = $(this).closest('.book');
    var number = $(book).find('.account-number');
    copyToClipboard(number.html());
});

// ---------- Wedding gift ---------------------------------------------------------------------------
$('#gift-btn').on('click', function(e){
    e.preventDefault();
    $('#gift-form').show();
    $('#gift-form').removeClass('aos-animate');
    setTimeout(function() {
        $('#gift-form').addClass('aos-animate');
    }, 400);
});

// ---------- Disabled Dragging an image [ON DRAGSTART] -----------------------------------------------
$('img').on('dragstart', function(e){
    e.preventDefault();
});

/*  ==============================
        CALLING
============================== */
function sendComment(data) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://diostella-e700.restdb.io/rest/comments",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "636be4cac890f30a8fd1f2a0",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(data)
    }

    $.ajax(settings).done(function (response) {
        $('#send-comment').text('Kirim ucapan');
        showAlert('Ucapan sudah diterima', 'success');
    });
}

/*  ================================================
    SAVE THE DATE
============================================= */
// ----------- COUNTDOWN (Function) ------------------------------------------------------
(function countdown(){
    if (typeof window.EVENT != 'undefined') {
        var schedule = window.EVENT,
            event = new Date(schedule * 1000).getTime(),
            start = setInterval(rundown, 1000);

        // Rundown
        function rundown() {
            var now = new Date().getTime(),
                distance = event - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)),                            // days
                hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),      // hours
                minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),              // minutes
                seconds = Math.floor((distance % (1000 * 60)) / 1000);                          // seconds

            if (distance < 0) {
                clearInterval(start);
                $('.count-day').text('0');
                $('.count-hour').text('0');
                $('.count-minute').text('0');
                $('.count-second').text('0');
            } else {
                $('.count-day').text(days);
                $('.count-hour').text(hours);
                $('.count-minute').text(minutes);
                $('.count-second').text(seconds);
            }
        }
    }
}());

/*  ==============================
        WEDDING WISH
============================== */
$(document).ready(function(){
    comments = [
//      {"name": "", "comment":"", "date": "Sen, 5 Des 2022 "},
        {"name": "", "comment":"", "date": "Sen, 5 Des 2022 "},
        {"name": "Viga dan Sarah", "comment":"Happy wedding stella dan dios happily ever after for both of you ", "date": "Sen, 5 Des 2022 06:10:54 GMT+07"},
        {"name": "Natalia Tika Indrawati, S.Pd.", "comment":"Bahagianyaaaaa......Ibu senang dan sangat terharu, Ibu menyambuat suka cita pernikahan kaliannn.....bahagia selalu, lalui perjalanan kehidupan dengan bergandeng tangan, saling menguatkan, saling menjaga, saling memahami, saling mencintai sampai akhir zaman....Doa tulus dari Ibu untuk kaliannn.....Sayang kaliannnn.....🥰🌹", "date": "Min, 4 Des 202216:04:53 GMT+07"},
        {"name": "Pa widi santa maria", "comment":"Selamat untuk Dios dan Stella. Turut berbahagia akhirnys Dios dan Stella bisa dipersatukan Tuhan dalam pernikahan untuk membangun rumah tangga, setelah sekian lama berjuang mempertahankan kebersamaan nya. Semoga terbentuk keluarga yang hermonis, tetap setia satu sama lain dan menjadikan berkat yang semakin  mencukupi  untuk keluarga. Aamiin", "date": "Min, 4 Des 202215:55:41 GMT+07"},
        {"name": "Iwan RK & Neti S Dewi", "comment":"Congratulations to the best parents of the bride. May your daughter glow like a full moon and enter happily into her new life. You must be proud of her.Dios & StellaCongratulations on your wedding.May your future bring you joy and your love forever grow.Congratulations once again!", "date": "Min, 4 Des 2022 10:51:49 GMT+07"},
        {"name": "Nike,Nico & Nicole", "comment":"Lancar2 sampai hari H yos & tella! Longlast, Tuhan Yesus turut serta dalam pernikahan kelian berdua nanti ,diberkati segalanya! ❤️", "date": "Jum, 2 Des 2022 21:24:37 GMT+07"},
        {"name": "Christoper", "comment":"Congrats dios & stella! Lancar2 yaa! Langgeng terus, Godbless", "date": "Jum, 2 Des 2022 15:21:27 GMT+07"},
        {"name": "Susi Semarang", "comment":"Selamat menempuh hidup baru Dios & Stella semoga bahagia selalu , langgeng dan menjadi keluarga yang terberkati", "date": "Kam, 1 Des 2022 19:14:53 GMT+07"},
        {"name": "Sugianto J", "comment":"Selamat Mrnempuh Hidup Baru Dios Stella, semoga menjadi keluarga yg selalu Di Berkati 🙏", "date": "Kam, 1 Des 2022 12:13:18 GMT+07"},
        {"name": "Anonymus", "comment":"congrats cuy nanti kita ke tidung lagi wkwk", "date": "Rab, 30 Nov 2022 21:12:45 GMT+07"},
        {"name": "Gepe", "comment":"Happy Wedding Dios Stella! Smoga lancar sampai hari H! Selamat menempuh hidup berumah tangga hingga maut memisahkan <3", "date": "Rab, 30 Nov 2022 17:52:01 GMT+07"},
        {"name": "Julianto (Tebe)", "comment":"Terima kasih untuk undangannya. Selamat ya untuk kedua mempelai, untuk komitmen memulai hidup berkeluarga. Apapun tantangan yg akan terjadi di masa yang akan datang,ingatlah selalu akan hari ini. Tuhan memberkati kedua mempelai dan keluarga mempelai.", "date": "Rab, 30 Nov 2022 11:30:05 GMT+07"},
        {"name": "M Niang Semarang", "comment":"Selamat Menempuh Hidup Baru Dios Stella ,rukun selalu,langgeng,cepat memperoleh momongan , menjadi keluarga yg terberkati", "date": "Sel, 29 Nov 2022 17:13:04 GMT+07"},
        {"name": "Nita", "comment":"Congrats ko Dios & ci Stella! Semoga lancar sampai hari H !! ❤", "date": "Sel, 29 Nov 2022 12:41:15 GMT+07"},
        {"name": "Mey hwa", "comment":"Happy Wedding Stella &Dios Wishing you both a happy marriage life ❤❤ ", "date": "Sel, 29 Nov 2022 06:52:19 GMT+07"},
        {"name": "Arie", "comment":"Congrats dios & stella!! Lancar sampe hari H, happily ever after y, Gbu🎉🎉🎉", "date": "Sen, 28 Nov 2022 21:11:58 GMT+07"},
        {"name": "Yanuar Wagianto", "comment":"Congrats Dios & Stella\n\nMay today mark the first of the rest of your life, filled with love and fellowship.\n\nGod Bless🥂♥️", "date": "Sen, 28 Nov 2022 19:06:01 GMT+07"},
        {"name": "Vanya dan Iip", "comment":"Congratz Dios n stella.. lancar2 sampai hr H, menjadi kluarga yg diberkati selalu ❤️", "date": "Sen, 28 Nov 2022 18:51:01 GMT+07"},
        {"name": "Reinaldo Khowanto", "comment":"Congratss dios & tella!! Lancar2 sampe hari H ya, dan langgeng sampai selama2nya", "date": "Sen, 28 Nov 2022 17:44:57 GMT+07"},
        {"name": "Lisa dan klg", "comment":"Selamat menempuh hidup baru dioz, selamat memasuki babak baru kehidupan,,, semoga selalu langgeng dan menjadi keliarga yg terberkati", "date": "Sen, 28 Nov 2022 06:19:52 GMT+07"},
        {"name": "Lanny", "comment":"Semoga persiapannya hingga hari bahagianya lancar dan menjadi keluarga yg bahagia selalu Tuhan selalu memberkati amin", "date": "Sen, 28 Nov 2022 04:59:48 GMT+07"},
        {"name": "Grace Selda", "comment":"Happy wedding Stella & Dios!! Happily ever after🥰🥰🥰 God bless your marriage🥰", "date": "Min, 27 Nov 2022 20:23:09 GMT+07"},
        {"name": "Ricky Tan & Christiana Novellyn", "comment":"Selamat Dios & Stella !! Happy Wedding ❤️❤️❤️ Wishing you all of the love and happiness and wishing you long and happy marriage ❤️❤️❤️", "date": "Min, 27 Nov 2022 14:47:15 GMT+07"},
        {"name": "Feliana Tanuwijaya & Rodrigue Esken Chang", "comment":"Happy Wedding Dios & Stella! Wish u both a happy marriage life! Happy happy yah🤍", "date": "Min, 27 Nov 2022 00:09:46 GMT+07"},
        {"name": "Novi & Daniel", "comment":"Happy wedding Dios & Stella!! Wishing you both a happy marriage life ❤️❤️", "date": "Sab, 26 Nov 2022 22:19:37 GMT+07"},
        {"name": "Vindy", "comment":"Happy wedding Dios dan Stella! Lancar terus, sehat sehat yah! Happy for both of you 💕 God Bless you both ", "date": "Sab, 26 Nov 2022 19:07:56 GMT+07"},
        {"name": "Mekjohn", "comment":"Selamat ya Dios dan Stella, semoga lancar terus kedepannya, Semoga keluarga yang akan kalian bina diberkati selalu oleh Tuhan Yesus, bahagia dan rukun selama-lamanya, congrats yaaaa", "date": "Sab, 26 Nov 2022 18:03:53 GMT+07"},
        {"name": "Flaviana Briane Sulistianto & Jonathan Elbert ", "comment":"Congratulations so happy for u Dios 💜 Stellaa! Longlast yaaah and happily ever after pkknya, GBU.", "date": "Sab, 26 Nov 2022 17:28:41 GMT+07"},
        {"name": "Riana & Kiki", "comment":"Lancar lancar sampe hari H dios and stella. Bahagia selalu untuk kalian berdua yaa. Langgeng terus sama kakek nenek. So happy for both ot you! Tuhan berkati kalian berduaa ❤️💖✨🫶", "date": "Sab, 26 Nov 2022 16:11:47 GMT+07"},
        {"name": "Dexkoyz", "comment":"You guys are so cute!\n\nNo roasting for today. Juli, please!\n\nSelamat untuk temanku Dios dan Stella. Kalian telah berhasil melalui waktu yang naik turun selama 6 tahun. Luar biasa!\n\nNow, this is the time! Mengucap janji sakral. Berjanji untuk menjadi satu untuk selamanya. Ini memang awalan. Tapi ku yakin kalian bisa menjadi pasangan yang luar biasa dan diberkahi oleh Tuhan.\n\nGod bless you always, Dios dan Stella!\n\nRegards,\nLM", "date": "Sab, 26 Nov 2022 11:46:01 GMT+07"},
        {"name": "Janice & Harme", "comment":"Congratssss tellaa diosss! Semoga smua lancar2 yaaa. Happily ever after for you both ❤️ ", "date": "Sab, 26 Nov 2022 10:30:55 GMT+07"},
        {"name": "Ririn & Ko Christian", "comment":"Dios and ci stella lancar” yaa sampe hari H! wishing all the best for your wedding🥰 semoga langgeng terus sampe maut memisahkan🥳 God bless you all!", "date": "Sab, 26 Nov 2022 08:37:51 GMT+08"},
        {"name": "Jevon Averill", "comment":"Congrats, Dios and Stella! Semoga lancar sampai hari h ya. May your marriage be blessed with joy. Happily ever after", "date": "Jum, 25 Nov 2022 23:48:39 GMT+07"},
        {"name": "Galant", "comment":"Congratz Dios dan stella , happy wedding 🙏🙏", "date": "Jum, 25 Nov 2022 20:18:28 GMT+07"},
        {"name": "Vannia", "comment":"May this marriage fill your life with joy, happiness, and lots of love. Congratulations as you start a new journey! God bless you", "date": "Jum, 25 Nov 2022 17:14:49 GMT+07"},
        {"name": "Papi dan Mami (Stella)", "comment":"Stella dan Dios, semoga kalian dilimpahi kebahagiaan dan dpt membangun keluarga yg penuh cinta kasih sayang, bisa saling melengkapi  satu sama lain.. Tuhan Yesus memberkati , Amin 🙏🏻", "date": "Jum, 25 Nov 2022 15:00:38 GMT+07"},
        {"name": "Alvin", "comment":"It's like a give or take relationship. You either give or she knows how to take it. Happy married life ahead!", "date": "Kam, 24 Nov 2022 20:19:39 GMT+07"},
        {"name": "Okta", "comment":"Semoga persiapan hingga acara pada lancar semua dan selalu menjadi keluarga bahagia, Tuhan berkati", "date": "Kam, 24 Nov 2022 02:06:53 GMT+07"},
        {"name": "Angela dan Michael", "comment":"Congratsss twinneyyyyyyy and pren, cant wait to see you two in your wedding day, loveeeee :) <3", "date": "Rab, 23 Nov 2022 21:08:11 GMT+07"},
        {"name": "Papa & Mama (Dios)", "comment": "Bahagia ,Sejahtera Rukun rukun Selalu ,Dalam Lindungan Tuhan. Tuhan  yesus Memberkati.", "date": "Sel, 22 Nov 2022 18:52:33 GMT+07"},
        {"name": "Chris & Dian", "comment": "Lancar2 yaa sampai Hari H semoga di cukupkan dalam segala hal dan bahagia selalu untuk membangun keluarga kecilnya..Langgeng selalu smp maut memisahkan ", "date": "Sel, 22 Nov 2022 17:30:58 GMT+07"},
        {"name": "Yashima & Dina", "comment": "Lancar terus Sampe wedding...selalu diberkati untuk keluarga baru nya, saling terbuka satu sama lain, bahagia terus, diberkati Sampe kakek nenek🥳🎉😇🤗🙏", "date": "Sel, 22 Nov 2022 16:27:03 GMT+07"},
        {"name": "Dicky n Winda", "comment": "Congratz lancar2 sampe hari H Happily ever after GBU both", "date": "Sel, 22 Nov 2022 13:24:12 GMT+07"},
    ];
    for (idx in comments) {
        comment = comments[idx];
        $('section.comment-outer .comments').append('<div class="comment aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><div class="comment-head"><p><strong>' + comment.name + '</strong> <i class="fas fa-check"></i></p></div><div class="comment-body"><p>' + comment.comment + '</p></div><div class="comment-foot"><small>' + comment.date + '</small></div></div>');
    }
});

$('#send-comment').click(function(e){
    e.preventDefault();
    var data = {};
    var isValid = true;
    $('.form-control').each(function(idx, value){
        var names = value.name.split('_');
        if (value.value == "" || value.value == null) {
            showAlert(names[1] + ' tidak boleh kosong', 'error');
            isValid = false;
            return false;
        }
        data[names[0]] = value.value;
    });
    if (isValid) {
        data['date'] = Date();
        $('#send-comment').text('Mengirim');
        sendComment(data);
    }
});

/*  ==============================
        MUSIC
============================== */
var isMusicAttemptingToPlay = false,
    isMusicPlayed           = false,
    playBoxAnimation,
    pauseBoxAnimation,
    pauseMusic,
    playMusic;

// Background Music
(function backgroundMusic() {
    if (typeof window.MUSIC != 'undefined') {
        var url = window.MUSIC.url,
            box = window.MUSIC.box;

        // if url is not empty and the box so
        if (url != '') {
            var backgroundMusic = document.createElement("audio");    // Background Music
            backgroundMusic.autoplay = true;
            backgroundMusic.muted = true;
            backgroundMusic.loop = true;
            backgroundMusic.load();
            backgroundMusic.src = url;

            // Playing Box Animation
            playBoxAnimation = function() {
                if (!$(box).hasClass('playing')) {
                    $(box).addClass('playing');
                }

                if ($(box).css('animationPlayState') != 'running') {
                    $(box).css('animationPlayState', 'running');
                }
            }

            // Pause Box Animation
            pauseBoxAnimation = function() {
                if ($(box).hasClass('playing')) {
                    if ($(box).css('animationPlayState') == 'running') {
                        $(box).css('animationPlayState', 'paused');
                    }
                }
            }

            // Pause Music
            pauseMusic = function() {
                backgroundMusic.pause();
                pauseBoxAnimation();

                isMusicAttemptingToPlay = true;
                isMusicPlayed = false;
            };

            // Play Music
            playMusic = function() {
                isMusicAttemptingToPlay = false;
                backgroundMusic.muted = false;
                var promise = backgroundMusic.play();

                if (promise !== undefined) {
                    promise.then(_ => {
                        isMusicPlayed = true;
                        // console.log('Audio berhasil diputar');
                        playBoxAnimation();
                    }).catch(error => {
                        isMusicPlayed = false;
                        // console.log('Tidak dapat memutar audio');
                        pauseBoxAnimation();
                        // console.log(error);
                    });
                }
            };

            // Music Box
            $(document).on('click', box, function(e) {
                e.preventDefault();

                if (isMusicPlayed) {
                    pauseMusic();
                } else {
                    playMusic();
                }
            });

            // Pause Audio When Click Video Button
            $(document).on('click', '.play-btn, .play-youtube-video', function(e){
                e.preventDefault();
                if (isMusicPlayed) return pauseMusic();
            });

            // Is Box Hidden?
            var prevScrollpos = window.pageYOffset;
            var isBoxHidden = false;
            var boxTimeout;

            // Show Music Box
            var showMusicBox = function() {
                // Show Music Box
                $(box).removeClass('hide');                     // Showing the box
                isBoxHidden = false;                            // Box is not hidden

                clearTimeout(boxTimeout);                       // Clear Timeout
            }

            // Hide Music Box
            var hideMusicBox = function() {
                // Hide Music Box
                $(box).addClass('hide');                        // Hiding the box
                isBoxHidden = true;                             // Box is hidden

                clearTimeout(boxTimeout);                       // Clear Timeout
                boxTimeout = setTimeout(showMusicBox, 5000);    // Set Timeout
            }

            // Window On Scroll
            $(window).on('scroll', function(){
                var currentScrollPos = window.pageYOffset;

                if (prevScrollpos > currentScrollPos) {
                    if (isBoxHidden) showMusicBox();
                } else {
                    if (!isBoxHidden) hideMusicBox();
                }

                prevScrollpos = currentScrollPos;
            });

        }
    }
}());

// ---------- Play Music Once --------------------------------------------------
function playMusicOnce() {
    // Play Music is defined
    if (typeof playMusic === 'function') {
        // Is music NOT attemp to play && Music NOT played yet
        if (!isMusicAttemptingToPlay && !isMusicPlayed) {
            setTimeout(playMusic, 500);
        }
    }
}

// Window On Load
$(window).on("load click scroll", function(e) {
    // Play Music Once
    playMusicOnce();
});

// Trigger Music to play when document is scroled or clicked
$(document).on("click scroll", function(e) {
    // Play Music Once
    playMusicOnce();
});

// Document is ready!
$(document).ready(function(){
    var responder = getUrlParameter('name');
    $('.greetings h1').text(responder);
    $('p.responder').text(responder);
    setTimeout(() => {
        $('body').trigger('click');
    }, 1000);

//    css calculation
    var div = $('section.save-date');
    var width = div.width();

    div.css('height', width * 0.666);
});

/*  ==============================
        OTHERS
============================== */
// ---------- Modal Video ---------------------------------------------------------------
var modal_video_options = {
    youtube: {
        autoplay: 1,
        cc_load_policy: 1,
        color: null,
        controls: 1,
        disableks: 0,
        enablejsapi: 0,
        end: null,
        fs: 1,
        h1: null,
        iv_load_policy: 1,
        // list: null,
        listType: null,
        loop: 0,
        modestbranding: null,
        mute: 0,
        origin: null,
        // playlist: null,
        playsinline: null,
        rel: 0,
        showinfo: 1,
        start: 0,
        wmode: 'transparent',
        theme: 'dark',
        nocookie: false,
    }
};


$('.play-btn').modalVideo(modal_video_options);
$('.play-youtube-video').modalVideo(modal_video_options);


// ---------- AOS (Animation) ------------------------------------------------------
var AOSOptions = {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 0, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 0, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 10, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
}

// Run AOS on Load
$(window).on('load', function () {
    AOS.refresh();
});

$(function() {
    AOS.init(AOSOptions);
});

$(window).on("scroll", function () {
    AOS.init(AOSOptions);
});

// ---------- LIGHT GALLERY --------------------------------------------------
$(function(){
    lightGallery(document.getElementById('lightGallery'), {
        download: false,
    });
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

// data
var galleryImages = [
//QUEEN GAMBIT
{'id':'1jJTWzIN1Dz6QwN1pw5cFuDzOHvsCG50a', 'name':'DSCF5729-min'},
{'id':'1kOhgAYVLg4jDTpJLizYDI0N1Tm_tfIBT', 'name':'DSCF5663-min'},
{'id':'1W72uS2R97nqA2UmbBQYLTpHP59Bl7irJ', 'name':'DSCF5744-min'},
{'id':'1MSmf-QapnkbeNOT-4qpavGT1xriXOJH6', 'name':'DSCF5769-min'},
{'id':'167pEj0K0hxE-ujsc_9M33EGUAPShmsNe', 'name':'DSCF5636-min'},
{'id':'1WxpALmIEbkA63VbOMP3Sma2sw-mCwYr9', 'name':'DSCF5584-min'},
{'id':'1FCor5WpMGPFlZK99T7TtdzEcZwxLQnU0', 'name':'1X1A0131-min'},
//TAMBLINGAN
{'id':'1sAKPVfLFXl3y5UWgeS0l20tbU1yavsi4', 'name': 'DSCF5413-min'},
{'id':'1uJjCidYV36_Kzms1tbLz87Qb29N7Oj4Z', 'name': '1X1A9999-min'},
{'id':'1q37-h0p5miUQX7lwjdUEDGNIxjoVKKZI', 'name': 'DSCF5519-min'},
{'id':'1bkJlxNvQm6Y3vbPATcKiIesLwHS0nBy-', 'name': '1X1A0059-min'},
{'id':'10AFlXtEfDNo8iJlROeVLPnVGLCYZ3sjl', 'name': 'DSCF5335-min'},
{'id':'1yFci6atz7wVBm-APJUrm1-dhhc78JLd-', 'name': 'DSCF5353-min'},
{'id':'1TuNkJq__oJqgYlBm7jGU7KrKR2hLnl1B', 'name': '1X1A9934-min'},
//SAVANA
{'id':'17bsWyDrunOdv6FjNE0wFOF_VLA5meOGR', 'name':'1X1A0748-min'},
{'id':'1zLpeM1Va35f-211xBVhFe12RJITSHDGn', 'name':'1X1A0727-min'},
{'id':'1SpwrEH3fyqb3ymJymFRGb4fCF7l-P7Ye', 'name':'1X1A0764-min'},
{'id':'1NDJDQobixc_kGbdQ_hUFsWXrLsMC7ptU', 'name':'1X1A0805-min'},
{'id':'1oftlwxZl0CB5QUJbIGAkVBBzretwH5VB', 'name':'1X1A0778-min'},
{'id':'1C6Jrg-BlxLz44b7VnO0NA4A_WPhUHw7X', 'name':'DSCF6213-min'},
{'id':'1-0XtqLARb7qCZl_pHSSqpJdAAbTWPtjE', 'name':'DSCF6259-min'},
{'id':'1d3wvBEByukZL0iljwHZb6BOgc9D-B1-U', 'name':'1X1A0766-min'},
//CASA NOMADA
{'id':'1jEjdaxWQ2ek6mcIYL9CF9ubxQS_3Q5XT', 'name':'1X1A0251-min'},
{'id':'19LwUrRcpDECdyN7ubmTbeRNm0et0U6nL', 'name':'1X1A0191-min'},
{'id':'1mBP45FsbONF5Lc9KWjrUE2pm_F7RHWci', 'name':'1X1A0218-min'},
{'id':'1fEPlQL1vROlIhplbB3pBnUKMywPdwHsR', 'name':'1X1A0281-min'},
{'id':'1BCE6p6zCezLx5v39pwExLbZuFZU4Ia6-', 'name':'1X1A0182-min'},
{'id':'1ward9J213AeGXRmkQfHfDd5hhVKOK8Wu', 'name':'1X1A0366-min'},
{'id':'1CcvB2IvYqNcWiyBtTHlGPckxyek6wwkY', 'name':'DSCF5920-min'},
{'id':'1E2g9Vy5L65GaT5L55kZmHsOXokgE97ew', 'name':'1X1A0296-min'},
{'id':'1BnbbYI0pPqXG816_CATnN-iijhKE81VN', 'name':'DSCF5938-min'},
// PANTAI
{'id':'19iAhkJnbeBiE9DD-czpT5T6PUtZPoUCz', 'name':'DSCF6053-min'},
{'id':'1fbGzoh8o5qqnEkPf5jPtGdAoyLS0zd5l', 'name':'1X1A0562-min'},
{'id':'13fKZrl_biXB4vawrRVOXR3UZdPkVMU63', 'name':'1X1A0495-min'},
{'id':'1ENRYCsY0dVG-GHdv_xzq25_8ls6ddGy0', 'name':'1X1A0566-min'},
{'id':'1gj56Jl90AmZGJumPjA7PjhT2X-oN7ch7', 'name':'1X1A0391-min'},
{'id':'1psV-N4hHb7w_f31Wdn6ablSSSSLExHqk', 'name':'1X1A0407-min'},
{'id':'1TlNQ7EKWFsI4jpKItT7ww8kUaapz1pOY', 'name':'1X1A0399-min'},
//LAPUTA
{'id':'16CBMskcoNRRUlHh6y5LI6k0aNuTACUlZ', 'name':'1X1A0674-min'},
{'id':'1_zk88bdzjY6mVqybwNWGbadVMLGUJ-7A', 'name':'1X1A0629-min'},
{'id':'1buBXa-H6QNj8AUAkMtem4oVOddQEzEys', 'name':'1X1A0630-min'},
{'id':'1tm53OPF8baUxuYmKMS8gQVkYJIQfA2Qe', 'name':'1X1A0648-min'},
{'id':'1BkhAjUrKNitCZSblgMzoo3HSllYH-Sau', 'name':'DSCF6111-min'},
{'id':'1gVL_l21HRbmpd5A9c31DYvaW5gxxMgyn', 'name':'1X1A0637-min'},
{'id':'1OBUFp5LPcfjqaG9JMF5gW0jDMPaYgXYC', 'name':'DSCF6162-min'},
{'id':'1FGOzBWfdseQBjqxwaLG05xW30_UMcBS7', 'name':'DSCF6129-min'},
];
initImage(0);

function initImage(idx){
    setTimeout(function(){
        if (idx < galleryImages.length) {
            $('#lightGallery').append('<a href="https://drive.google.com/uc?export=view&id='+galleryImages[idx].id+'" target="_blank"><img src="./assets/galleries/' + galleryImages[idx].name + '.jpeg" alt=""></a>');
            if (idx == galleryImages.length -1) {
                lightGallery(document.getElementById('lightGallery'), {
                    download: false,
                });
            }
            initImage(++idx);
        }
    }, 250);
}
