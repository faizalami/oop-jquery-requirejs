define(['axios', 'lodash'], function (axios, _) {
    var user = (function () {
        const baseUrl = 'https://jsonplaceholder.typicode.com/users';

        const reqGetAll = async function () {
            return axios.get(baseUrl);
        };

        const getById = function(id) {
            return _.find(user.data, ['id', id]);
        };

        (async function() {
            const getPost = await reqGetAll();

            user.data = getPost.data;
        })();

        return {
            getById: getById
        };
    })();

    return user;
});