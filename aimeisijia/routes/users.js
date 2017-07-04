var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});
router.post('/login', async function (ctx, next) {
    router.post('/login',async function (ctx, next) {
        var user = {};
        user.usename = ctx.request.body['usename'];
        user.pwd = ctx.request.body['pwd'];

        let rs = await UserModel.findOne(user);
        //console.log(rs);

        if(rs){
            let loginbean = {};
            loginbean.id=rs._id;
            loginbean.nicheng=rs.nicheng;
            loginbean.role=rs.role;
            ctx.session.loginbean=loginbean;
            console.log(ctx.session.loginbean);
            ctx.body=loginbean;
        }else{
            ctx.body=0;
        }
    });
    router.get('/getLoginBean',async function (ctx, next) {
        console.log('重新获取loginbean');
        console.log(ctx.session.loginbean);
        ctx.body=ctx.session.loginbean;
    })
});

module.exports = router;
