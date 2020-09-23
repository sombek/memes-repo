<template>
    <section class="section-lg my-0">
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

        <div class="container pt-lg-md">
            <div style="max-width: 370px;margin: 0 auto;text-align: center">

                <base-input alternative multiple
                            style="text-align: right"
                            type="file"
                            class="mb-3"
                            @change="upload($event)"
                            addon-left-icon="ni ni-paper-diploma">
                </base-input>

                <base-button @click="send">Upload</base-button>

            </div>

            <hr>

            <div class="row justify-content-center">

                <div class="col-lg-5" v-for="file of files" style="margin: 5px">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <img :src="file.preview" style="width: 250px;">
                            <div class="text-muted text-center mb-3">
                                <small>{{file.blob.name}}</small>
                            </div>
                        </template>

                        <template>
                            <form role="form">
                                <base-input alternative
                                            type="text"
                                            placeholder="العنوان"
                                            v-model="file.title"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>

                                <base-input alternative
                                            type="text"
                                            placeholder="الفئة"
                                            v-model="file.category"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>

                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// import xmlToJSON from 'src/assets/xml2json'

import Axios from 'axios'

export default {
	data() {
		return {
			files: []
		}
	},
	methods: {
		upload(event) {
			this.files = []
			for (let file of event.target.files) {
				try {
					let reader = new FileReader()
					reader.readAsDataURL(file) // Not sure if this will work in this context.
					reader.onload = () => {
						this.files.push({
							blob: file,
							preview: reader.result,
							title: '',
							category: ''
						})
					}
				} catch(e) {
					console.error()
				}
			}
		},
		send() {
			Axios.post('http://localhost:3000/upload', this.files).then(x => {
				console.log(x)
			})
			console.log(this.files)

		}
	}
}
</script>
<style>
</style>
