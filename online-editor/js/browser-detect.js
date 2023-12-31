/*
    Browser Detector
    @author:  Amit Sen
    @description: Detects the current version of the user's browser and shows a persistent warning message, if it does not meet the minimum requirements

    Minimum browser requirement: Internet Explorer 10, Firefox 10 (May 2012), Chrome 20 (May 2012)
 */
$(document).ready()
{
    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"}, // optional support
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"}    // optional support
        ]

    };

    // Call the browser detect function
    BrowserDetect.init();

    // Warning message, if a legacy browser is detected
    var browserWarning ='<div style="background: red;color:white;padding:3px 5px; position:fixed; width:100%; top:0;left:0; z-index:99999; font-weight:bold; text-align: center; font-family: Arial, Helvetica, sans-serif; ">'+
'You are using a legacy browser that is no longer supported by this application! Please upgrade to a newer version using the following links.&nbsp;&nbsp;&nbsp;'+
'<a style="font-family: Arial, Helvetica, sans-serif; text-decoration: underline; color:white; font-weight:bold;" href="http://www.microsoft.com/en-us/download/internet-explorer.aspx">Interner Explorer</a>&nbsp;|&nbsp;'+
'<a style="font-family: Arial, Helvetica, sans-serif; text-decoration: underline; color:white; font-weight:bold;" href="https://www.google.com/chrome/">Chrome</a>&nbsp;|&nbsp;'+
'<a style="font-family: Arial, Helvetica, sans-serif; text-decoration: underline; color:white; font-weight:bold;" href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>&nbsp;'+
'</div>';

    // if IE8 or below
    if (BrowserDetect.browser == "Explorer" && BrowserDetect.version<10) {
        $("body div:first-child").prepend(browserWarning);
    }
    // if Firefox 15 or below
    else if (BrowserDetect.browser == "Firefox" && BrowserDetect.version<10) {
        $("body div:first-child").prepend(browserWarning);
    }
    // if Chrome 15 or below
    else if (BrowserDetect.browser == "Chrome" && BrowserDetect.version<20) {
        $("body div:first-child").prepend(browserWarning);
    }

}