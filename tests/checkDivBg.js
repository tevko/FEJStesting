describe('getDivBg', function() {
    var d = document.querySelector('.box');

    it('Should be teal', function() {
        expect(window.getComputedStyle(d)['background-color']).toBe('rgb(0, 128, 128)');
    });
});