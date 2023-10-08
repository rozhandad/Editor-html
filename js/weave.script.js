$(document).ready(function () {

    // Initialization, when loading for the first time
    previewModeFullScreen = false;  		// default Preview mode (25%)
    zipDownload = false;
    loadLayout();
    loadTheme();
    initLoad();

    fullscreenHTMLMode = false;
    fullscreenCSSMode = false;
    fullscreenJSMode = false;
    cssGenMode = false;
    isSaved = false;
    autoSaveLocal = true;
    nightVision = true;

    $('#splashscreen').fadeOut('slow');

    //$('#app-cssgen').css("z-index", "-99999");

    $('#css-frame').hide();

    $(".layout0").tipTip();
    $(".layout1").tipTip();
    $(".layout2").tipTip();
    $(".layout3").tipTip();
    $(".layout4").tipTip();


    // Toggle Preview-mode fullscreen
    $("#preview-mode-toggle").click(function () {
        maxPreview();
        //alert("Activated!");
    });

    // Change layout
    $('#layout0').click(function () {
        layout = 0;
        panelsReset0();
        $('#dummy-layout').val("0");
        selectedLayout();
        $('#layout0').addClass('icon-check');
        if (nightVision) {
            splitterBarDark();
        }
        else {
            splitterBarLight();
        }
    });
    $('#layout1').click(function () {
        layout = 1;
        panelsReset1();
        $('#dummy-layout').val("1");
        selectedLayout();
        $('#layout1').addClass('icon-check');
        if (nightVision) {
            splitterBarDark();
        }
        else {
            splitterBarLight();
        }
    });
    $('#layout2').click(function () {
        layout = 2;
        panelsReset2();
        $('#dummy-layout').val("2");
        selectedLayout();
        $('#layout2').addClass('icon-check');
        if (nightVision) {
            splitterBarDark();
        }
        else {
            splitterBarLight();
        }
    });
    $('#layout3').click(function () {
        layout = 3;
        panelsReset3();
        $('#dummy-layout').val("3");
        selectedLayout();
        $('#layout3').addClass('icon-check');
        if (nightVision) {
            splitterBarDark();
        }
        else {
            splitterBarLight();
        }
    });
    $('#layout4').click(function () {

    });

    // Load layout, '1' for default
    function loadLayout() {
        var layoutType = $('#dummy-layout').val();
        if (layoutType == 0) {
            panelsReset0();
            layout = 0;
            $('#layout0').addClass('icon-check');
        }
        if (layoutType == 1) {
            panelsReset1();
            layout = 1;
            $('#layout1').addClass('icon-check');
        }
        if (layoutType == 2) {
            panelsReset2();
            layout = 2;
            $('#layout2').addClass('icon-check');
        }
        if (layoutType == 3) {
            panelsReset3();
            layout = 3;
            $('#layout3').addClass('icon-check');
        }
        if (layoutType == 4) {
            maxPreview();
            layout = 4;
        }

    }


    // Load layout from localStorage
    function loadLocalLayout(value) {
        var layoutType = value;
        if (layoutType == 0) {
            panelsReset0();
            layout = 0;
            $('#layout0').addClass('icon-check');
        }
        if (layoutType == 1) {
            panelsReset1();
            layout = 1;
            $('#layout1').addClass('icon-check');
        }
        if (layoutType == 2) {
            panelsReset2();
            layout = 2;
            $('#layout2').addClass('icon-check');
        }
        if (layoutType == 3) {
            panelsReset3();
            layout = 3;
            $('#layout3').addClass('icon-check');
        }
        if (layoutType == 4) {
            maxPreview();
            layout = 4;
        }

    }

    // Load theme, '0' for default
    function loadTheme() {
        var layoutTheme = $('#dummy-theme').val();
        if (layoutTheme == 0) {
            $("#night-vision").attr('checked', true);
            goDark();
            splitterBarDark();
            themeMode = 0;
        }
        if (layoutTheme == 1) {
            $("#night-vision").attr('checked', false);
            goLight();
            splitterBarLight();
            themeMode = 1;
        }


    }

    // Load theme from localStorage

    function loadLocalTheme(value) {
        var layoutTheme = value;
        if (layoutTheme == 0) {
            $("#night-vision").attr('checked', true);
            goDark();
            splitterBarDark();
            themeMode = 0;
        }
        if (layoutTheme == 1) {
            $("#night-vision").attr('checked', false);
            goLight();
            splitterBarLight();
            themeMode = 1;
        }

    }

    function selectedLayout() {
        $('#layout0').removeClass();
        $('#layout1').removeClass();
        $('#layout2').removeClass();
        $('#layout3').removeClass();
    }


    // Full preview
    function maxPreview() {
        if (previewModeFullScreen == false) {
            $('#splitContainer').jqxSplitter({
                height: '100%',
                width: '100%',
                orientation: 'vertical',
                panels: [{size: '0%'}, {size: '100%'}]
            });
            $('#rightSplitter').jqxSplitter({
                height: '100%',
                width: '100%',
                orientation: 'horizontal',
                panels: [{size: '0%'}, {size: '100%'}]
            });
            $('#preview-mode-toggle').removeClass('full-screen-logo');
            $('#preview-mode-toggle').addClass('full-screen-exit-logo');
            previewModeFullScreen = true; // fullscreen preview mode (100%)
        }
        else {
            if (layout == 0) {
                panelsReset0();
            }
            if (layout == 1) {
                panelsReset1();
            }
            if (layout == 2) {
                panelsReset2();
            }
            if (layout == 3) {
                panelsReset3();
            }
            $('#preview-mode-toggle').removeClass('full-screen-exit-logo');
            $('#preview-mode-toggle').addClass('full-screen-logo');
            previewModeFullScreen = false;
        }
        if (nightVision) {
            splitterBarDark();
        }
        else {
            splitterBarLight();
        }

    }

    // Full screen HTML
    function fullscreenHTML() {
        $('#splitContainer').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '100%'}, {size: '0%'}]
        });
        $('#rightSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '0%'}, {size: '0%'}]
        });
        $('#leftSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '100%'}, {size: '0%'}]
        });
    }

    // Full screen CSS
    function fullscreenCSS() {
        $('#splitContainer').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '100%'}, {size: '0%'}]
        });
        $('#rightSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '0%'}, {size: '0%'}]
        });
        $('#leftSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '0%'}, {size: '100%'}]
        });
    }

    // Full screen JS
    function fullscreenJS() {
        $('#splitContainer').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '0%'}, {size: '100%'}]
        });
        $('#rightSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '100%'}, {size: '0%'}]
        });
        $('#leftSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '0%'}, {size: '0%'}]
        });
    }

    // If fullscreen HTML mode
    $('#fullscreen-html-toggle').on('click', function () {
        $("#preview-mode-toggle").toggle();
        if (fullscreenHTMLMode) {
            fullscreenHTMLMode = false;
            $('#fullscreen-html').removeClass('fullscreen-small-exit');
            $('#fullscreen-html').addClass('fullscreen-small');
            resetLayout();
            $('.layout').fadeIn();
            if (nightVision) {
                splitterBarDark();
            }
            else {
                splitterBarLight();
            }
        }
        else {
            fullscreenHTML();
            fullscreenHTMLMode = true;
            $('#fullscreen-html').removeClass('fullscreen-small');
            $('#fullscreen-html').addClass('fullscreen-small-exit');
            $('.layout').fadeOut();
        }
    });

    // If fullscreen CSS mode
    $('#fullscreen-css-toggle').on('click', function () {
        $("#preview-mode-toggle").toggle();
        if (fullscreenCSSMode) {
            fullscreenCSSMode = false;
            $('#fullscreen-css').removeClass('fullscreen-small-exit');
            $('#fullscreen-css').addClass('fullscreen-small');
            resetLayout();
            $('.layout').fadeIn();
            if (nightVision) {
                splitterBarDark();
            }
            else {
                splitterBarLight();
            }
        }
        else {
            fullscreenCSS();
            fullscreenCSSMode = true;
            $('#fullscreen-css').removeClass('fullscreen-small');
            $('#fullscreen-css').addClass('fullscreen-small-exit');
            $('.layout').fadeOut();
        }
    });

    // If fullscreen JS mode
    $('#fullscreen-js-toggle').on('click', function () {
        $("#preview-mode-toggle").toggle();
        if (fullscreenJSMode) {
            fullscreenJSMode = false;
            $('#fullscreen-js').removeClass('fullscreen-small-exit');
            $('#fullscreen-js').addClass('fullscreen-small');
            resetLayout();
            $('.layout').fadeIn();
            if (nightVision) {
                splitterBarDark();
            }
            else {
                splitterBarLight();
            }
        }
        else {
            fullscreenJS();
            fullscreenJSMode = true;
            $('#fullscreen-js').removeClass('fullscreen-small');
            $('#fullscreen-js').addClass('fullscreen-small-exit');
            $('.layout').fadeOut();
        }
    });

    // Reset to original layout
    function resetLayout() {
        if (layout == 0) {
            panelsReset0();
        }
        if (layout == 1) {
            panelsReset1();
        }
        if (layout == 2) {
            panelsReset2();
        }
        if (layout == 3) {
            panelsReset3();
        }
    }


    /*
     _______________________
     |	  		|	  		|
     |	  H		|	  J		|
     |___________|___________|
     |	  		|		    |
     |	  C		|		    |
     |___________|___________|
     */
    function panelsReset0() {
        $('#splitContainer').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#leftSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#rightSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });

    }

    /*
     _______________________
     |	  		|	  		|
     |	  H		|	  C		|
     |___________|___________|
     |	  		|		    |
     |	  J		|		    |
     |___________|___________|
     */
    function panelsReset1() {
        $('#splitContainer').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#leftSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#rightSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });


    }

    /*
     _______________________
     |	  |	  	|     |		|
     |	  |	  	|	  |		|
     |  H  |	 C 	|  J  |		|
     |	  |	  	|	  |		|
     |_____|_____|_____|_____|

     */
    function panelsReset2() {
        $('#splitContainer').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#leftSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#rightSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'vertical',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
    }

    /*
     _______________________
     |			H    		|
     |_______________________|
     |			C			|
     |_______________________|
     |			J    		|
     |_______________________|
     |						|
     |_______________________|
     */
    function panelsReset3() {
        $('#splitContainer').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#leftSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
        $('#rightSplitter').jqxSplitter({
            height: '100%',
            width: '100%',
            orientation: 'horizontal',
            panels: [{size: '50%', collapsible: false}, {size: '50%', collapsible: false}]
        });
    }

    function panelsRefresh() {
        $('#splitContainer').jqxSplitter('refresh');
        $('#leftSplitter').jqxSplitter('refresh');
        $('#rightSplitter').jqxSplitter('refresh');
    }

    // Window resize refresh
    $(window).resize(function () {
        panelsRefresh();
        //if(nightVision) { splitterBarDark(); }
        //else { splitterBarLight(); }

    });

    // Close footer text
    $(".footer-message-close").click(function () {
            $("#footer-message").fadeOut("slow");
        }
    );

    // Zip and download the files
    $("#download-zip").on('click', function () {
        downloadZip();
    });

    // When the Download button is clicked
    $("#download-code").on('click', function () {
        downloadZip();
    });

    // Download function
    function downloadZip() {
        var zip = new JSZip();

        var htmlContent = htmlEditor.getValue();
        var cssContent = cssEditor.getValue();
        var jsContent = jsEditor.getValue();

        var cssLink = " <" + "link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\"" + "/>" + "\n";
        var jsLink = "<" + "script type=\"text/javascript\" src=\"js/script.js\">" + "</" + "script" + ">" + "\n";

        cssLink = cssLink + "</head>";
        jsLink = jsLink +"<!-- این فایل توسط ادیتور آنلاین وبسایت آموزشی فری لرن ایجاد شده است -->"+"\n"+"<!-- https://Free-Learn.Ir/ -->"+"\n"+ "</body>";

        htmlContent = htmlContent.replace("</head>", cssLink);
        htmlContent = htmlContent.replace("</body>", jsLink);

        zip.file("css/style.css", cssContent);
        zip.file("js/script.js", jsContent);
        zip.file("index.html", htmlContent);
        var content = zip.generate();
        location.href = "data:application/zip;base64," + content;
    }

    // Get the <title> from HTML
    function getTitle() {
        var htmlContent = htmlEditor.getValue();
        var xmlDoc = $.parseXML(htmlContent), $xml = $(xmlDoc), $title = $xml.find("title");
        var titleCheck = $title.text();

        // Default, if <title> is there
        if (titleCheck == '' || titleCheck == null) {
            //alertify.alert("WARNING:<br/> Your weave has been saved, but your HTML is invalid and is missing the &lt;title&gt; tag!");
            $('#dummy-title').val("A HTML, CSS and JavaScript demo");
        }
        // If <title> is missing
        else {
            $('#dummy-title').val(titleCheck);
        }
    }

    // Trigger the getTitle function
    $('#submit').on('mousedown', function () {
        getTitle();
    });

    // Populate the share menu, only if an 'id' is passed in the URL
    $("#run").hide();
    $("#auto-run").attr('checked', true);
    //$("#night-vision").attr('checked', true);

    var pathname = window.location.pathname;

    if (pathname.trim() != "/") {
        $("#share-url").attr("value", "#" + pathname);
        $("#facebook-submit").attr("href", "#" + "#" + pathname + "");
        $("#twitter-submit").attr("href", "#" + "#" + pathname);
    }

    // Toggle switch for Sticky Scroll
    $('onchange :checkbox').iphoneStyle();
    var onchange_checkbox = ($('.onchange :checkbox')).iphoneStyle({
        onChange: function (elem, value) {
            if (value) {
                autoRun = 1;
                $("#run").hide();
            }
            else {
                autoRun = 0;
                $("#run").show("slow");
            }
        }
    });

    // Toggle switch for Night Vision
    $('theme :checkbox').iphoneStyle();
    var onchange_theme = ($('.theme :checkbox')).iphoneStyle({
        onChange: function (elem, value) {
            if (value) {
                nightVision = true;  // dark background
                $('#dummy-theme').val("0");
                goDark();
                splitterBarDark();
                themeMode = 0;
            }
            else {
                nightVision = false; // light background
                $('#dummy-theme').val("1");
                goLight();
                splitterBarLight();
                themeMode = 1;

            }
        }
    });

    // Team up / Collaborate
    $('#collaborate').click(function () {
        TogetherJS(this);
        return false;
    });

