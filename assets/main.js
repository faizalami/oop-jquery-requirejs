requirejs.config({
    baseUrl: 'assets',
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: [
            '//code.jquery.com/jquery-3.3.1.min',
            'lib/jquery-3.3.1.min'
        ],
        axios: [
            '//unpkg.com/axios/dist/axios.min',
            'lib/axios.min'
        ],
        lodash: 'lib/lodash.min',
        bootstrap: 'lib/bootstrap-3.3.7-dist/js/bootstrap.min'
    }
});