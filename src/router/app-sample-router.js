export default {
  path: '/AppSample',
  name: 'AppSample',
  component: require('@/components/AppSample'),
  children: [{
    path: '',
    component: require('@/components/AppSample/Home')
  }, {
    path: 'FlexLayout',
    component: require('@/components/AppSample/FlexLayout')
  }, {
    path: 'FlexSample',
    component: require('@/components/AppSample/FlexSample')
  }, {
    path: 'Button',
    component: require('@/components/AppSample/Button')
  }, {
    path: 'Box',
    component: require('@/components/AppSample/Box')
  }, {
    path: 'Carousel',
    component: require('@/components/AppSample/Carousel')
  }, {
    path: 'Progress',
    component: require('@/components/AppSample/Progress')
  }, {
    path: 'Alert',
    component: require('@/components/AppSample/Alert')
  }, {
    path: 'Callout',
    component: require('@/components/AppSample/Callout')
  }]
}
