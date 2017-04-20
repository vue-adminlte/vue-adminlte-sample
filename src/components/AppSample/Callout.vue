<template>
  <div>
    <lte-callout type="success">最简单的Callout</lte-callout>
    <lte-callout type="info"
                 header="带有标题">带有标题的Callout</lte-callout>
    <lte-callout type="danger"
                 icon="fa fa-info"
                 header="带有标题和图标">带有标题和图标的Callout</lte-callout>
    <lte-callout type="warning"
                 icon="fa fa-info"
                 badgeText="!"
                 badgeBg="red"
                 header="全属性">全属性的Callout</lte-callout>
    <lte-callout bg="primary"
                 icon="fa fa-info"
                 badgeText="5"
                 badgeBg="green"
                 header="使用bg指定颜色">使用bg指定颜色，这种情况下没有左边的高亮的竖条，就像一个Alert</lte-callout>
  </div>
</template>