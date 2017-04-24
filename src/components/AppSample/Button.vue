<template>
  <div>
    <div class="col-md-6">
      <lte-box type="primary"
               expandable
               header="default:">
        <div>
          <lte-btn>Button</lte-btn>
          <lte-btn type="success">Button</lte-btn>
          <lte-btn type="info">Button</lte-btn>
          <lte-btn type="warning">Button</lte-btn>
          <lte-btn type="danger">Button</lte-btn>
          <lte-btn type="primary">Button</lte-btn>
          <lte-btn bg="gray">Button</lte-btn>
          <lte-btn bg="navy">Button</lte-btn>
          <lte-btn bg="purple">Button</lte-btn>
        </div>
      </lte-box>
      <lte-box type="info"
               expandable
               header="size">
        <lte-btn size="xs">Button</lte-btn>
        <lte-btn size="xs"
                 type="success">Button</lte-btn>
        <lte-btn size="sm"
                 type="info">Button</lte-btn>
        <lte-btn size="sm"
                 type="warning">Button</lte-btn>
        <lte-btn type="danger">Button</lte-btn>
        <lte-btn type="primary">Button</lte-btn>
        <lte-btn size="lg"
                 bg="gray">Button</lte-btn>
        <lte-btn size="lg"
                 bg="navy">Button</lte-btn>
        <lte-btn size="lg"
                 bg="purple">Button</lte-btn>
      </lte-box>
      <lte-box type="warning"
               expandable
               header="icon and badge:">
        <lte-btn icon="fa fa-adjust"
                 badgeText="!"
                 badgeBg="red">Button</lte-btn>
        <lte-btn type="success"
                 badgeText="5"
                 icon="fa fa-at">Button</lte-btn>
        <lte-btn type="info"
                 badgeText="N"
                 icon="fa fa-bolt">Button</lte-btn>
        <lte-btn type="warning"
                 badgeText="34"
                 icon="fa fa-camera">Button</lte-btn>
        <lte-btn type="danger"
                 badgeText="X"
                 icon="fa fa-clock-o">Button</lte-btn>
        <lte-btn type="primary"
                 icon="fa fa-facebook"></lte-btn>
        <lte-btn type="success"
                 badgeText="3"
                 icon="fa fa-comments-o"></lte-btn>
        <lte-btn bg="navy"
                 icon="fa fa-edit"></lte-btn>
        <lte-btn bg="purple"
                 icon="fa fa-envelope-o"
                 disabled></lte-btn>
      </lte-box>
      <lte-box type="danger"
               expandable
               header="app-btn:">
        <lte-app-btn>AppBtn</lte-app-btn>
        <lte-app-btn icon="fa fa-map-o"
                     badgeText=123>AppBtn</lte-app-btn>
        <lte-app-btn icon="fa fa-language"
                     badgeText=456
                     badge-bg="yellow">AppBtn</lte-app-btn>
        <lte-app-btn icon="fa fa-thumbs-o-up"
                     badgeText="new"
                     badge-bg="red">AppBtn</lte-app-btn>
        <lte-app-btn icon="fa fa-language"
                     badgeText=456
                     badge-bg="yellow"></lte-app-btn>
        <lte-app-btn icon="fa fa-thumbs-o-up"
                     badgeText="new"
                     badge-bg="red"></lte-app-btn>
      </lte-box>
      <lte-box type="success"
               expandable
               header="vertical-btn-group">
        <lte-btn-group vertical>
          <lte-btn type="primary">1</lte-btn>
          <lte-btn type="info">2</lte-btn>
          <lte-btn type="success">3</lte-btn>
          <lte-btn type="warning">4</lte-btn>
          <lte-btn type="danger">5</lte-btn>
        </lte-btn-group>
        <lte-btn-group vertical>
          <lte-app-btn>AppBtn</lte-app-btn>
          <lte-app-btn icon="fa fa-map-o">AppBtn</lte-app-btn>
          <lte-app-btn icon="fa fa-language">AppBtn</lte-app-btn>
          <lte-app-btn icon="fa fa-thumbs-o-up">AppBtn</lte-app-btn>
        </lte-btn-group>
      </lte-box>
    </div>
    <div class="col-md-6">
      <lte-box type="primary"
               expandable
               header="flat:">
        <lte-btn flat>Button</lte-btn>
        <lte-btn type="success"
                 flat>Button</lte-btn>
        <lte-btn type="info"
                 flat>Button</lte-btn>
        <lte-btn type="warning"
                 flat>Button</lte-btn>
        <lte-btn type="danger"
                 flat>Button</lte-btn>
        <lte-btn type="primary"
                 flat>Button</lte-btn>
        <lte-btn bg="gray"
                 flat>Button</lte-btn>
        <lte-btn bg="navy"
                 flat>Button</lte-btn>
        <lte-btn bg="purple"
                 flat>Button</lte-btn>
      </lte-box>
      <lte-box type="success"
               expandable
               header="disabled:">
        <lte-btn disabled>Button</lte-btn>
        <lte-btn type="success"
                 disabled>Button</lte-btn>
        <lte-btn type="info"
                 disabled>Button</lte-btn>
        <lte-btn type="warning"
                 disabled>Button</lte-btn>
        <lte-btn type="danger"
                 disabled>Button</lte-btn>
        <lte-btn type="primary"
                 disabled>Button</lte-btn>
        <lte-btn bg="gray"
                 disabled>Button</lte-btn>
        <lte-btn bg="navy"
                 disabled>Button</lte-btn>
        <lte-btn bg="purple"
                 disabled>Button</lte-btn>
      </lte-box>
      <lte-box type="info"
               expandable
               header="block">
        <div>
          <div class="col-md-3">
            <lte-btn type="success"
                     block>Button</lte-btn>
          </div>
          <div class="col-md-3">
            <lte-btn type="info"
                     block
                     flat>Button</lte-btn>
          </div>
          <div class="col-md-3">
            <lte-btn type="primary"
                     block
                     flat>Button</lte-btn>
          </div>
          <div class="col-md-3">
            <lte-btn type="warning"
                     block
                     disabled>Button</lte-btn>
          </div>
        </div>
      </lte-box>
      <lte-box type="warning"
               expandable
               header="btn-group">
        <lte-btn-group>
          <lte-btn>left</lte-btn>
          <lte-btn>middle</lte-btn>
          <lte-btn>right</lte-btn>
        </lte-btn-group>
        <lte-btn-group>
          <lte-btn type="primary">1</lte-btn>
          <lte-btn type="info">2</lte-btn>
          <lte-btn type="success">3</lte-btn>
          <lte-btn type="warning">4</lte-btn>
          <lte-btn type="danger">5</lte-btn>
        </lte-btn-group>
        <lte-btn-group>
          <lte-app-btn>AppBtn</lte-app-btn>
          <lte-app-btn icon="fa fa-map-o">AppBtn</lte-app-btn>
          <lte-app-btn icon="fa fa-language">AppBtn</lte-app-btn>
          <lte-app-btn icon="fa fa-thumbs-o-up">AppBtn</lte-app-btn>
        </lte-btn-group>
        <lte-btn-group>
          <lte-btn icon="fa fa-align-left"
                   type="primary"></lte-btn>
          <lte-btn icon="fa fa-align-center"
                   type="primary"></lte-btn>
          <lte-btn icon="fa fa-align-right"
                   type="primary"></lte-btn>
        </lte-btn-group>
      </lte-box>
      <lte-box type="danger"
               expandable
               header="split-button:">
        <lte-split-btn text="SplitButton"
                       :items="menu"></lte-split-btn>
        <lte-split-btn text="SplitButton"
                       type="success"
                       :items="menu"></lte-split-btn>
        <lte-split-btn text="SplitButton"
                       :items="menu"
                       icon="fa fa-link"
                       @click="splitClick"
                       type="primary">
          <lte-link-item icon="fa fa-link">link-item1</lte-link-item>
          <lte-btn-item @click="onClick"
                           icon="fa fa-hourglass">button-item1</lte-btn-item>
          <lte-router-item icon="fa fa-beer">router-item1</lte-router-item>
          <lte-router-item icon="fa fa-registered">router-item2</lte-router-item>
          <lte-divider></lte-divider>
        </lte-split-btn>
        <lte-drop-btn text="DropdownButton"
                      type="warning"
                      :items="menu"></lte-drop-btn>
      </lte-box>
      <lte-box expandable
               header="ImageButton and IconButton">
        <lte-img-btn icon="fa fa-facebook"
                     type="primary">ImageButton</lte-img-btn>
        <lte-img-btn icon="fa fa-github"
                     bg="black">ImageButton</lte-img-btn>
        <lte-img-btn icon="fa fa-twitter"
                     type="info">ImageButton</lte-img-btn>
        <lte-icon-btn icon="fa fa-facebook"
                      type="primary"></lte-icon-btn>
        <lte-icon-btn icon="fa fa-github"
                      bg="black"></lte-icon-btn>
        <lte-icon-btn icon="fa fa-twitter"
                      type="info"></lte-icon-btn>
        <lte-icon-btn flat
                      icon="fa fa-facebook"
                      type="primary"></lte-icon-btn>
        <lte-icon-btn flat
                      icon="fa fa-github"
                      bg="black"></lte-icon-btn>
        <lte-icon-btn flat
                      icon="fa fa-twitter"
                      type="info"></lte-icon-btn>
      </lte-box>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [{
        text: 'router-link1',
        icon: 'fa fa-ban',
      }, {
        text: 'router-link2',
        icon: 'fa fa-edit'
      }, {
        type: 'd'
      }, {
        type: 'b',
        text: 'button-link1',
        icon: 'fa fa-stop',
        click() { alert('button-link1') }
      }, {
        type: 'b',
        text: 'button-link2',
        icon: 'fa fa-user',
        click() { alert('button-link2') }
      }, {
        type: 'd'
      }, {
        type: 'a',
        text: 'a-link1',
        icon: 'fa fa-play'
      }]
    }
  },
  methods: {
    onClick() {
      alert(1)
    },
    splitClick() {
      alert('SplitButton clicked!')
    }
  }
}
</script>