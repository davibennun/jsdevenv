require([
    "util/random"
],function() {
    module("random", {
        setup: function() {
            sinon.stub(Math, "random").returns(0.85);
        },
        teardown: function() {
            Math.random.restore();
        }
    });

    test("randomBelow", function() {
        equal(Math.randomBelow(6), 5, "6");
        equal(Math.randomBelow(1), 0, "1");
        throws(function() { Math.randomBelow(0); }, "invalid argument: 0", "0");
    });
});
