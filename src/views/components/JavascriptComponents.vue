<template>
    <section class="">
        <div class="container text-right">

            <div style="direction: rtl">
                <div v-for="image of images" :key="image" class="imageCard">
                    <small class="d-block text-uppercase font-weight-bold mb-4"> </small>
                    <img v-lazy="image" alt="Raised image"
                         class="img-fluid rounded shadow-lg">
                </div>
            </div>

            <br>
            <br>
            <br>
        </div>
    </section>
</template>
<script>
import Axios from 'axios'
import xmlToJSON from '../../assets/xml2json'

export default {
	created() {
		const baseUrl = 'https://my-storage.ams3.digitaloceanspaces.com/'

		/* eslint-disable no-console */
		console.log(Axios)
		Axios.get('https://my-storage.ams3.digitaloceanspaces.com/').then(x => {
			let images = xmlToJSON.parseString(x.data).ListBucketResult[0].Contents
			images.shift()
			images.sort(function(x, y) {
				return new Date(y.LastModified[0]._text).getTime() - new Date(x.LastModified[0]._text).getTime()
			})
			images = images.map(c => c.Key[0]._text.includes('memes') ? baseUrl + c.Key[0]._text : false)
			images= images.filter(c => c)
			this.images = images
		})

		// .then(images => {
		// 	const imagesPromises = []
		// 	images.forEach(image => imagesPromises.push(axi.get(image)))
		// 	Promise.all(imagesPromises).then(responses => {
		// 		// console.log(responses.map(c=>Object.keys(c.headers)))
		// 		console.log(responses)
		// 	})
		// })
	},
	data() {
		return {
			images: []
		}
	}
}
</script>
<style>
    .imageCard {
        margin: 10px 10px;
        width: calc(50% - 20px);
        display: inline-block;
    }

    @media (min-width: 768px) {
        .imageCard {
            margin: 25px 10px;
            width: calc(33% - 20px);
            display: inline-block;
        }
    }

</style>
