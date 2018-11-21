define(['jquery', 'service/post', 'service/user'], function ($, post, user) {
    console.log(post.data);
    console.log(post.getById(1));
    console.log(user.data);
    console.log(user.getById(post.getById(1).userId))
});