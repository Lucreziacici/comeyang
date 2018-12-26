import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/vuex/store.js'
import debark from '../vuex/store'
import * as types from '../vuex/mutation-types'
const Layout = r => require.ensure([], () => r(require('@/pages/Layout')), 'Layout');//布局页
const Main = r => require.ensure([], () => r(require('@/pages/Main')), 'Main');//主页
const Login = r => require.ensure([], () => r(require('@/pages/Login/Login')), 'Login');//登陆
const Register = r => require.ensure([], () => r(require('@/pages/Login/Register')), 'Register');//登陆
const Commodity = r => require.ensure([], () => r(require('@/pages/Commodity/CommodityDetail')), 'Commodity');//商品详情
const Cart = r => require.ensure([], () => r(require('@/pages/Cart/Cart')), 'Cart');//购物车
const Address = r => require.ensure([], () => r(require('@/pages/Address/AddressList')), 'Address');//地址
const EditAddress = r => require.ensure([], () => r(require('@/pages/Address/EditAddress')), 'EditAddress');//编辑地址
const IdcardList = r => require.ensure([], () => r(require('@/pages/Idcard/IdcardList')), 'IdcardList');//身份证列表
const AddIdcard = r => require.ensure([], () => r(require('@/pages/Idcard/AddIdcard')), 'AddIdcard');//新增身份证
const ConfirmOrder = r => require.ensure([], () => r(require('@/pages/Order/ConfirmOrder')), 'ConfirmOrder');//下单页
const OrderList = r => require.ensure([], () => r(require('@/pages/Order/OrderList')), 'OrderList');//订单列表
const OrderDetail = r => require.ensure([], () => r(require('@/pages/Order/OrderDetail')), 'OrderDetail');//订单列表
const Logistics = r => require.ensure([], () => r(require('@/pages/Order/Logistics')), 'Logistics');//物流
const CommodityList = r => require.ensure([], () => r(require('@/pages/CommodityList/CommodityList')), 'CommodityList');//商品列表页
const Recommend = r => require.ensure([], () => r(require('@/pages/CommodityList/Recommend')), 'Recommend');//推荐列表
const Member = r => require.ensure([], () => r(require('@/pages/Member/Member')), 'Member');//个人中心
const Userinfo = r => require.ensure([], () => r(require('@/pages/Member/Userinfo')), 'Userinfo');//用户信息
const ChangePhone = r => require.ensure([], () => r(require('@/pages/Member/ChangePhone')), 'ChangePhone');//更改手机号
const ChangePassword = r => require.ensure([], () => r(require('@/pages/Member/ChangePassword')), 'ChangePassword');//更改手机号
const Reset = r => require.ensure([], () => r(require('@/pages/Member/Reset')), 'Reset');//重置密码
const BrandList = r => require.ensure([], () => r(require('@/pages/Brand/BrandList')), 'BrandList');//品牌钜惠
const BrandDetail = r => require.ensure([], () => r(require('@/pages/Brand/BrandDetail')), 'BrandDetail');//品牌详情
const Collect = r => require.ensure([], () => r(require('@/pages/Member/Collect')), 'Collect');//收藏
const Tax = r => require.ensure([], () => r(require('@/pages/Article/tax')), 'Tax');//跨境电商综合税说明
const Customer = r => require.ensure([], () => r(require('@/pages/Article/Customer')), 'Customer');//消费者告知书
const Shopline = r => require.ensure([], () => r(require('@/pages/Article/Shopline')), 'Shopline');//购物流程
const Paytype = r => require.ensure([], () => r(require('@/pages/Article/Paytype')), 'Paytype');//支付方式
const Tariff = r => require.ensure([], () => r(require('@/pages/Article/Tariff')), 'Tariff');//通关关税
const Returnspolicy = r => require.ensure([], () => r(require('@/pages/Article/Returnspolicy')), 'Returnspolicy');//退货政策
const ReturnProcess = r => require.ensure([], () => r(require('@/pages/Article/ReturnProcess')), 'ReturnProcess');//退货流程
const Service = r => require.ensure([], () => r(require('@/pages/Article/Service')), 'Service');//联系客服
const Help = r => require.ensure([], () => r(require('@/pages/Article/Help')), 'Help');//服务帮助
Vue.use(Router)

