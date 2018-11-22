define([], function () {
    var withParam = function (param) {

        var getParam = function () {
            return 'param = '+param;
        };
        return {
            getParam: getParam
        }
    };

    return withParam;
});