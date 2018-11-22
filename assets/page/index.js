define(['jquery', 'service/post', 'service/user', 'service/with-param'], function ($, post, user, withParam) {
    console.log(post.data);
    console.log(post.getById(1));
    console.log(user.data);
    console.log(user.getById(post.getById(1).userId));
    var coba = withParam(5).getParam();
    console.log(coba);
});