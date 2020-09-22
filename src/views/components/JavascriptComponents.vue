<template>
    <section class="">
        <div class="container text-right">

            <!-- Images -->
            <h2 class="">
                <span>يشتعل حاليًا 🔥</span>
            </h2>

            <div>
                <div v-for="i of 10" :key="i" class="imageCard">
                    <small class="d-block text-uppercase font-weight-bold mb-4">Raised</small>
                    <img v-lazy="'img/theme/team-1-800x800.jpg'" alt="Raised image"
                         class="img-fluid rounded shadow-lg card-lift--hover">
                </div>
            </div>


        </div>
    </section>
</template>
<script>
    import Tabs from "@/components/Tabs/Tabs.vue";
    import TabPane from "@/components/Tabs/TabPane.vue";
    import Modals from "./JavascriptComponents/Modals";

    const Tooltips = () => import("./JavascriptComponents/Tooltips");
    const DatePickers = () => import("./JavascriptComponents/DatePickers");
    import Images from "./JavascriptComponents/Images";
    import TabsSection from "./JavascriptComponents/TabsSection";
    import ProgressSection from "./JavascriptComponents/ProgressPagination";
    import Typography from "./JavascriptComponents/Typography";

    export default {
        components: {
            DatePickers,
            Images,
            Modals,
            TabPane,
            Tabs,
            TabsSection,
            ProgressSection,
            Typography,
            Tooltips
        }
    };
</script>
<style>
    .imageCard {
        margin: 50px 10px;
        width: calc(50% - 20px);
        display: inline-block;
    }
    @media(min-width: 768px) {
        .imageCard {
            margin: 50px 10px;
            width: calc(33% - 20px);
            display: inline-block;
        }
    }

</style>
