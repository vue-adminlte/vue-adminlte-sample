export default {
  path: '/AppSample',
  name: 'AppSample',
  component: require('@/components/AppSample'),
  children: [{
    path: '',
    component: require('@/components/AppSample/Home')
  },{
    path: 'FlexLayout',
    component: require('@/components/AppSample/FlexLayout')
  },{
    path: 'FlexSample',
    component: require('@/components/AppSample/FlexSample')
  }]
}
