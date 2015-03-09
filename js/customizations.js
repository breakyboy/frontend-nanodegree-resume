// Create links where appropriate
var linkify = function(targetSelector, cssClass, href) {
  var link = '<a class="' + cssClass + '" href="' + href + '">' + targetSelector.first().text() + '</a>';
  targetSelector.replaceWith(link);
};

var contactLinkClasses = "white-text contact-link";

var mobile = $("span:contains('mobile')").next();
var mobileHref = "tel:" + mobile.text();
linkify(mobile, contactLinkClasses, mobileHref);

var email = $("span:contains('email')").next();
var emailHref = "mailto:" + email.first().text();
linkify(email, contactLinkClasses, emailHref);

var loc = $("span:contains('location')").next();
var locHref = "http://goo.gl/GJsdoq";
linkify(loc, contactLinkClasses, locHref);

var twitter = $("span:contains('twitter')").next();
var twitterHref = "http://www.twitter.com/" + twitter.text();
linkify(twitter, contactLinkClasses, twitterHref);

var github = $("span:contains('github')").next();
var githubHref = "http://www.github.com/" + github.text();
linkify(github, contactLinkClasses, githubHref);


// Prepend twitter handle with "@" if needed
twitter = $("span:contains('twitter')").next();
if (twitter.text()[0] !== "@") {
  twitter.text("@" + twitter.text());
}


// Add appropriate hrefs to existing links
var changeHref = function(text, href) {
  var selector = "a:contains('" + text + "')";
  $(selector).attr("href", href);
};

changeHref("MTN Satellite Communications", "http://www.mtnsat.com");
changeHref("Stackadmin", "http://rubygems.org/gems/stackadmin");
changeHref("CouchDB Service Broker", "http://github.com/andres-rojas/cfv2-couchdb-service-broker");
changeHref("Bitcoin Printer", "http://github.com/andres-rojas/bitcoin-printer-ruby");
changeHref("Miami Dade College", "http://www.mdc.edu/");
changeHref("Florida International University", "http://www.fiu.edu");


// Fix online courses links
var onlineCourseLinks = $("#education h3 ~ .education-entry > a");
onlineCourseLinks.each(function(i) {
  if (i % 2 === 0) {
    $(this).attr("href", onlineCourseLinks[i + 1].text);
  } else {
    $(this).remove();
  }
});


// Change background-color of "Let's Connect" banner
var banner = $("#letsConnect h2");
banner.removeClass("orange");
banner.addClass("navy");


// If date-text is 0, set to "Coursework not yet completed"
$(".date-text").each(function() {
  if ($(this).text() === "0") {
    $(this).text("Coursework not yet completed");
  }
});
