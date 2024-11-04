import { View } from '@tarojs/components';
import './index.scss';
import Navbar from './components/CustomNavbar';

export default function Index() {

  return (
    <View className='index'>
      <Navbar />
    </View>
  );
}
