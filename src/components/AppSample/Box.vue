<template>
  <div>
    <div>
      <div class="col-md-4">
        <lte-box header="This is Header"
                 type="primary"
                 expandable
                 solid>This is content</lte-box>
        <lte-box header="This is Header"
                 type="primary"
                 badgeText="8"
                 badgeBg="blue"
                 expandable>This is content</lte-box>
        <lte-box header="This is Header">This is content</lte-box>
      </div>
      <div class="col-md-4">
        <lte-box header="This is Header"
                 type="warning"
                 icon="fa fa-info"
                 closeable
                 solid>This is content</lte-box>
        <lte-box header="This is Header"
                 type="info"
                 expandable
                 loading>This is content</lte-box>
        <lte-box header="This is Header"
                 solid>This is content</lte-box>
      </div>
      <div class="col-md-4">
        <lte-box header="This is Header"
                 type="success"
                 icon="fa fa-check"
                 expandable
                 closeable
                 solid>This is content</lte-box>
        <lte-box header="This is Header"
                 type="danger"
                 expandable
                 badgeText="loading"
                 badgeBg="orange"
                 closeable
                 loading
                 solid>This is content</lte-box>
      </div>
    </div>
  </div>
</template>