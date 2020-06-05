import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Button, Text } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";

import { add, minus, asyncAdd } from '../../actions/counter';

import './index.scss';

@connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
}))
class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '首页'
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">
        <Button className="add_btn" onClick={this.props.add}>+</Button>
        <Button className="dec_btn" onClick={this.props.dec}>-</Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

}

export default Index;