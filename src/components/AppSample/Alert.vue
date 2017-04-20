<template>
  <div>
    <lte-alert v-for="item in alertList"
               :header="item.header"
               :icon="item.icon"
               :type="item.type"
               :badgeText="item.badgeText"
               :badgeBg="item.badgeBg"
               :bg="item.bg"
               :closeable="item.closeable">
      {{item.text}}</lte-alert>
  
    <lte-alert header="HTML写的Alert"
               type="success"
               icon="fa fa-tag"
               badgeText="HTML"
               badgeBg="blue"
               closeable>上面的Alert使用v-for写的额，这个Alert是用纯html写的，代码用作参考。</lte-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertList: [{
        text: '最普通的lte-alert，<lte-alert type="success">',
        type: 'success'
      }, {
        header: '带有header的lte-alert',
        text: '带有header的lte-alert，<lte-alert type="info" header="带有header的lte-alert">',
        type: 'info'
      }, {
        header: '带有icon的lte-alert',
        text: '带有icon的lte-alert，<lte-alert type="warning" header="带有icon的lte-alert" icon="fa fa-info" closeable>',
        type: 'warning',
        icon: 'fa fa-info',
        closeable: true
      }, {
        header: '全要素的lte-alert，使用bg指定颜色',
        text: '带有icon的lte-alert，<lte-alert bg="primary" header="全要素的lte-alert，使用bg指定颜色" icon="fa fa-info" badgeText="cool" badgeBg="red" closeable>',
        bg: 'primary',
        icon: 'fa fa-info',
        badgeText: 'cool',
        badgeBg: 'red',
        closeable: true
      }, {
        text: '没有标题头的lte-alert，<lte-alert type="danger" icon="fa fa-info" closeable>',
        type: 'danger',
        icon: 'fa fa-info',
        closeable: true
      }]
    }
  }
}
</script>