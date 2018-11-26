import * as constants from "./constants";
import axios from "axios";
import {fromJS} from "immutable"

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
  });
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const changePage= (page) => ({
  type: constants.CHANGE_PAGE,
  page
});
export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerlist.json")
      .then((res) => {
          const data=res.data
        //   const action={
        //       type:"change_list",
        //       sata:data.data
        //   }
        //   dispatch(action)
        
        // const action=changeList(data.data)

        dispatch(changeList(data.data))
      })
      .catch(() => {
        console.log("error");
      });
  };
};
