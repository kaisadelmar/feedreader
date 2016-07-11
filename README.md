# Project Overview

This project involves a web-based application that reads RSS feeds. The challenge was to create several tes suites using [Jasmine](http://jasmine.github.io/) to test the basic functionality of this app


# Project requirements


1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
6. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
7. Write a test suite named `"Initial Entries"`.
8. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
9. Write a test suite named `"New Feed Selection"`.
10. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# How to run the Project


* Clone or download the contents of this repo
* Open index.html in a browser
* Scroll down to the bottom of the page to see the Jasmine test suite results
