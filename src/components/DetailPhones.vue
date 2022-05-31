<template>
  <div class="col container pl-0 mt-3">
    <div class="row p-0 text-left">
      <div class="col">
        <span class="text-primary" @click="backHome()" style="cursor: pointer;">
          List Product
        </span>
        <span class="text-muted" v-if="Object.keys(detailData).length > 0">
         &nbsp; > &nbsp; {{ detailData.attributes.name }}
        </span>
      </div>
    </div>

    <div class="row justify-content-between p-3" v-if="Object.keys(detailData).length > 0">
      <div class="col-12 col-lg-6 mr-1 mb-3 p-5 position-relative">
        <div class="badges">
          <img
            v-if="detailData.attributes.isNew == 1"
            src="../assets/images/Group 3037.png"
          />
          <img
            v-else-if="
              detailData.attributes.rating >= 4 &&
              detailData.attributes.numOfReviews > 25
            "
            src="../assets/images/Group 3030.png"
          />
          <img
            v-else-if="
              detailData.attributes.isNew === 1 &&
              detailData.attributes.rating >= 4 &&
              detailData.attributes.numOfReviews > 25
            "
            src="../assets/images/Group 3036.png"
          />
        </div>

          <div class="row mt-3 p-3">
            <img
              class="col responsive-image"
              :src="detailData.attributes.images[0]"
            />
          </div>
      </div>
      <div class="col-12 col-lg-5 text-center text-lg-left">
        <div class="row">
          <div class="col p-0 text-card-2">
            {{ detailData.attributes.name }}
          </div>
        </div>

        <div class="row justify-content-center reviews-section">
          <div class="col-12 p-0">
            <span
              class="stars"
              v-if="detailData.attributes.rating == 0"
            >
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 1 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating > 0 && 
                          detailData.attributes.rating < 1.5">
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 1.5 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating > 1.5 && 
                          detailData.attributes.rating < 2">
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star-half fa-xs star-enable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 2 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating >= 2 && 
                          detailData.attributes.rating < 2.5">
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 2.5 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating >= 2.5 && 
                          detailData.attributes.rating < 3">
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star-half fa-xs star-enable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 3 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating >= 3 && 
                          detailData.attributes.rating < 3.5">
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 3.5 -->
            <span
              class="stars"
              v-else-if="
                detailData.attributes.rating >= 3.5 &&
                detailData.attributes.rating < 4
              "
            >
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star-half fa-xs star-enable ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 4 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating >= 4 && 
                          detailData.attributes.rating <= 4.5">
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star fa-xs star-disable ml-1"></i>
            </span>
            <!-- bintang 4.5 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating >= 4.5 && 
                          detailData.attributes.rating < 5">
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star-half fa-xs star-enable ml-1"></i>
            </span>
            <!-- bintang 5 -->
            <span
              class="stars"
              v-else-if="detailData.attributes.rating > 4.5 && detailData.attributes.rating == 5"
            >
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
              <i class="fas fa-star star-enable fa-xs ml-1"></i>
            </span>
            <span class="text-btn">
              {{ detailData.attributes.numOfReviews }} reviews
            </span>
          </div>
        </div>

        <div class="row text-lg-left justify-content-center justify-content-lg-start justify-content-md-start">
          <div class="col-12 col-lg-7 text-poins-2 pl-0 pr-0">
            <img src="../assets/images/point give detail.png" />
            &nbsp;{{ detailData.attributes.points
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }} poins
          </div>
          <div class="col-11 col-lg-3 p-0 align-self-center">
            <div
              class="text-success-2"
              v-if="detailData.attributes.stock > 5"
            >
              In Stock
            </div>
            <div
              class="text-danger-2"
              v-else-if="detailData.attributes.stock < 5"
            >
              Stock < 5
            </div>
            <div
              class="text-danger-2"
              v-else-if="detailData.attributes.stock === 0"
            >
              Sold Out
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-3 mb-3">
          <div class="col p-0 text-spec" v-html="detailData.attributes.info"></div>
        </div>

        <div class="row text-center justify-content-center justify-content-lg-center">
          <div class="col-12 p-0 mb-2 text-lg-left" style="color: #838EAB; font-size: 14px;">
            Jumlah
          </div>
          <div class="col-1 btn-tambah-kurang p-0 pt-1 pb-1" @click="jumlah -= 1" v-if="jumlah > 0">
            -
          </div>
          <div class="col-1 btn-tambah-kurang p-0 pt-1 pb-1" style="pointer-events: none;" v-else>
            -
          </div>
          <div class="col-1 p-0">
            {{ jumlah }}
          </div>
          <div class="col-1 btn-tambah-kurang p-0 pt-1 pb-1" @click="jumlah += 1">
            +
          </div>
        </div>

          <div class="row mt-4">
            <div class="col-lg-10 col-12">
              <div class="row justify-content-between">
                <div class="love-section col-3 col-md-3 col-lg-3 align-self-center">
                  <img
                    v-if="detailData.attributes.isWishlist !== 0"
                    class="mx-auto"
                    src="../assets/images/Group 2991.png"
                  />
                  <img
                    v-else
                    class="mx-auto"
                    src="../assets/images/Group 3038.png"
                  />
                </div>
  
                <div class="col-4 p-2 rounded-pill btn-redeem align-self-center">
                    Redeem
                </div> 
  
                <div class="col-4 p-2 rounded-pill btn-addcart align-self-center">
                  Add to cart
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="row justify-content-center mt-2 text-left" v-if="Object.keys(detailData).length > 0">
        <div class="col-10 p-0">
          <div class="row justify-content-start border-bottom">
            <div class="col-8 col-lg-3 p-0 pb-3 border-info">
              Info Produk
            </div>
          </div>
          <div class="row mt-3">
            <div class="col p-0">
              <div class="d-block mt-3 mb-3 fw-bolder" style="color: #006A4E; font-size: 24px; font-weight: 600;">
                Rincian
              </div>
              <div class="mt-3" v-html="detailData.attributes.description">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
  
  export default {
    props: ["idProduct"],
    data() {
      return {
        detailAPI: `https://recruitment.dev.rollingglory.com/api/v2/gifts/${this.idProduct}`,
        detailData: {},
        jumlah: 0
      }
    },
    created(){
      this.getSingleProduct()
    },
    methods: {
      getSingleProduct(){
        
        axios
        .get(this.detailAPI)
        .then((res) => {
          // this.loading = false;
          let DATA = res.data.data;
          console.log("INI data-NYA => ", DATA);
          this.detailData = DATA;
        })
        .catch((e) => {
          const err = e;
          console.log("ini error nya ", err);
        });
      },
      backHome() {
        this.$emit("back")
      }
    }
  }
</script>