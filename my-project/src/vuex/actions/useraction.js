/**
 * Created by 朱强 on 2017/7/3.
 */
import {axGet,axGetAsync,axPost} from '../../common/httpBean'

export function login(form,thisa){
  axPost('/api/users/login',$(form).serialize(),function(res){
    if(res.data!=0){
      // userStore.commit('login',res.data);
      // thisa.$router.push('/gamehill');
      console.log(res.data);
      return;
    }else{
      alert('账号/密码错误');
    }
    //alert(res.data);
    //userStore.commit('login',res.data);
  },function(err){
    alert(err);
  });
};