// export default new Router({
  const routes = [
    {
      path: '/',
      component: Layout,
      name: 'Layout',
      meta: { title: "layout" },
      children: [{
        path: '',
        component: Main,
        meta: { title: '洋来了跨境商城', auth: false },
        name: "Main"
      }, {
        path: '/Commodity',
        component: Commodity,
        meta: { title: "商品详情", auth: true },
        name: "Commodity"
      }, {
        path: '/Cart',
        component: Cart,
        meta: { title: "购物车", auth: true },
        name: "Cart"
      }, {
        path: '/Address',
        component: Address,
        meta: { title: "我的地址", auth: true },
        name: "Address"
      }, {
        path: '/EditAddress',
        component: EditAddress,
        meta: { title: "编辑地址", auth: true },
        name: "EditAddress"
      }, {
        path: '/IdcardList',
        component: IdcardList,
        meta: { title: "身份证信息", auth: true },
        name: "IdcardList"
      }, {
        path: '/AddIdcard',
        component: AddIdcard,
        meta: { title: "新增身份证", auth: true },
        name: "AddIdcard"
      }, {
        path: '/ConfirmOrder',
        component: ConfirmOrder,
        meta: { title: "确认订单" , auth: true},
        name: "ConfirmOrder"
      }, {
        path: '/CommodityList',
        component: CommodityList,
        meta: { title: "商品列表", auth: false },
        name: "CommodityList"
      }, {
        path: '/Recommend',
        component: Recommend,
        meta: { title: "推荐列表", auth: false },
        name: "Recommend"
      }, {
        path: '/Member',
        component: Member,
        meta: { title: "个人中心", auth: true },
        name: "Member"
      }, {
        path: '/OrderList',
        component: OrderList,
        meta: { title: "订单列表", auth: true },
        name: "OrderList"

      }, {
        path: '/OrderDetail',
        component: OrderDetail,
        meta: { title: "订单详情", auth: true },
        name: "OrderDetail"

      }, {
        path: '/Logistics',
        component: Logistics,
        meta: { title: "物流信息" , auth: true},
        name: "Logistics"

      }, {
        path: '/BrandList',
        component: BrandList,
        meta: { title: "品牌钜惠" , auth: false},
        name: "BrandList"

      }, {
        path: '/BrandDetail',
        component: BrandDetail,
        meta: { title: "品牌详情", auth: true },
        name: "BrandDetail"

      }, {
        path: '/Collect',
        component: Collect,
        meta: { title: "我的收藏", auth: true},
        name: "Collect"
      }, {
        path: '/Tax',
        component: Tax,
        meta: { title: "跨境电商综合税说明" , auth: false},
        name: "Tax"
      }, {
        path: '/Customer',
        component: Customer,
        meta: { title: "消费者告知书", auth: false },
        name: "Customer"
      }, {
        path: '/Shopline',
        component: Shopline,
        meta: { title: "购物流程", auth: false },
        name: "Shopline"
      }, {
        path: '/Paytype',
        component: Paytype,
        meta: { title: "支付方式", auth: false },
        name: "Paytype"
      }, {
        path: '/Tariff',
        component: Tariff,
        meta: { title: "通关关税", auth: false },
        name: "Tariff"
      }, {
        path: '/Returnspolicy',
        component: Returnspolicy,
        meta: { title: "退货政策", auth: false },
        name: "Returnspolicy"
      }, {
        path: '/ReturnProcess',
        component: ReturnProcess,
        meta: { title: "退货流程", auth: false },
        name: "ReturnProcess"
      }, {
        path: '/Service',
        component: Service,
        meta: { title: "联系客服", auth: false },
        name: "Service"
      }, {
        path: '/Help',
        component: Help,
        meta: { title: "服务帮助", auth: false },
        name: "Help"
      }, {
        path: '/Login',
        component: Login,
        name: 'Login',
        meta: { title: "登陆", auth: false },
      }, {
        path: '/Register',
        component: Register,
        name: 'Register',
        meta: { title: "注册", auth: false },
      }, {
        path: '/Userinfo',
        component: Userinfo,
        name: 'Userinfo',
        meta: { title: "用户信息", auth: true },
      }, {
        path: '/ChangePhone',
        component: ChangePhone,
        name: 'ChangePhone',
        meta: { title: "更改手机号", auth: true },
      }, {
        path: '/ChangePassword',
        component: ChangePassword,
        name: 'ChangePassword',
        meta: { title: "更改密码", auth: true  },
      }, {
        path: '/Reset',
        component: Reset,
        name: 'Reset',
        meta: { title: "重置密码" , auth: false },
      }]
    }
  ]
// })
if (window.localStorage.getItem('token')) {
  debark.commit(types.LOGIN, window.localStorage.getItem('token'))
  // console.log(JSON.parse(window.localStorage.getItem('user')))
  debark.commit(types.USER,window.localStorage.getItem('user'))
}
const router = new Router({
  // mode:'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.auth)) {
    if (debark.state.token) {
      //如果有token
      next();
    }
    else {
      //如果没有token，跳登陆
      next({ path: 'login', query: { redirect: to.fullPath } });
    }
  }
  else {
    //如果不需要检验
    next();
  }
});
export default router