const methods={
    globalfx(){

    }
}
//const requestURL = 'URL'
const globalvar = '/'
// real server: 'Real'
// test server: 'Test'
export default{
    name:'globalFxAssets',
    install(Vue){
        Vue.config.globalProperties.$globalvar = globalvar;
        Vue.config.globalProperties.$globalfx = methods.globalfx;
    }
}