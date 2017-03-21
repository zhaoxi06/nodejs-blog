/**
 * Created by lxq on 2017/3/21.
 */
$(function(){
    $loginBox = $('#loginBox');
    $registerBox = $('#registerBox');

    //切换到注册面板
    $loginBox.find('a.colMint').on('click',function(){
        $registerBox.show();
        $loginBox.hide();
    });

    //切换到登录面板
    $registerBox.find('a.colMint').on('click',function(){
        $loginBox.show();
        $registerBox.hide();
    });
    
    //注册
    $registerBox.find('button').on('click',function(){
        //通过ajax提交数据
        $.ajax({
            url: '/api/user/register',
            data: {
                username: $registerBox.find('[name=username]').val(),
                password: $registerBox.find('[name=password]').val(),
                repassword: $registerBox.find('[name=repassword]').val(),
            },
            type: 'post',
            dataType: 'json',
            success: function(result){
                console.log(result);
            }
        });
    });
});