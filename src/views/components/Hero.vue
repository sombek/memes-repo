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
                    <base-button size="sm" type="primary">
                        <i class="fa fa-twitter"></i>
                        المشاركة عبر
                    </base-button>
                </div>
            </div>
        </div>

        <div class="container" style="color: #345;margin-top: 80px">
            <div class="col px-0">
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

                        <h3 style="font-weight: bold;font-size: 16pt" class="heading mt-4">عشان تنسخ الميم و تستخدمه في تويتر</h3>

                        <br>

                        <p style="text-align: right">
                            1. اضغط مطولًا على الميم المناسب لسالفتك الحلوة
                        </p>
                        <p style="text-align: right">
                            2. اضغط على نسخ او copy
                        </p>
                        <p style="text-align: right">
                            3. سوي لصق في التغريدة المناسبة
                        </p>
                        <p style="text-align: right">
                            4. انبسط
                        </p>
                    </div>

                    <template slot="footer">


                        <base-button type="white" style="direction: rtl" @click="modals.modal2 = false">

                            اوكي فهمت...</base-button>

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
    import {VBTooltip} from "bootstrap-vue/esm/directives/tooltip/tooltip";
    import {VBPopover} from "bootstrap-vue/esm/directives/popover/popover";
    import Modal from "@/components/Modal.vue";

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
            };
        }
    };
</script>
<style>
</style>
