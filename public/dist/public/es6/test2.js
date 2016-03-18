'use strict';
// es6 feature: block-scoped "let" declaration

var sentences = [{ subject: 'JavaScript', verb: 'did', object: 'work' }, { subject: 'Cats', verb: 'are', object: 'awesome!' }];
// es6 feature: object destructuring
function say(_ref) {
    var subject = _ref.subject;
    var verb = _ref.verb;
    var object = _ref.object;

    // es6 feature: template strings
    console.log(subject + ' ' + verb + ' ' + object);
}
// es6 feature: for..of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        say(s);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
//# sourceMappingURL=test2.js.map
