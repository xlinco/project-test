import {fromJS} from "immutable";
import * as constants from "./constants";

const defaultState =fromJS({
    title:"",
    content:""
    // title:"秦始皇叫嬴政，为什么中国姓嬴的几乎没有？",
    // content:"<img className={detail.detailPic} src='//upload-images.jianshu.io/upload_images/11026357-42968463245de2bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp' alt=''/><p className={detail.p}><b className={detail.b}>秦始皇是中国第一位大一统的人，</b>他建立了皇帝制度，被后人称为千古一帝。</p><p className={detail.p}>按照姓氏，他的后代应该很多，并且姓赢的也会传承至今。但事实是中国如今，姓赢的寥寥无几，如果没有秦始皇的威名，人们可能早就忘记还有这个姓氏。</p><p className={detail.p}>古书记载，秦始皇的出生至今是个谜，然而秦始皇到底姓啥。大多数认为嬴政是他的姓氏，也有人认为他出生在赵国，应该是赵政。接下来就说说他们那个时期的姓氏代表着什么？为何嬴姓没有被传承至今。</p>"
});
export default (state=defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_DETAIL:return state.merge({
            title:action.title,
            content:action.content
        })
        
        default:return state;
    }
}