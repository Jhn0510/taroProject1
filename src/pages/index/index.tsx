import { getIndexNotice } from '@/service/notice';
import { useEffect, useState} from 'react';
import { View } from '@tarojs/components';
import Notice from './components/Notice';
import './index.scss';
import Navbar from './components/CustomNavbar';


export default function Index() {
  const [noticeList, setNoticeList] = useState<SwiperItem[]>([]);
  const [swiper, setSwiper] = useState<SwiperItem[]>([]);

  const getIndexNoticeFunction = async () => {
    const res = await getIndexNotice();
    if (res.code === 0) {
      setNoticeList(res.data);
    }
  };
  useEffect(() => {
    getIndexNoticeFunction();
  }, []);

  return (
    <View className='index'>
      <Navbar />
      <Notice noticeList={noticeList} />
    </View>
  );
}
