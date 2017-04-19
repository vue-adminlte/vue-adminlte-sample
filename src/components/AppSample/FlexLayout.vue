<template>
  <flex-panel flex-direction="column"
              justify-content="space-around">
    <lte-alert icon="fa fa-info"
               header="Flex Layout"
               bg="primary">
      <p>
        通过布局骰子的6个面演示如何使用flex-panel布局。flex-panel中可以通过属性的方式配置常用css，也方便绑定，关于如何使用flex布局可以参考阮一峰的文章。在<router-link to="/AppSample/FlexSample">Flex Sample</router-link>中可以查看web页面中常用的圣杯布局。
      </p>
    </lte-alert>
    <flex-panel justify-content="space-around"
                flex-wrap="wrap">
      <dice1></dice1>
      <dice2></dice2>
      <dice3></dice3>
    </flex-panel>
    <flex-panel justify-content="space-around"
                flex-wrap="wrap">
      <dice4></dice4>
      <dice5></dice5>
      <dice6></dice6>
    </flex-panel>
  </flex-panel>
</template>

<script>
import Dice1 from './Dice/Dice1'
import Dice2 from './Dice/Dice2'
import Dice3 from './Dice/Dice3'
import Dice4 from './Dice/Dice4'
import Dice5 from './Dice/Dice5'
import Dice6 from './Dice/Dice6'

export default {
  components: {
    Dice1,
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6
  }
}
</script>

<style>
.dice {
  background: gray;
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
}

.dice-point {
  background: white;
  width: 45px;
  height: 45px;
  border-radius: 25px;
}
</style>