<template>
    <section class="section-hero section-shaped my-0">
        <div class="container"
             style="color: #345;font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,ubuntu,cantarell,fira sans,droid sans,helvetica neue,sans-serif;margin-top: 20px">
            <div class="row justify-content-center align-items-center">
                <h6 style="text-transform: uppercase;font-weight: bold;    font-size: 10pt;"
                    class="col-sm-12 text-center">
                    memes-repo.com
                </h6>
                <div style="">
                    <base-button size="sm" type="primary"
                                 @click="openTwitter()">
                        <i class="fa fa-twitter"></i>
                        المشاركة عبر
                    </base-button>
                </div>
            </div>
        </div>

        <div class="container" style="color: #345">
            <div class="col px-0">

                <div class="row justify-content-center align-items-center">
                    <img v-lazy="'img/pixel.gif'" style="height: 180px">
                </div>

                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center">
                        <h1 style=" background: url(https://www.onlygfx.com/wp-content/uploads/2019/03/14-white-grunge-brush-stroke-13.png);
    background-repeat: no-repeat;
    background-size: 100% 95%;
    padding: 8px 0;
    font-family: 'Tajawal' !important
">
                            مخزن الميمز العربي
                        </h1>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around">
                    <div class="col-sm-12 text-center">
                        <p style="font-weight: 500">
                            <span>🥳</span>
                            اهلا انا
                            <a href="https://twitter.com/abdullahjsx" target="_blank">عبدالله</a>
                            عملت هذا الموقع عشان اقدر القى الميمز المناسبة بسرعة دائما
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <div class="container" style="">

            <div class="col-md-4" style="margin: 0 auto">

                <base-button block type="warning" class="  text-center" @click="modals.modal2 = true">
                    كيف استخدم الموقع؟
                </base-button>

                <modal :show.sync="modals.modal2"
                       gradient="primary"
                       modal-classes="modal-danger modal-dialog-centered">

                    <div class="py-3 text-center" style="direction: rtl">
                        <i class="ni ni-bell-55 ni-3x"></i>

                        <h3 style="font-weight: bold;font-size: 16pt" class="heading mt-4">عشان تنسخ الميم و تستخدمه في
                            تويتر</h3>

                        <br>

                        <p style="text-align: right">
                            1. اضغط مطولًا على الميم المناسب لسالفتك الحلوة
                        </p>
                        <p style="text-align: right">
                            2. اضغط على نسخ او copy
                        </p>
                        <img v-lazy="'img/1.jpg'" style="width: 250px" alt="">
                        <p style="text-align: right">
                            3. سوي لصق في التغريدة المناسبة
                        </p>
                        <img v-lazy="'img/2.jpg'" style="width: 250px">
                        <p style="text-align: right">
                            4. انبسط
                        </p>
                    </div>

                    <template slot="footer">


                        <base-button type="white" style="direction: rtl" @click="modals.modal2 = false">

                            اوكي فهمت...
                        </base-button>

                        <base-button type="link"
                                     text-color="white"
                                     class="ml-auto"
                                     @click="modals.modal2 = false">
                            إغلاق
                        </base-button>
                    </template>
                </modal>
            </div>
        </div>

        <br>

    </section>
</template>
<script>
import {VBTooltip} from 'bootstrap-vue/esm/directives/tooltip/tooltip'
import {VBPopover} from 'bootstrap-vue/esm/directives/popover/popover'
import Modal from '@/components/Modal.vue'

export default {
	components: {
		Modal
	},
	directives: {
		BTooltip: VBTooltip,
		BPopover: VBPopover,
	},
	data() {
		return {
			modals: {
				modal1: false,
				modal2: false,
				modal3: false
			}
		}
	},
	methods: {
		openTwitter() {
			window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fmemes-repo.com%2F&text=%D8%AC%D8%B1%D8%A8%D9%88%20%D8%AA%D8%B3%D8%AA%D8%AE%D8%AF%D9%85%D9%88%20%D9%85%D8%AE%D8%B2%D9%86%20%D8%A7%D9%84%D9%85%D9%8A%D9%85%D8%B2%20%D8%B9%D8%B4%D8%A7%D9%86%20%D8%AA%D9%84%D9%82%D9%88%20%D8%A7%D9%84%D9%85%D9%8A%D9%85%D8%B2%20%D8%AD%D9%82%D8%AA%D9%83%D9%85%20%D8%AF%D8%A7%D8%A6%D9%85%D8%A7')
		}
	}
}
</script>
<style>
</style>
