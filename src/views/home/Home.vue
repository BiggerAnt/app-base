<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view/>
        <tab-control :titles="titles" class="tab-control"></tab-control>
        <ul>
            <li>选项一</li>
            <li>选项二</li>
            <li>选项三</li>
            <li>选项四</li>
            <li>选项五</li>
            <li>选项六</li>
            <li>选项七</li>
            <li>选项八</li>
            <li>选项九</li>
            <li>选项十</li>
            <li>选项十一</li>
            <li>选项十二</li>
            <li>选项十三</li>
            <li>选项十四</li>
            <li>选项十五</li>
            <li>选项一</li>
            <li>选项二</li>
            <li>选项三</li>
            <li>选项四</li>
            <li>选项五</li>
            <li>选项六</li>
            <li>选项七</li>
            <li>选项八</li>
            <li>选项九</li>
            <li>选项十</li>
            <li>选项十一</li>
            <li>选项十二</li>
            <li>选项十三</li>
            <li>选项十四</li>
            <li>选项十五</li>
            <li>选项一</li>
            <li>选项二</li>
            <li>选项三</li>
            <li>选项四</li>
            <li>选项五</li>
            <li>选项六</li>
            <li>选项七</li>
            <li>选项八</li>
            <li>选项九</li>
            <li>选项十</li>
            <li>选项十一</li>
            <li>选项十二</li>
            <li>选项十三</li>
            <li>选项十四</li>
            <li>选项十五</li>
            <li>选项一</li>
            <li>选项二</li>
            <li>选项三</li>
            <li>选项四</li>
            <li>选项五</li>
            <li>选项六</li>
            <li>选项七</li>
            <li>选项八</li>
            <li>选项九</li>
            <li>选项十</li>
            <li>选项十一</li>
            <li>选项十二</li>
            <li>选项十三</li>
            <li>选项十四</li>
            <li>选项十五</li>
            <li>选项一</li>
            <li>选项二</li>
            <li>选项三</li>
            <li>选项四</li>
            <li>选项五</li>
            <li>选项六</li>
            <li>选项七</li>
            <li>选项八</li>
            <li>选项九</li>
            <li>选项十</li>
            <li>选项十一</li>
            <li>选项十二</li>
            <li>选项十三</li>
            <li>选项十四</li>
            <li>选项十五</li>
        </ul>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';
import TabControl from 'components/content/tabControl/TabControl';


import { getHomeMultiData } from '@/network/home';

    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl
        },
        data() {
            return {
                banners: [
                {
                    link: '',
                    image: 'https://img.alicdn.com/imgextra/i1/6000000006130/O1CN019XLyFh1v9agp8W2m8_!!6000000006130-0-octopus.jpg'
                },
                {
                    link: '',
                    image: 'https://img.alicdn.com/imgextra/i4/6000000005819/O1CN01fACxHv1sr9Vy7iEWm_!!6000000005819-2-octopus.png'
                },
                {
                    link: '',
                    image: 'https://img.alicdn.com/imgextra/i4/6000000007139/O1CN01K1717322biJsmsWe3_!!6000000007139-0-octopus.jpg'
                },
                {
                    link: '',
                    image: 'https://img.alicdn.com/imgextra/i2/6000000001766/O1CN01ATnAXj1OusG4gchkP_!!6000000001766-2-octopus.png'
                },
                {
                    link: '',
                    image: 'https://img.alicdn.com/imgextra/i3/6000000004269/O1CN01rnPCw61hPFc2IpMTP_!!6000000004269-0-octopus.jpg'
                }],
                recommends: [
                    {
                        link: '',
                        image: 'https://img14.360buyimg.com/n7/jfs/t1/196780/15/23421/424749/625e0479Eae49060a/1dc8255c344f8e10.jpg',
                        title: '十点抢券'
                    },
                    {
                        link: '',
                        image: 'https://img10.360buyimg.com/n7/jfs/t1/111747/30/21308/470142/620a0ba8E87678e9c/7b6e063b786e6cfd.jpg',
                        title: '好物特卖'
                    },
                    {
                        link: '',
                        image: 'https://img10.360buyimg.com/n7/jfs/t1/80559/1/23645/105376/637f1ad9Ece3af697/37dc6b3f4014ec05.jpg',
                        title: '内购福利'
                    },
                    {
                        link: '',
                        image: 'https://img11.360buyimg.com/n7/jfs/t1/9092/37/20536/126137/63ad8085F817b9808/ec46ecf4a07cb882.jpg',
                        title: '初冬上新'
                    }
                ],
                titles: ['新款','流行','精选'],
                goods: {
                    'pop': {page: 1, list: []},
                    'news': {page: 1, list: []},
                    'sell': {page: 1, list: []}
                }
            }
        },
        created() {
            // getHomeMultiData().then(res => {
            //     //this.banners = res.data.banners;
            //     //console.log(res)
            // })
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>