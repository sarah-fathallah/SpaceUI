var should = require('should');
var Sort = require('../assets/sort.js').Sort;

describe('Sort', function () {
    var data = undefined;
    before(function() {
        data = [
            { key: 'e' },
            { key: 'a' },
            { key: 'd' },
            { key: 'c' },
            { key: 'b' }
        ];
    });

    describe('#sort', function () {
        it('should ascending sort ok ', function () {
            var sorted = new Sort(data).sort('key');
            sorted[0].should.eql({ key: 'a' });
            sorted[1].should.eql({ key: 'b' });
            sorted[2].should.eql({ key: 'c' });
            sorted[3].should.eql({ key: 'd' });
            sorted[4].should.eql({ key: 'e' });
        });
        it('should descending sort ok ', function () {
            var sorted = new Sort(data).sort('-key');
            sorted[0].should.eql({ key: 'e' });
            sorted[1].should.eql({ key: 'd' });
            sorted[2].should.eql({ key: 'c' });
            sorted[3].should.eql({ key: 'b' });
            sorted[4].should.eql({ key: 'a' });
        });
    });
});
