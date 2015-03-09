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
