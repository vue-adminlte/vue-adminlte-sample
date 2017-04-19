<template>
  <flex-panel background="lightgray"
              min-height="85vh"
              flex-direction="column">
    <flex-panel background="lightgreen"
                class="flex-sample"
                height="100px">
      <h1>Main Header</h1>
    </flex-panel>
    <flex-panel flex="1">
      <flex-panel background="lightblue"
                  class="flex-sample"
                  width="200px">
        <h1>Left Sidebar</h1></flex-panel>
      <flex-panel :flex="1"
                  class="flex-sample">
        <h1>Main Content</h1></flex-panel>
      <flex-panel background="lightblue"
                  class="flex-sample"
                  width="200px">
        <h1>RightSidebar</h1></flex-panel>
    </flex-panel>
    <flex-panel background="lightgreen"
                class="flex-sample"
                height="100px">
      <h1>Main Footer</h1>
    </flex-panel>
  </flex-panel>
</template>

<style>
.flex-sample {
  justify-content: center;
  align-items: center;
}
</style>