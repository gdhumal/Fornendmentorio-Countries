<template>
  <div>
    <v-container default>
      <v-row  class="pa-3">
        <v-col>
          <v-text-field
            v-model="search"
            @click:clear="search = ''"
            placeholder="Search for a country..."
            style="max-width:350px"
            prepend-inner-icon="mdi-magnify"
            clearable
            outlined
            dense
            hide-details
          />
        </v-col>
        <v-spacer />
        <v-col class="d-flex" cols="2">
          <v-select
            class="font-weight-regular"
            @change="loadRegion"
            :items="regions"
            name="regions"
            label="Filter By Region"
            v-model="selectedRegion"
            solo
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="justify-space-around">
        <v-card
          v-for="country in searchCountries"
          :key="country.name"
          width="250"
          class="ma-5"
        >
          <v-img
            class="white--text align-end"
            height="180px"
            :src="country.flag"
          />

          <v-card-title @click="$router.push(`/country/${country.name}`)">
            {{ country.name }}
          </v-card-title>

          <v-card-text class="text--primary">
            <div><strong>Population:</strong> {{ country.population }}</div>

            <div><strong>Region:</strong> {{ country.region }}</div>

            <div><strong>Captial:</strong> {{ country.capital }}</div>
          </v-card-text>

          <!-- <v-card-actions>
          <v-btn
            @click="$router.push(`/country/${country.name}`)"
            color="orange"
            text
          >
            More Info
          </v-btn>
        </v-card-actions> -->
        </v-card>
      </v-row>
    </v-container>
    <!-- <div class="card-deck">
      <div class="card" v-for="country in searchCountries" :key="country.name">
        <img
          class="card-img-top"
          style="width:150px"
          :src="country.flag"
          alt="Card image cap"
        />
        <div class="card-body">
            <h5 class="card-text">
            <router-link
              :to="{ name: 'Country', params: { name: country.name } }"
              >{{ country.name }}</router-link
            >
          </h5> 
          <router-link
            :to="{ name: 'country', params: { name: country.name } }"
          >
            {{ country.name }}</router-link
          >
          <h5 class="card-text">{{ country.region }}</h5>
          <h5 class="card-text">{{ country.capital }}</h5>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import DataService from "../Service/DataService";

export default {
  name: "home",
  components: {},
  data() {
    return {
      // eslint-disable-next-line no-unused-labels
      selectedRegion: "Filter By Region",
      regions: [
        "Filter By Region",
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
      ],
      countries: [],
      search: "",
    };
  },
  methods: {
    async loadCountries() {
      let data = await DataService.getResponse("all");
      this.countries = data;
    },
    async loadRegion(q) {
      // const q = e.target.value;
      if (q.toLowerCase() === "filter by region") this.loadCountries();

      let data = await DataService.getResponse(`region/${q}`);
      this.countries = data;
    },
  },
  mounted() {
    this.loadCountries();
  },
  computed: {
    searchCountries() {
      return this.countries.filter((d) =>
        d.name.toLowerCase().includes(this.search.trim().toLowerCase())
      );
    },
  },
};
</script>

<style>
.full-height .flex {
  display: flex;
}
.full-height .flex > .card {
  flex: 1 1 auto;
}
.card-deck .card {
  max-width: calc(25% - 30px);
}

.nav {
  background: #ffffff;
  height: 80px;
  width: 100%;
}

.toggle input[type="checkbox"] {
  display: none;
}

.toggle label {
  background-color: #777;
  border: 2px solid #555;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all ease-in-out 0.3s;
  width: 100px;
  height: 50px;
}

.toggle label::after {
  background-color: #555;
  border-radius: 50%;
  content: " ";
  cursor: pointer;
  display: inline-block;
  position: absolute;
  left: 2px;
  top: 2px;
  transition: all ease-in-out 0.3s;
  width: 42px;
  height: 42px;
}

.toggle input[type="checkbox"]:checked ~ label {
  background-color: #00a0fc;
  border-color: #006dc9;
}

.toggle input[type="checkbox"]:checked ~ label::after {
  background-color: #0054b0;
  transform: translateX(50px);
}
</style>
