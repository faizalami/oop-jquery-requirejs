define(['axios', 'lodash'], function (axios, _) {
    var post = (function () {
        const reqPost = async function () {
            return axios.get('https://jsonplaceholder.typicode.com/posts');
        };

        const getById = function(id) {
            return _.find(post.data, ['id', id]);
        };

        (async function() {
            const getPost = await reqPost();

            post.data = getPost.data;
        })();

        return {
            getById: getById
        };
    })();

    return post;
});