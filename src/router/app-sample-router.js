export default {
  path: '/AppSample',
  name: 'AppSample',
  component: require('@/components/AppSample'),
  children: [{
    path: '',
    component: require('@/components/AppSample/Home')
  }]
}
