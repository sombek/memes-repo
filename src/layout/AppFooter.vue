<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6 text-lg-center btn-wrapper">


                    <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
                       class="btn btn-neutral btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        حسابي في تويتر
                        <i class="fa fa-twitter"></i>
                    </a>

                </div>

                <div class="col-lg-6 text-right">
                    <h3 class="text-primary mb-2" style="font-weight: 400;">
                        شكرًا لإستخدامكم مخزن الميمز العربي
                    </h3>
                    <h4 class="mb-0 font-weight-light">
                        لإضافة الميمز الخاصة بكم يرجى مشاركتها على حسابي في تويتر 📨
                    </h4>
                </div>

            </div>


            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">

                        :تم إستخدام قوالب جاهزة لإعداد الصفحة مجهزة من قبل
                        <br>
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Creative Tim</a> & <a href="https://www.binarcode.com" target="_blank" rel="noopener">Binar Code</a>
                        &copy; {{year}}
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Creative Tim</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
