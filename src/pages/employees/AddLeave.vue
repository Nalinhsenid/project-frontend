<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <section>
    <b-container class="bv-example-row my-5">
      <b-row class="justify-content-center mt-3">
        <b-col col lg="2">
          <b-button pill variant="outline-danger"
          >
            <router-link to="/leavehistory" class="text-decoration-none"
            >Leave History
            </router-link
            >
          </b-button
          >
        </b-col>
        <b-col col lg="2"
        >
          <b-button pill variant="outline-danger"
          >
            <router-link to="/leavebalance" class="text-decoration-none"
            >Leave Balance
            </router-link
            >
          </b-button>
        </b-col
        >
        <b-col col lg="2"
        >
          <b-button pill variant="outline-danger"
          >
            <router-link to="/addleave" class="text-decoration-none"
            >Request a leave
            </router-link
            >
          </b-button>
        </b-col
        >
      </b-row>
    </b-container>
  </section>
  <section>
    <div class="h2 text-center  mb-5">Request a Leave</div>

    <div class="container w-50  card p-3 align-items-center">
      <b-form>
        <b-form-group>
          <label for="input-live" class="pb-2">Employee Id:</label>
          <b-form-input
              id="input-live"
              v-model="employeeId"
              :state="employeeIdState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter employee id"
              trim
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <div>
            <label for="example-datepicker">Choose a date</label>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
<!--            <p>Value: '{{ value }}'</p>-->
          </div>
        </b-form-group>
        <b-form-group id="input-group-3" label="Leave Type :" label-for="input-3 "
                      class="d-flex align-items-center gap-3">
          <b-form-select
              id="input-3"
              v-model="leave"
              :options="leaves"
              required
          ></b-form-select>
        </b-form-group>
        <b-form-group label="Leave Duration : " v-slot="{ ariaDescribedby }" class="align-items-center">
          <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="radio-inline" value="A" class="" >Full Day
          </b-form-radio>
          <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="radio-inline" value="B" class="" >Half Day
          </b-form-radio>
        </b-form-group>
<!--        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
        <b-button type="submit" variant="primary" class="mx-3">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";


export default {
  components: {
    TheHeader
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)

    return {
      pageTopic: 'hSenid LMS',
      value: '',
      min: minDate,
      max: maxDate,
      leaves: [{text: 'Select One', value: null}, 'Annual Leave', 'Casual Leave', 'Sick Leave'],
      show: true,
      leave: null,
      selected: '',
      value2: '',
      context: null

    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    }
  }


};
</script>
<style>
</style>