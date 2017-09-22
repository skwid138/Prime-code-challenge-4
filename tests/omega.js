describe('Controller: Omega Controller', function () {
  it('does not display students on page load', function () {
      browser.url('/');
      try {
        browser.getText('li=Eric'); // should throw error
      } catch (e) {
        expect(e).to.exist;
      }
    });

  it('displays a list of students on click of Display Students button', function () {
      browser.url('/');
      browser.click('button=Display Students');
      expect(browser.getText('li=Eric')).to.exist;
      expect(browser.getText('li=Kitty')).to.exist;
    });
});
