

describe(" Tests JsonToXML ", () => {
    it(`test BSTree `, function () {
        const act = JsonToXML({"node": {"el": "10", "floor": "2", "posLeft": "405", "posTop": "40", "right": "null", "left": "null"}});
        const exp = '<node><el>10</el><floor>2</floor><posLeft>405</posLeft><posTop>40</posTop><right>null</right><left>null</left></node>';
        assert.deepEqual(act, exp);
    });
    it(`test {"node": "2"} `, function () {
        const act = JsonToXML({"node": "2"});
        const exp = '<node>2</node>';
        assert.deepEqual(act, exp);
    });
    it(`test {test array "node": "[1,2,3]"} `, function () {
        const act = JsonToXML({"node": "[1,2,3]"});
        const exp = '<node>[1,2,3]</node>';
        assert.deepEqual(act, exp);
    });
    it(`test {test objects "group": student+student} `, function () {
         const act = JsonToXML({"group": {"student":{"name":"Olya","age":"18"}}});
        const exp = '<group><student><name>Olya</name><age>18</age></student></group>';
        assert.deepEqual(act, exp);
    });
});
// <group><student><name>Olya</name><age>18</age></student></group>    <group><student><name>Vasya</name><age>18</age></student><student><name>Olya</name><age>18</age></student></group>    // var xml = xml.replace(/<\/?[0-9]{1,}>/g,'');