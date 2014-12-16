var test = require('tape');
var points = require('../');

var ptsstr = 'm 340.0802,61.38651 c -40.2898,8.22791 -62.56591,65.81112'
    + ' -49.74004,128.6158 12.82587,62.80467 55.90207,107.07364'
    + ' 96.19186,98.84572 40.2898,-8.22791 62.55966,-65.84175'
    + ' 49.73379,-128.64642 C 423.43994,97.39694 380.36999,53.15859'
    + ' 340.0802,61.38651 z m 12.91104,8.55846 c 22.51488,-4.59795'
    + ' 48.14062,27.6983 57.21553,72.13556 9.0749,44.43726 -1.83609,84.19498'
    + ' -24.35097,88.79294 -22.51489,4.59795 -48.11001,-27.70455'
    + ' -57.18492,-72.14182 -9.0749,-44.43726 1.80548,-84.18872'
    + ' 24.32036,-88.78668 z'
;
var expected = [
    [ 340.0802001953125, 61.38650894165039 ],
    [ 321.8157653808594, 69.20254516601562 ],
    [ 307.4777526855469, 83.02464294433594 ],
    [ 297.37322998046875, 100.23261260986328 ],
    [ 290.9107971191406, 119.13245391845703 ],
    [ 287.5101318359375, 138.82359313964844 ],
    [ 286.7633056640625, 158.79637145996094 ],
    [ 288.40179443359375, 178.7179718017578 ],
    [ 292.2458801269531, 198.3347625732422 ],
    [ 298.2345886230469, 217.40565490722656 ],
    [ 306.42352294921875, 235.6382598876953 ],
    [ 316.92340087890625, 252.6409149169922 ],
    [ 329.89788818359375, 267.8296203613281 ],
    [ 345.5393371582031, 280.2276611328125 ],
    [ 363.8115234375, 288.1679992675781 ],
    [ 383.6481018066406, 289.346923828125 ],
    [ 402.3357238769531, 282.6163024902344 ],
    [ 417.3066711425781, 269.49432373046875 ],
    [ 427.99755859375, 252.64942932128906 ],
    [ 434.95172119140625, 233.9269561767578 ],
    [ 438.7707214355469, 214.31356811523438 ],
    [ 439.8885498046875, 194.35853576660156 ],
    [ 438.5883483886719, 174.4122314453125 ],
    [ 435.0616455078125, 154.73593139648438 ],
    [ 429.3913879394531, 135.56776428222656 ],
    [ 421.5321044921875, 117.1902084350586 ],
    [ 411.380126953125, 99.97671508789062 ],
    [ 398.779541015625, 84.47447967529297 ],
    [ 383.53558349609375, 71.58562469482422 ],
    [ 365.6178283691406, 62.85908889770508 ],
    [ 345.87298583984375, 60.56299591064453 ],
    [ 366.84722900390625, 71.46846008300781 ],
    [ 382.8489990234375, 83.2032470703125 ],
    [ 394.5492858886719, 99.37156677246094 ],
    [ 403.0741271972656, 117.44123840332031 ],
    [ 408.9737548828125, 136.5365447998047 ],
    [ 412.45123291015625, 156.21900939941406 ],
    [ 413.35809326171875, 176.18238830566406 ],
    [ 411.1669921875, 196.03546142578125 ],
    [ 404.64031982421875, 214.86825561523438 ],
    [ 391.0517883300781, 229.10057067871094 ],
    [ 371.6767883300781, 229.2152862548828 ],
    [ 355.7667541503906, 217.34901428222656 ],
    [ 344.1390686035156, 201.1275177001953 ],
    [ 335.670654296875, 183.03115844726562 ],
    [ 329.8182678222656, 163.9211883544922 ],
    [ 326.3846435546875, 144.23098754882812 ],
    [ 325.52410888671875, 124.26554870605469 ],
    [ 327.773681640625, 104.41944122314453 ],
    [ 334.3923645019531, 85.62057495117188 ],
    [ 348.13775634765625, 71.55425262451172 ]
];

test('at', function (t) {
    t.plan(expected.length * 2);
    var pt = points(ptsstr);
    
    for (var i = 0; i < expected.length; i++) {
        var ref = expected[i];
        var p = pt.at(i * 20);
        var x = p[0], y = p[1];
        var rx = ref[0], ry = ref[1];
        t.ok(cmp(x, rx, 0.1), x + ' ~~ ' + rx + ' ±10%');
        t.ok(cmp(y, ry, 0.1), y + ' ~~ ' + ry + ' ±10%');
    }
});

function cmp (found, wanted, tolerance) {
    return found <= wanted + wanted * tolerance
        && found >= wanted - wanted * tolerance
    ;
}
