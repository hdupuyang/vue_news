/*
获取新闻 的API
*/

import base from './base'
import axios from './http'

// 极速API的KEY 限制使用次数100
const KEY=`4a4bf66b65448e99`
const article={
    // channel列表
    channelList(){
        return axios.get(`/news/channel`,{
            params:{
                appkey:KEY
            }
        })
    },
    // 每个channel的文章列表
    channelItems(channel,start=0,num=30){
        return axios.get(`/news/get`,{
            params:{
                appkey:KEY,
                start,
                num,
                channel
            }
        })
    },
    search(keyword){
        return axios.get(`/news/search`,{
            params:{
                appkey:KEY,
                keyword
            }
        })
    }
}

export default article