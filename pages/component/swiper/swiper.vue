<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="page-body">
			<view class="page-section page-section-spacing swiper">
				<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item color1">A</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item color2">B</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item color3">C</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="page-section swiper-list">
				<view class="uni-list">
					<view class="uni-list-cell uni-list-cell-pd">
						<view class="uni-list-cell-db">指示点</view>
						<switch :checked="indicatorDots" @change="changeIndicatorDots" />
					</view>
					<view class="uni-list-cell uni-list-cell-pd">
						<view class="uni-list-cell-db">自动播放</view>
						<switch :checked="autoplay" @change="changeAutoplay" />
					</view>
				</view>
			</view>

			<view class="page-section page-section-spacing">
				<view class="page-section-title">
					<text>幻灯片切换时长(ms)</text>
					<text class="info">{{duration}}</text>
				</view>
				<slider @change="durationChange" :value="duration" min="500" max="2000" />
				<view class="page-section-title">
					<text>自动播放间隔时长(ms)</text>
					<text class="info">{{interval}}</text>
				</view>
				<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
			</view>
		</view>
	</view>
</template>
<script>
	import pageHead from '../../../components/page-head.vue'

	export default {
		data() {
			return {
				title: 'swiper',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				vertical: false,
				autoplay: false,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		},
		components: {
			pageHead
		}
	}
</script>

<style>
	@import "../../../common/uni.css";

	.swiper-item {
		display: block;
		height: 300px;
		line-height: 300px;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40px;
		margin-bottom: 0;
	}

	.page-section-title {
		padding: 0;
		margin-top: 60px;
		position: relative;
	}

	.info {
		position: absolute;
		right: 0;
		color: #353535;
		font-size: 30px;
	}
</style>
