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
//      {"name": "", "comment":"", "date": ""},
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
    lightGallery(document.getElementById('lightGalleryAddons1'), {
        download: false,
    });
    lightGallery(document.getElementById('lightGalleryAddons2'), {
        download: false,
    });
    lightGallery(document.getElementById('lightGalleryAddons3'), {
        download: false,
    });
    lightGallery(document.getElementById('lightGalleryAddons4'), {
        download: false,
    });
    lightGallery(document.getElementById('lightGalleryAddonsVid'), {
        youtubePlayerParams: {
            modestbranding: true,
            showinfo: false,
            rel: false,
            controls: false,
            autoplay: true
        },
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
