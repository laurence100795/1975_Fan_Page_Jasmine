
/*describe("Slide Timer Change", function() {
    it("Slide should change", function() {
            expect(nextSlideDelay).toBe(5000)
    });
});*/

/*describe("scroll activation should be", function() {

    it("scroll activaties position 1", function(){
        expect(document.body.scrollTop).toBe(0);
    });
    it("scroll activaties position 2", function(){
    expect(document.documentElement.scrollTop).toBe(0);
    });
});*/

describe("scroller appears", function() {
    var dummyElement = document.createElement("div");
    document.getElementById = jasmine.createSpy("Scroller").and.returnValue(dummyElement);
    it("Scroller appears when",function(){
        if (document.body.scrollTop > 1700);
    expect(document.getElementById("Scroller").innerHTML).toEqual(document.getElementById("TopScroller").innerHTML);
    });
});