/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* Test suite named "RSS Feeds" */
    describe('RSS Feeds', function() {

        /* Ensure allFeeds variable is defined and not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Ensure feed has a URL defined and that the URL is not empty. */
         it('have a URL defined', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url).not.toBe('');
           });
         });


        /* Ensure each feed has a name defined and that the name is not empty. */
         it('have a name defined', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe('');
           });
         });
    });

    /* Test suite named "The menu" */
    describe('The menu', function() {

      /* Ensure the menu is hidden by default */
      it('is hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      /* Toggle menu visibility when clicked */
      it('displays when clicked and hides when clicked again', function() {
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

    });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      /* Ensure the loadFeed function is called and completes its work */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      /* Ensure that there is at least a single entry that's not empty */
      it('should have at least one entry', function(done) {
        expect($('.feed').children().length).toBeGreaterThan(0);
        done();
      });
    });

    /* Test suite called "New Feed Selection" */
    describe('New Feed Selection', function() {

      var currentFeed;

      beforeEach(function(done) {
        loadFeed(1, function() {
          currentFeed = $('.feed').html();
          done();
        });
      });

      /* Ensure that when a new feed is loaded the content changes */
      it('loads new content', function(done) {
        loadFeed(0, function() {
          expect($('.feed').html()).not.toEqual(currentFeed);
          done();
        });
      });
    });

}());