// insert tag html

    $('#generator-mytag-a').click(function () {
        htmlEditor.replaceSelection('<a href="https://free-learn.ir" target="_blank">سایت آموزشی فری لرن</a>');
    });
	
    $('#generator-mytag-article').click(function () {
        htmlEditor.replaceSelection("<article>Matn Shoma Dar Inja</article>");
    });
	
	$('#generator-mytag-aside').click(function () {
        htmlEditor.replaceSelection("<aside>Matn Shoma Dar Inja</aside>");
    });
	
	$('#generator-mytag-audio').click(function () {
        htmlEditor.replaceSelection('<audio controls>\n <source src="music/free-learn.mp3" type="audio/mpeg" />\n</audio>');
    });
	
	$('#generator-mytag-blockquote').click(function () {
        htmlEditor.replaceSelection('<blockquote cite="https://free-learn.ir">\n سایت آموزشی رایگان فری لرن\n</blockquote>');
    });
	
	$('#generator-mytag-button').click(function () {
        htmlEditor.replaceSelection("<button>کلیک کنید</button>");
    });
	
	$('#generator-mytag-canvas').click(function () {
        htmlEditor.replaceSelection('<canvas id="mycanvas">\n Script Dar Inja\n</canvas>');
    });
	
	$('#generator-mytag-datalist').click(function () {
        htmlEditor.replaceSelection('<input list="my_id" />\n<datalist id="my_id">\n <option value="Salam" />\n <option value="Salam" />\n <option value="Salam" />\n</datalist>');
    });

	$('#generator-mytag-dialog').click(function () {
        htmlEditor.replaceSelection("<dialog>\n Matn Shoma Dar Inja\n</dialog>");
    });

	$('#generator-mytag-div').click(function () {
        htmlEditor.replaceSelection('<div>\n Matn Shoma Dar Inja\n</div>');
    });

	$('#generator-mytag-embed').click(function () {
        htmlEditor.replaceSelection('<embed src="" />');
    });

	$('#generator-mytag-footer').click(function () {
        htmlEditor.replaceSelection("<footer>\n Matn Shoma Dar Inja\n</footer>");
    });

	$('#generator-mytag-form').click(function () {
        htmlEditor.replaceSelection('<form action="">\n Name : <input type="text" name="firstname">\n Password : <input type="password" name="password">\n <input type="submit" value="ارسال">\n</form>');
    });

	$('#generator-mytag-header').click(function () {
        htmlEditor.replaceSelection("<header>\n Matn Shoma Dar Inja\n</header>");
    });

	$('#generator-mytag-hr').click(function () {
        htmlEditor.replaceSelection("<hr />");
    });

	$('#generator-mytag-iframe').click(function () {
        htmlEditor.replaceSelection('<iframe src="https://free-learn.ir/" width="100%" height="300"></iframe>');
    });

	$('#generator-mytag-img').click(function () {
        htmlEditor.replaceSelection('<img src="images/logo.png" alt="لوگوی سایت آموزشی فری لرن" />');
    });

	$('#generator-mytag-input').click(function () {
        htmlEditor.replaceSelection('<input type="text" name="Your_Name" />\n<input type="password" name="Your_Password" />\n<input type="email" name="Your_Email" />');
    });

	$('#generator-mytag-link').click(function () {
        htmlEditor.replaceSelection('<link href="my_style.css" rel="stylesheet" />\n<link href="my_icon.ico" rel="icon" />');
    });

	$('#generator-mytag-main').click(function () {
        htmlEditor.replaceSelection("<main>\n Matn Shoma Dar Inja\n</main>");
    });

	$('#generator-mytag-map').click(function () {
        htmlEditor.replaceSelection('<img src="" usemap="#freelearn" />\n<map name="freelearn">\n <area shape="rect" coords="x1,y1,x2,y2" href="">\n <area shape="circle" coords="x,y,radius" href="">\n <area shape="poly" coords="x1,y1,x2,y2,..,xn,yn" href="">\n</map>');
    });

	$('#generator-mytag-meta').click(function () {
        htmlEditor.replaceSelection('<meta charset="UTF-8" />\n<meta name="description" content="آموزش رایگان طراحی وب">\n<meta name="keywords" content="HTML,CSS,JavaScript">\n<meta name="author" content="Sadegh Asadi">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    });

	$('#generator-mytag-nav').click(function () {
        htmlEditor.replaceSelection('<nav>\n <a href="">ITEM1</a>|\n <a href="">ITEM2</a>|\n <a href="">ITEM3</a>\n</nav>');
    });

	$('#generator-mytag-ol').click(function () {
        htmlEditor.replaceSelection("<ol>\n <li>Salam</li>\n <li>Khobi?</li>\n <li>Man</li>\n <li>Sadegh</li>\n <li>Hastam</li>\n</ol>");
    });

	$('#generator-mytag-p').click(function () {
        htmlEditor.replaceSelection("<p>\n Matn Shoma Dar Inja\n</p>");
    });

	$('#generator-mytag-picture').click(function () {
        htmlEditor.replaceSelection('<picture>\n <source media="(min-width: 650px)" srcset="img_1.jpg" />\n <source media="(min-width: 650px)" srcset="img_2.jpg" />\n <img src="img_3.jpg" />\n</picture>');
    });

	$('#generator-mytag-pre').click(function () {
        htmlEditor.replaceSelection("<pre>\n (F.R.E.E.-.L.E.A.R.N.I.R)\n</pre>");
    });

	$('#generator-mytag-script').click(function () {
        htmlEditor.replaceSelection("<script>\n document.write('Salam Khobi?');\n</script>");
    });

	$('#generator-mytag-section').click(function () {
        htmlEditor.replaceSelection("<section>\n Matn Shoma Dar Inja\n</section>");
    });

	$('#generator-mytag-span').click(function () {
        htmlEditor.replaceSelection("<span>Matn Shoma Dar Inja</span>");
    });

	$('#generator-mytag-style').click(function () {
        htmlEditor.replaceSelection("<style>\n body{ background-color:#5db616; color:#fff; }\n</style>");
    });

	$('#generator-mytag-svg').click(function () {
        htmlEditor.replaceSelection('<svg width="100" height="100">\n <circle cx="50" cy="50" r="40" stroke="#000" stroke-width="2" fill="#00b185" />\n</svg>');
    });

	$('#generator-mytag-table').click(function () {
        htmlEditor.replaceSelection('<table>\n <tr>\n  <th>Name</th>\n  <th>Family</th>\n</tr>\n <tr>\n  <td>Sadegh</td>\n  <td>Asadi</td>\n</tr>\n</table>');
    });

	$('#generator-mytag-textarea').click(function () {
        htmlEditor.replaceSelection('<textarea cols="40" rows="5">\nسایت آموزشی فری لرن\n</textarea>');
    });	

	$('#generator-mytag-title').click(function () {
        htmlEditor.replaceSelection("<title>سایت آموزشی فری لرن</title>");
    });	
	
	$('#generator-mytag-track').click(function () {
        htmlEditor.replaceSelection('<track src="subtitle.vtt" kind="subtitles" srclang="fa" label="فارسی" default />');
    });	
	
	$('#generator-mytag-ul').click(function () {
        htmlEditor.replaceSelection('<ul>\n <li>Salam</li>\n <li>Khobi?</li>\n <li>Man</li>\n <li>Sadegh</li>\n <li>Hastam</li>\n</ul>');
    });	
	
	$('#generator-mytag-video').click(function () {
        htmlEditor.replaceSelection('<video controls autoplay>\n <source src="video/free-learn.mp4" type="video/mp4" />\n <source src="video/free-learn.mp4" type="video/ogg" />\n <source src="video/free-learn.mp4" type="video/webm" />\n</video>');
    });		

// insert tag html


    // Dark theme (default)
    function goDark() {
        htmlEditor.setOption("theme", "tomorrow-night-eighties");
        cssEditor.setOption("theme", "tomorrow-night-eighties");
        jsEditor.setOption("theme", "tomorrow-night-eighties");

        $(".CodeMirror").css({"background": "#333333"});
        $(".CodeMirror-scroll").css({"background": "#333333"});

        //$(".CodeMirror").addClass("gradient3");
        //$(".CodeMirror-scroll").addClass("gradient3");

        $(".CodeMirror-gutter").css({"background": "none", "border": "none"});
        $(".jqx-fill-state-normal").css({
            "background-color": "#333333",
            "border-top": "1px solid #333",
            "border-bottom": "1px solid #444",
            "border-left": "1px solid #444",
            "border-right": "1px solid #333"
        });
        $(".jqx-splitter-collapse-button-vertical").css({"background-color": "#444444"});
        $(".jqx-splitter-collapse-button-horizontal").css({"background-color": "#444444"});

        $(".CodeMirror").css({"background-color": "#333333"});
        $(".CodeMirror-scroll").css({"background": "#333333"});

        //$(".CodeMirror").addClass("gradient3");
        //$(".CodeMirror-scroll").addClass("gradient3");
        $(".CodeMirror-gutter").css({"background": "none", "border": "none"});
    }

    // Light theme
    function goLight() {
        htmlEditor.setOption("theme", "default");
        cssEditor.setOption("theme", "default");
        jsEditor.setOption("theme", "default");

        $(".CodeMirror").css({"background": "white"});
        $(".CodeMirror-scroll").css({"background": "white"});
        //$(".CodeMirror").removeClass("gradient3");
        //$(".CodeMirror-scroll").removeClass("gradient3");

        $(".CodeMirror-gutter").css({"background": "none", "border": "none"});
        $(".jqx-fill-state-normal").css({
            "background-color": "#ccc",
            "border-top": "1px solid #333",
            "border-bottom": "1px solid #444",
            "border-left": "1px solid #444",
            "border-right": "1px solid #333"
        });
        $(".jqx-splitter-collapse-button-vertical").css({"background-color": "#999"});
        $(".jqx-splitter-collapse-button-horizontal").css({"background-color": "#999"});

        $(".CodeMirror").css({"background-color": "white"});
        $(".CodeMirror-scroll").css({"background": "white"});
        //$(".CodeMirror").removeClass("gradient3");
        //$(".CodeMirror-scroll").removeClass("gradient3");
        $(".CodeMirror-gutter").css({"background": "none", "border": "none"});

    }


    // Render the splitter bar in dark theme
    function splitterBarLight() {
        $("#splitContainer").css("background-color", "#eee");
        $("#leftSplitter").css("background-color", "#eee");
        $("#rightSplitter").css("background-color", "#eee");

        $(".jqx-fill-state-normal").css({
            "background-color": "#eee",
            "border-top": "1px solid #eee",
            "border-bottom": "1px solid #eee",
            "border-left": "1px solid #eee",
            "border-right": "1px solid #eee"
        });
        $(".jqx-splitter-collapse-button-vertical").css({"background-color": "#eee"});
        $(".jqx-splitter-collapse-button-horizontal").css({"background-color": "#eee"});
    }

    // Render the splitter bar in light theme
    function splitterBarDark() {
        $("#splitContainer").css("background-color", "#444");
        $("#leftSplitter").css("background-color", "#444");
        $("#rightSplitter").css("background-color", "#333");

        $(".jqx-fill-state-normal").css({
            "background-color": "#222",
            "border-top": "1px solid #333",
            "border-bottom": "1px solid #444",
            "border-left": "1px solid #444",
            "border-right": "1px solid #333"
        });
        $(".jqx-splitter-collapse-button-vertical").css({"background-color": "#555"});
        $(".jqx-splitter-collapse-button-horizontal").css({"background-color": "#555"});
    }

    /* Web Editor */
    $('.sidebar-left li.web-editor').click(function() {
        $(this).addClass('active');
        $('.sidebar-left li.css-explorer').removeClass('active');
        $('.sidebar-left li.color-explorer').removeClass('active');
        $('.sidebar-left li.vector-editor').removeClass('active');
        $('.dialog-css').fadeOut();
        $('.dialog-vector').fadeOut();
        $('.dialog-color').fadeOut();

    });


    /* CSS Explorer */
    $('.sidebar-left li.css-explorer').click(function() {
        window.open('../cssgen/index.html','_blank');
    });


    /* Color Explorer */
    $('.sidebar-left li.color-explorer').click(function() {
        window.open('../colors/index.html','_blank');
    });


    /* Vector Editor */
    $('.sidebar-left li.vector-editor').click(function() {
        window.open('../designer/index.html','_blank');
    });


     /* Question & Anwser */
     $('.sidebar-left li.questions').click(function() {
        window.open('../questions/','_blank');
    });

    /* Dialog close */
    $('div.dialog-close').click(function(){
        $('.dialog-css').fadeOut();
        $('.dialog-vector').fadeOut();
        $('.dialog-color').fadeOut();
        $('.sidebar-left li.web-editor').addClass('active');
        $('.sidebar-left li.css-explorer').removeClass('active');
        $('.sidebar-left li.vector-editor').removeClass('active');
        $('.sidebar-left li.color-explorer').removeClass('active');

    });

    /*
     Auto-save
     */
    function autoSave() {

        var layoutType = $('#dummy-layout').val();
        var themeType = $('#dummy-theme').val();

        var htmlContent = htmlEditor.getValue();
        var cssContent = cssEditor.getValue();
        var jsContent = jsEditor.getValue();

        localStorage.setItem("liveweave.html", htmlEditor.getValue());
        localStorage.setItem("liveweave.css", cssEditor.getValue());
        localStorage.setItem("liveweave.js", jsEditor.getValue());

        localStorage.setItem("liveweave.theme", themeType);
        localStorage.setItem("liveweave.layout", layoutType);

        if (htmlContent != '' && cssContent != '' && jsContent != '') {
            localStorage.setItem("liveweave.init", "1");
        }
        else {
            localStorage.setItem("liveweave.init", "0");
        }

    }



    /*
     Execute Auto-save every 5 secs
     */
    window.setInterval(function () {
        autoSave();
    }, 10000);


    /*
     Check init
     */
    function initLoad() {
        var codeid = $('#dummy-id').val();
        var init = localStorage.getItem('liveweave.init');

        var localLayout = localStorage.getItem('liveweave.layout');
        var localTheme = localStorage.getItem('liveweave.theme');
        if (localLayout == null) {
            localLayout = '1';
        }
        if (localTheme == null) {
            localTheme = '0';
        }

        // if loading for the first time
        if (init == null) {
            init = '0';
            localStorage.setItem("liveweave.init", "0");
            loadTemplate();
        }
        // if 'weave id' is found
        if (codeid != '') {
            init = '2';
            localStorage.setItem("liveweave.init", "2");
        }
        // if no existing value in localStorage
        if (init == '0') {
            loadTemplate();
        }
        // if no 'weave id', but localStorage exists
        if (init == '1') {
            htmlEditor.setValue(localStorage.getItem('liveweave.html'));
            cssEditor.setValue(localStorage.getItem('liveweave.css'));
            jsEditor.setValue(localStorage.getItem('liveweave.js'));

            loadLocalLayout(localLayout);
            loadLocalTheme(localTheme);
        }

    }



    // AJAX form save
    $("form#myform").submit(function () {

        var html = htmlEditor.getValue().trim();
        var css = cssEditor.getValue().trim();
        var js = jsEditor.getValue().trim();

        isSaved = true;

        if (html != '' || css != '' || js != '') {
            alertify.log("Saving..."); // 'saving...' message
        }
        $.post(
            'submit.php',
            $(this).serialize(),
            function (data) {
                History.pushState({state: 1}, "Liveweave", "/" + data);
                if (html != '' || css != '' || js != '') {
                    alertify.success("Your weave is saved!"); // success message
                }
                $("input:text").focus(function () {
                    $(this).select();
                });
            }
        );

        return false;
    });

    // Refresh prevention
    window.onbeforeunload = function () {
        if (isSaved == false) {
            autoSave();
            // return "[1] Your weave has been temporarily saved in the browser. Yes, you can come back and edit this page.\n\n[2] You must [Save] the weave to access it later from a different computer or browser.\n\n[3] You can also [Download] it to your computer.";

        }
    }


    // Tooltip
    $(function () {
        $(".tooltip").tipTip({duration: 0, edgeOffset: 0, fadeOut: 0, fadeIn: 0});
    });
    //$(".onchange").tipTip({maxWidth: "auto", edgeOffset: 0});


    // Visual effects speed
    $.fx.speeds._default = 300;


   


    // Get selected text
    function getSelectedRange() {
        return {from: htmlEditor.getCursor(true), to: htmlEditor.getCursor(false)};
    }

    // Initiate Alertify
    function reset() {
        alertify.set({
            labels: {
                ok: "OK",
                cancel: "Cancel"
            },
            delay: 5000,
            buttonReverse: false,
            buttonFocus: "ok"
        });
    }


    // Append JS library to HTML <head>
    function appendJSLib(txt) {
        var textArea = htmlEditor.getValue();
        var searchText = textArea.search("<head>");
        if (searchText > 0) {
            txt = "<head>" + "\n" + txt;
            var updatedTextArea = textArea.replace("<head>", txt);
            htmlEditor.setValue(updatedTextArea);
        }
        else {
            reset();
            alertify.alert("<span style='color: #f5f5f5; padding:4px 6px 4px 6px; border-radius:3px; background-color: #cc0000;'>WARNING!</span><br/><br/> The <strong>&lt;head&gt;</strong> tag seems to be missing in your HTML. Although your code may still work, we highly recommened that you have a valid HTML syntax. Please refer to the structure of a correct HTML code below:<br/><br/>&lt;!DOCTYPE html&gt;<br/>&lt;html&gt;<br/>&lt;head&gt;<br/>&lt;title&gt&lt;!-- title --&gt;&lt;/title&gt;<br/> &lt;/head&gt;<br/> &lt;body&gt;<br/> &lt;!-- your content here --&gt;<br/> &lt;/body&gt;<br/>&lt;/html&gt;");
            txt = txt + textArea;
            htmlEditor.setLine(0, txt);
            return false;
        }
    }

     /*
     // 'Ctrl + S', if the editors are not focused
     Mousetrap.bind('ctrl+s', function(e) {
     prevent(e);
     getTitle(e);
     $("form#myform").submit();
     });

     // 'Command + S', if the editors are not focused
     Mousetrap.bind('command+s', function(e) {
     prevent(e);
     getTitle(e);
     $("form#myform").submit();
     });
     */


    // 'Ctrl + D', if the editors are not focused
    Mousetrap.bind('ctrl+d', function (e) {
        prevent(e);
        downloadZip();
    });

    // 'Command + D', if the editors are not focused
    Mousetrap.bind('command+d', function (e) {
        prevent(e);
        downloadZip();
    });

    // 'Ctrl + R', if the editors are not focused
    Mousetrap.bind('ctrl+r', function (e) {
        prevent(e);
        renderPreview();
    });

    // 'Command + R', if the editors are not focused
    Mousetrap.bind('command+r', function (e) {
        prevent(e);
        renderPreview();
    });


    // Prevent default
    function prevent(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            // internet explorer
            e.returnValue = false;
        }
    }



    // Render preview
    function renderPreview() {
        var previewFrame = document.getElementById('preview');
        var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        preview.open();
        preview.write('<style type="text/css">' + cssEditor.getValue() + '</style>');
        preview.write(htmlEditor.getValue());
        preview.write('<scr' + 'ipt>' + jsEditor.getValue() + '</scr' + 'ipt>');
        preview.close();
        $('#preview').contents().find('a').click(function (event) {
            event.preventDefault();
        });

    }

    $('.fa-cog').click(function () {
        showCSSGen();
    })


    $('#close-cssgen').click(function () {
        //$('#app-cssgen').fadeOut('slow');
        $('#app-cssgen').css("z-index", "-99999");

        showHeaderControls();
        cssGenMode = false;
    })

    $('#generator-css').click(function () {
        showCSSGen();

    });

    function showCSSGen() {
        if (cssGenMode == false) {
            //$('#app-cssgen').fadeIn('slow');
            $('#app-cssgen').css("z-index", "99999");
            hideHeaderControls();
            cssGenMode = true;


        }
        else if (cssGenMode == true) {
            //$('#app-cssgen').fadeOut('slow');
            $('#app-cssgen').css("z-index", "-99999");
            showHeaderControls();
            cssGenMode = false;
        }

    }


    function hideHeaderControls() {
        $('.menu-item').fadeOut('slow');
        $('#tools').fadeOut('slow');
        $('#submit').fadeOut('slow');
        $('#toggle-night-vision').fadeOut('slow');
        $('#toggle-live-mode').fadeOut('slow');
        $('#login-mode').fadeOut('slow');
        $('.team-up').fadeOut('slow');
    }

    function showHeaderControls() {
        $('.menu-item').fadeIn('slow');
        $('#tools').fadeIn('slow');
        $('#submit').fadeIn('slow');
        $('#toggle-night-vision').fadeIn('slow');
        $('#toggle-live-mode').fadeIn('slow');
        $('#login-mode').fadeIn('slow');
        $('.team-up').fadeIn('slow');
    }


    // fix the Splitter refresh bug when the 'Night Vision' is off
    $(function () {
        $('#leftSplitter').on('resize',
            function () {
                if (themeMode == 0) {
                    splitterBarDark();
                }
                else {
                    splitterBarLight();
                }

            });

        $('#splitContainer').on('resize',
            function () {
                if (themeMode == 1) {
                    splitterBarLight();
                }
                else {
                    splitterBarDark();
                }
            });


    });

    // fix the Splitter window resize bug
    $(window).bind('resize', function (e) {
        $(window).resize(function () {
            clearTimeout(window.resizeEvt);
            window.resizeEvt = setTimeout(function () {
                if (themeMode == 1) {
                    splitterBarLight();
                }
                else {
                    splitterBarDark();
                }
            }, 0);
        });
    });


    // JavaScript library Menu-items
   // Animate CSS
   $("#animatecss").click(function () {
        txt = "<" + "link type=\"text/css\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css\"" + "/>";
        appendJSLib(txt);
    });
    // Bootstrap
    $("#bootstrap").click(function () {
        txt1 = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\">" + "</" + "script" + ">" + "\n";
		txt2 = "<" + "script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\">" + "</" + "script" + ">" + "\n";
        txt3 = "<" + "script type=\"text/javascript\" src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\">" + "</" + "script" + ">" + "\n";
        txt4 = "<" + "link type=\"text/css\" rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"" + "/>";
        txt= txt1 + txt2 + txt3 + txt4;
        appendJSLib(txt);
    });
    // Chart JS
    $("#chart").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Create JS
    $("#create").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://code.createjs.com/createjs-2013.09.25.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // D3 JS
    $("#d3").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://d3js.org/d3.v3.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // DoJo
    $("#dojo").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/dojo/1/dojo/dojo.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Ember JS
    $("#ember").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://builds.emberjs.com/release/ember.prod.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Enyo JS
    $("#enyo").click(function () {
        txt1 = "<" + "link type=\"text/css\" rel=\"stylesheet\" href=\"https://nightly.enyojs.com/latest/enyo-nightly/enyo.css\"" + "/>" + "\n";
        txt2 = "<" + "script type=\"text/javascript\" src=\"https://nightly.enyojs.com/latest/enyo-nightly/enyo.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Ext JS
    $("#ext").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://cdn.sencha.io/ext-4.2.0-gpl/ext-all.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Fabric JS
    $("#fabric").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.3.0/fabric.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Font Awesome
    $("#font-awesome").click(function () {
        txt = "<" + "link type=\"text/css\" rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"" + "/>";
        appendJSLib(txt);
    });

    // jQuery
    $("#jquery").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-latest.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    $("#add-jquery").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-latest.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // jQuery UI
    $("#jqueryui").click(function () {
        txt1 = "<" + "link type=\"text/css\" rel=\"stylesheet\" href=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/smoothness/jquery-ui.css\"" + "/>" + "\n";
        txt2 = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js\">" + "</" + "script" + ">" + "\n";
        txt3 = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js\">" + "</" + "script" + ">";
        txt = txt1 + txt2 + txt3;
        appendJSLib(txt);
    });
    // jQuery Mobile
    $("#jquerymobile").click(function () {
        txt1 = "<" + "script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-latest.min.js\">" + "</" + "script" + ">" + "\n";
        txt2 = "<" + "script type=\"text/javascript\" src=\"https://code.jquery.com/mobile/latest/jquery.mobile.js\">" + "</" + "script" + ">" + "\n";
        txt3 = "<" + "link type=\"text/css\" rel=\"stylesheet\" href=\"https://code.jquery.com/mobile/latest/jquery.mobile.css\"" + "/>";
        txt = txt1 + txt2 + txt3;
        appendJSLib(txt);
    });
    // jQuery Tools
    $("#jquerytools").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://cdn.jquerytools.org/1.2.7/full/jquery.tools.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Kinetic JS
    $("#kinetic").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v4.7.3.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Knockout JS
    $("#knockout").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://knockoutjs.com/downloads/knockout-3.0.0.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });


    // Modernizr
    $("#modernizr").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://modernizr.com/downloads/modernizr-latest.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // MooTools
    $("#mootools").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/mootools/1/mootools-yui-compressed.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Paper JS
    $("#paper").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.9/paper.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Processing JS
    $("#processing").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://cloud.github.com/downloads/processing-js/processing-js/processing-1.4.1.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Prototype
    $("#prototype").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/prototype/1/prototype.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Pure CSS
    $("#purecss").click(function () {
        txt = "<" + "link type=\"text/css\" rel=\"stylesheet\" href=\"https://yui.yahooapis.com/pure/0.6.0/pure-min.css\"" + "/>";
        appendJSLib(txt);
    });
    // Qooxdoo
    $("#qooxdoo").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://demo.qooxdoo.org/3.0.1/framework/q-3.0.1.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Raphael JS
    $("#raphael").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://raw.githubusercontent.com/DmitryBaranovskiy/raphael/master/raphael.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Script.aculo.us
    $("#scriptaculous").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/scriptaculous/1/scriptaculous.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Snap SVG
    $("#snapsvg").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://snapsvg.io/assets/js/snap.svg-min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // SVG
    $("#svg").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://raw.github.com/wout/svg.js/master/dist/svg.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Three JS
    $("#three").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://threejs.org/build/three.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // YUI
    $("#yui").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://yui.yahooapis.com/3.13.0/build/yui/yui-min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Underscore
    $("#underscore").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://underscorejs.org/underscore-min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Web Font Loader
    $("#webfontloader").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });
    // Zepto
    $("#zepto").click(function () {
        txt = "<" + "script type=\"text/javascript\" src=\"https://zeptojs.com/zepto.min.js\">" + "</" + "script" + ">";
        appendJSLib(txt);
    });


    // JavaScript Menu
    $(function () {
        /**
         * the menu
         */
        var $menu = $('#ldd-menu');

        /**
         * for each list element,
         * we show the submenu when hovering and
         * expand the span element (title) to 510px
         */
        $menu.children('li').each(function () {
            var $this = $(this);
            var $span = $this.children('span');
            $span.data('width', $span.width());

            $this.bind('click', function () {
                $menu.find('.ldd-submenu').stop(true, true).hide();

                $this.find('.ldd-submenu').slideDown(0);

            }).bind('mouseleave', function () {
                $this.find('.ldd-submenu').stop(true, true).hide();
                $span.stop().animate({'width': $span.data('width') + 'px'}, 0);
            });
        });
    });



    /*
     Load basic HTML template
     */
    function loadTemplate() {
        htmlEditor.setValue('<!DOCTYPE html>\n<html>\n<head>\n <title>Avalin Site Man</title>\n <meta charset="UTF-8"> \n</head>\n<body>\n\n <p class=\"free-learn\">Salam Khobi?</p>\n\n</body>\n</html>');
        cssEditor.setValue('.free-learn {\n background-color:#4169E1;\n text-align:center;\n font-size:20px;\n padding:10px;\n color:#fff;\n}');
        jsEditor.setValue('// Dastorat JS Dar Inja ... ');
    }


    function formatHTML() {
        htmlEditor.setValue(html_beautify(htmlEditor.getValue()));            
    }

    function formatCSS() {
        cssEditor.setValue(css_beautify(cssEditor.getValue()));            
    }

    function formatJS() {
        jsEditor.setValue(js_beautify(jsEditor.getValue()));            
    }


    $('#code-format-html').click(function(){
        formatHTML();
    })

     $('#code-format-css').click(function(){
         formatCSS();
    })

     $('#code-format-js').click(function(){
         formatJS();
    })

    $('#code-format').click(function() {
        formatHTML();
        formatCSS();
        formatJS();
    })

   $('#code-format-all').click(function() {
        formatHTML();
        formatCSS();
        formatJS();
    })

});