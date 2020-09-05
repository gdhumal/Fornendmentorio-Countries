<template>
  <v-container>
    <v-row>
      <v-btn class="ma-2" color="default" @click="$router.go(-1)" depressed>
        <v-icon left>mdi-arrow-left</v-icon>Back
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <img
          class="card-img-top"
          style="width:550px"
          :src="country[0].flag"
          alt="Country Flag"
        />
      </v-col>
      <v-col class="">
        <v-row class="">
          <strong>{{ country[0].name }}</strong>
        </v-row>
        <v-row>
          <v-col>
            <strong>Native Name: </strong>{{ country[0].nativeName }}
          </v-col>
          <v-col>
            <strong>Top Level Domain: </strong
            >{{ country[0].topLevelDomain[0] }}
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <strong>Population: </strong>{{ country[0].population }}
          </v-col>
          <v-col>
            <strong>Currencies: </strong>
            <span v-for="c in country[0].currencies" :key="c.name">
              {{ c.name }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <strong>Region: {{ country[0].region }}</strong>
          </v-col>
          <v-col>
            <strong>languages: </strong>
            <span
              v-for="(lang, index) in country[0].languages"
              :key="lang.name"
            >
              <span v-if="index != '0'">, </span>
              {{ lang.name }}</span
            >
          </v-col>
        </v-row>
        <v-row> <strong>Sub Region: </strong>{{ country[0].subregion }} </v-row>
        <v-row> <strong>Capital: </strong>{{ country[0].capital }} </v-row>
        <v-row class="mt-15">
          <strong>Border Countries: </strong>
          <div v-for="(border, index) in country[0].borders" :key="index">
             <v-btn class="mx-2" depressed small :ripple="false">{{ border }}</v-btn>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataService from "../Service/DataService";
import Router from "../router";
export default {
  name: "Country",
  data() {
    return {
      country: {},
    };
  },
  props: {
    name: String,
  },
  methods: {
    async loadCountry() {
      let countryName = this.$route.params.name;

      if (!countryName) return Router.push("/");

      let data = await DataService.getResponse(
        `name/${countryName}?fullText=true`
      );

      console.log(typeof data);

      this.country = data;
      // this.country = data;
    },
  },
  created() {
    this.loadCountry();
  },
};
</script>

<style></style>
