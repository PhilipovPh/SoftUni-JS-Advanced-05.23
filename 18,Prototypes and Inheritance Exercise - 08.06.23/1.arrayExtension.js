(function solution() {
    // last
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    // skip
    Array.prototype.skip = function (n) {
        const results = [];
        for (let index = n; index < this.length; index++) {
            results.push(this[index]);
        }

        return results;
    };

    // take
    Array.prototype.take = function (n) {
        const results = [];
        for (let index = 0; index < n; index++) {
            results.push(this[index]);
        }

        return results;
    };

    // sum
    Array.prototype.sum = function () {
        let sum = 0;
        for (let index = 0; index < this.length; index++) {
            sum += this[index];
        }
        // this.reduce((acc, curr )=> acc + curr, 0 )

        return sum;
    };

    // average
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();
