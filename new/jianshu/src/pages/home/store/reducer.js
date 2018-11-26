import {fromJS} from "immutable";

const defaultState =fromJS({
    topicList:[{
        id:1,
        title:"社会热点",
        imgUrl:"//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },{
        id:2,
        title:"手绘",
        imgUrl:"//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }]
});
export default (state=defaultState,action) => {
    switch(action.type){
        default:return state;
    }
}