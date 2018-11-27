import React,{PureComponent} from "react";
import writer from "./writer.css";

class Writer extends PureComponent{
    render(){
        return (
            <div className={writer.writerWrapper}>Writer</div>
        )
    }
}
export default Writer;