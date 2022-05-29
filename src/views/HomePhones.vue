<template>
  <div name="homephones" class="col" style="height: 250vh">
    <!-- <div> -->
    <div class="container-fluid pt-3">
      <div class="row justify-content-center pl-0 mb-4">
        <div class="col p-0 text-left">
          <img
            alt="PhoneSell logo"
            src="../assets/images/logops.png"
            height="70"
          />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-11">
          <div class="row justify-content-around">
            <div
              class="col-2 text-left border-bottom title-section p-0 pt-2 pb-3"
            >
              Filter
            </div>
            <div class="col-9 text-left border-bottom title-section p-0 pb-3">
              <div class="row justify-content-between align-items-center">
                <div class="col-3">Product List</div>
                <div class="col-4">
                  <div class="row text-btn align-items-center gap-2">
                    <div class="col-4">Urutkan</div>
                    <div class="col p-2 border rounded-pill text-center mr-3">
                      Terbaru &nbsp;
                      <img src="../assets/images/Polygon 1.png" height="8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-around mt-3 text-left">
            <div
              class="col-2 pl-4 pr-4 pt-3 pb-3 border rounded text-filter"
              style="height: 110px"
            >
              <div class="row d-flex justify-content-between mb-4">
                Rating 4 ke atas

                <b-form-checkbox
                  v-model="selected"
                  value="inRating"
                ></b-form-checkbox>
              </div>

              <div class="row d-flex justify-content-between mt-3">
                Stock Tersedia

                <b-form-checkbox
                  v-model="selected"
                  value="inStock"
                ></b-form-checkbox>
              </div>
            </div>
            <div class="col-9">
              <div
                v-if="loading == true"
                class="row justify-content-center text-center"
                style="height: 50vh"
              >
                <div class="col align-self-center">
                  <div class="spinner-border spinner-border-sm"></div>
                  &nbsp; Data sedang dimuat..
                </div>
              </div>

              <div
                v-if="phonesData.length > 0 && loading === false"
                class="row justify-content-between"
              >
                <!-- Card -->
                <div
                  class="col-3 mr-1 mb-3 card-product"
                  v-for="product in phonesData"
                  :key="product.index"
                >
                  <div class="badges">
                    <img
                      v-if="product.attributes.isNew == 1"
                      src="../assets/images/Group 3037.png"
                    />
                    <img
                      v-else-if="
                        product.attributes.rating >= 4 &&
                        product.attributes.numOfReviews > 25
                      "
                      src="../assets/images/Group 3030.png"
                    />
                    <img
                      v-else-if="
                        product.attributes.isNew === 1 &&
                        product.attributes.rating >= 4 &&
                        product.attributes.numOfReviews > 25
                      "
                      src="../assets/images/Group 3036.png"
                    />
                  </div>

                  <div
                    class="row p-4 text-success"
                    v-if="product.attributes.stock > 5"
                  >
                    In Stock
                  </div>
                  <div
                    class="row p-4 text-danger"
                    v-else-if="product.attributes.stock < 5"
                  >
                    Stock < 5
                  </div>
                  <div
                    class="row p-4 text-danger"
                    v-else-if="product.attributes.stock === 0"
                  >
                    Sold Out
                  </div>
                  <div class="row mt-3 p-2">
                    <img
                      class="col"
                      :src="product.attributes.images[0]"
                      height="170"
                    />
                  </div>
                  <div class="row">
                    <div class="col text-card">
                      {{ product.attributes.name }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-poins">
                      <img src="../assets/images/Group 2752.png" />
                      &nbsp;{{ product.attributes.points }} poins
                    </div>
                  </div>
                  <div class="row justify-content-center reviews-section">
                    <div class="col-11 p-0">
                      <span
                        class="stars"
                        v-if="product.attributes.rating < 3.5"
                      >
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star fa-xs star-disable ml-1"></i>
                        <i class="fas fa-star fa-xs star-disable ml-1"></i>
                      </span>
                      <span
                        class="stars"
                        v-else-if="
                          product.attributes.rating >= 3.5 &&
                          product.attributes.rating < 3.9
                        "
                      >
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star-half fa-xs star-enable ml-1"></i>
                        <i class="fas fa-star fa-xs star-disable ml-1"></i>
                        <i class="fas fa-star fa-xs star-disable ml-1"></i>
                      </span>
                      <span
                        class="stars"
                        v-else-if="product.attributes.rating >= 3.9"
                      >
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star star-enable fa-xs ml-1"></i>
                        <i class="fas fa-star fa-xs star-disable ml-1"></i>
                        <i class="fas fa-star fa-xs star-disable ml-1"></i>
                      </span>
                      <span class="text-btn">
                        {{ product.attributes.numOfReviews }} reviews
                      </span>
                    </div>
                  </div>
                  <div class="row love-section mt-2 justify-content-end">
                    <div class="col-4 p-0">
                      <img
                        v-if="product.attributes.isWishlist !== 0"
                        class="mx-auto"
                        src="../assets/images/Group 2991.png"
                      />
                      <img
                        v-else
                        class="mx-auto"
                        src="../assets/images/Group 3038.png"
                      />
                    </div>
                  </div>

                  <!-- Layer -->
                  <div class="middle container">
                    <div
                      class="row p-4 text-hover mb-3"
                      v-if="product.attributes.stock > 5"
                    >
                      In Stock
                    </div>
                    <div
                      class="row p-4 text-hover mb-3"
                      v-else-if="product.attributes.stock < 5"
                    >
                      Stock < 5
                    </div>
                    <div class="row justify-content-center">
                      <div
                        class="col-10 text-card-hover mt-4 mb-2 p-0 pt-5 pb-5"
                      >
                        {{ product.attributes.name }}
                      </div>
                    </div>
                    <div class="row justify-content-center mb-5 mt-2">
                      <div class="col-11 p-0">
                        <img src="../assets/images/Group 3003.png" />
                      </div>
                    </div>
                    <div class="row justify-content-end text-start mt-5">
                      <div class="col-5">
                        <img
                          v-if="product.attributes.isWishlist !== 0"
                          class="mx-auto"
                          src="../assets/images/Group 2991.png"
                        />
                        <img
                          v-else
                          class="mx-auto"
                          src="../assets/images/Group 3038.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      defaultAPI: `https://recruitment.dev.rollingglory.com/api/v2/gifts?page[number]=1&page[size]=9`,
      loading: false,
      phonesData: {},
      selected: [],
    };
  },
  created() {
    this.getListPhones();
  },
  watch: {
    selected: function () {
      if (this.selected.length > 0) {
        this.getListPhones();
      } else {
        this.getListPhones();
      }
    },
  },
  methods: {
    getListPhones() {
      this.loading = true;

      axios
        .get(this.defaultAPI)
        .then((res) => {
          this.loading = false;

          this.phonesData = res.data.data;
          if (this.selected.length > 0) {
            const findInRating = this.selected.find(
              (item) => item === "inRating"
            );
            const findInStock = this.selected.find(
              (item) => item === "inStock"
            );
            if (findInRating) {
              let RESULT = this.phonesData.filter((items) => {
                return items.attributes.rating >= 4;
              });
              this.phonesData = RESULT;
              console.log("INI RESULT-NYA => ", RESULT);
            }
            if (findInStock) {
              // this.getListPhones();
              setTimeout(() => {
                let RESULT = this.phonesData.filter((items) => {
                  return items.attributes.stock > 5;
                });
                this.phonesData = RESULT;
                console.log("INI RESULT-NYA => ", RESULT);
              }, 100);
            }
            if (findInRating && findInStock) {
              // this.getListPhones();
              setTimeout(() => {
                let RESULT = this.phonesData.filter((items) => {
                  return (
                    items.attributes.rating >= 4 && items.attributes.stock > 0
                  );
                });
                this.phonesData = RESULT;
                console.log("INI RESULT-NYA => ", RESULT);
              }, 100);
            }
          }
          console.log("INI res-NYA => ", this.phonesData);
        })
        .catch((e) => {
          const err = e;
          console.log("ini error nya ", err);
        });
    },
    highRating() {
      this.loading = true;
      this.this.phonesData = {};

      axios
        .get(this.defaultAPI)
        .then((res) => {
          this.loading = false;
          let DATA = res.data.data;
          console.log("INI data-NYA => ", DATA);
          this.phonesData = res.data.data;

          // this.phonesData = DATA.filter((items) => {
          //   items.attributes.rating >= 4;
          // });

          console.log("INI res-NYA => ", this.phonesData);
        })
        .catch((e) => {
          const err = e;
          console.log("ini error nya ", err);
        });
    },
    inStock() {
      this.loading = true;
      this.this.phonesData = {};

      axios
        .get(this.defaultAPI)
        .then((res) => {
          this.loading = false;
          const DATA = res.data.data;
          this.phonesData = DATA.filter((items) => {
            items.attributes.stock > 0;
          });

          console.log("INI res-NYA => ", this.phonesData);
        })
        .catch((e) => {
          const err = e;
          console.log("ini error nya ", err);
        });
    },
  },
};
</script>
