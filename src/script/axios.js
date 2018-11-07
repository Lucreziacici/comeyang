import axios from 'axios'
import router from '../router'
import Vue from 'vue'

// axios.defaults.baseURL = 'https://mall.shjinjia.com.cn/api/';//正式


//测试
axios.defaults.baseURL = 'https://mallt.shjinjia.com.cn/api/' //测试用
//指向文慧地址
// axios.defaults.baseURL = 'http://10.10.200.4/MiniProgramMall.Api/api/' //测试用
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios.defaults.withCredentials=true;
// 不需要token的rest url
let urlsWithoutToken = new Array();
// urlsWithoutToken.push("/sysAdmin/syslogin")



// axios拦截器  token过期之后的处理
axios.interceptors.request.use(
    config => { // 这里的config包含每次请求的内容
        // console.log(config)
        config.headers.shop_id='5';
        config.headers.open_id='osCIE0dcoxQDjsKy3G1jmLP0i6Ls';
        let url;
        if (config.url.indexOf("?") < 0) {
            url = config.url.substring(axios.defaults.baseURL.length);
        } else {
            url = config.url.substring(axios.defaults.baseURL.length, config.url.indexOf("?"));
        }
        // 需要带上token
        // if (urlsWithoutToken.indexOf(url) < 0 && localStorage.getItem("token")) {
        //     config.headers.Authorization = `${localStorage.getItem("token")}`;
        // } else {
        //     delete config.headers.Authorization;
        // }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => {
        // if (res.data.code != 0) console.log(res)
            //在这里对返回的数据进行处理
        return res;
    }, (err) => {
        console.log(err)
            //Do something with response error
        if (err.response.data.status == '401') {
            // window.localStorage.removeItem("token");
            // window.localStorage.removeItem("userId");
            // window.localStorage.removeItem("name");
            // window.localStorage.removeItem("role");
            // router.push("/");

        } else if (err.response.data.status == '403') {
            // window.vm.$message("您没有权限进行此操作");
        }




        //   // window.location.href =window.location.origin+'/#/login/login/?redirect='+window.location.hash;



        // }
        return Promise.reject(err);
    });

window.vm = new Vue({

})
export default axios;
