var compare = require('../src');

describe('单元测试', function () {
    // this.timeout(1000);

    describe('功能1', function () {
        test('相等', function () {
            // const nextProps = {name: "bethon", age: 12};
            // const thisProps = {
            //     name: "bethon",
            //     age: 12,
            //     weight: 68
            // };
            // compare(nextProps, thisProps, {})
            const add = (a, b) => a + b;
            expect(add(1, 2)).toBe(3);
        });
    });
    expect(true).toBe(true);

});
