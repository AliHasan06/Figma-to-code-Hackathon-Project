// app/page.tsx

import BannerPage from '@components/home/hero/BannerPage';
import Featured from '@components/home/featured/Featured';
import Latest from '@components/home/latest/Latest';
import Shopex from '@components/home/shopex/Shopex';
import Unique from '@components/home/unique/Unique';
import Trending from '@components/home/trending/Trending';
import Discount from '@components/home/discount/Discount';
import TopCategory from '@components/home/topCategory/TopCategory';
import { Subscribe } from '@components/home/subscribe/Subscribe';
import Blog from '@components/home/blog/Blog';

export default function HomePage() {
  return (
    <div>
      <BannerPage />
      <Featured />
      <Latest />
      <Shopex />
      <Unique />
      <Trending />
      <Discount />
      <TopCategory />
      <Subscribe />
      <Blog />
    </div>
  );
}
