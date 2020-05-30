/** 主要看下涉及哪些点
 * 01.taro从0到1项目架构课程介绍
 02.初始化项目流程介绍、目录设计
 03.让alias别名解决路径引用的烦恼
 04.请求api返回redux的状态流程
 05.封装request get请求，给url添加时间戳防止浏览器缓存
 06.封装request post Content-Type 分类请求
 07.把taro-advance脚手架推送到私有仓库
 08.弱网请求失败时自动发起api重试
 09.异常日志上报封装设计思路
 10.异常日志上报封装，五种级别输出。
 11.上报收集日志平台系统介绍
 12.实战接入日志平台
 13.深度序列化错误error控制台上报
 14.登录流程讲解（前端和后端实现流程）
 15.登录实现详细讲解（token附加到请求header头）
 16.用户授权后更新用户信息流程
 17.设计createApiAction自动dispatch优化开发体验
 18.改造actionType支持庞大业务
 19.Action三种ActionType的集合
 20.简化reducers的swich繁琐操作
 21.增加request的状态
 22.课程总结
 */

import { REQUEST_METHOD, BASE_URL } from "./config";

/**
 * 封装网路请求，基于fetch
 * 注入token
 */
export class Request {
  /**
   * 发起请求
   * @param {*} url
   * @param {*} config
   */
  async fetchData(url, config) {
    let result;
    const Host =
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_HOST
        : (process.env.REACT_APP_PROD_HOST = "huiduoduo.online");
    const requestUrl = `${Host}${BASE_URL}${url}`;
    const { method, contentType, token, body } = config;
    // 创建headers
    const headers = new Headers({
      token: !token ? sessionStorage.getItem("MI_SHOP_TOKEN") : token,
      "Content-Type": contentType
    });
    // 根据请求方法判断
    if (!method || method === REQUEST_METHOD.GET) {
      result = await fetch(requestUrl, {
        headers
      });
    } else if (method === REQUEST_METHOD.POST) {
      result = await fetch(requestUrl, {
        body: JSON.stringify(body),
        headers,
        method
      });
    } else {
      result = await fetch(requestUrl, {
        body: JSON.stringify(body),
        headers,
        method
      });
    }
    return this.handleRequest(result);
  }

  /**
   * 处理相应
   * @param {*} result
   */
  async handleRequest(result) {
    const parsedRequest = await this.parseRequest(result);
    // 如果res.ok，则请求成功
    if (result.ok) {
      return parsedRequest;
    }
    // 请求失败，返回解析之后的失败的数据
    const error = parsedRequest;
    throw error;
  }

  /**
   * 根据Content-Type解析返回内容
   * @param {*} result
   */
  async parseRequest(result) {
    const contentType = result.headers.get("Content-Type");
    if (!contentType) return await result.text();
    if (contentType.indexOf("json") > -1) {
      return await result.json();
    }
    if (contentType.indexOf("text") > -1) {
      return await result.text();
    }
    if (contentType.indexOf("form") > -1) {
      return await result.formData();
    }
    if (contentType.indexOf("video") > -1) {
      return await result.blob();
    }
  }
}
