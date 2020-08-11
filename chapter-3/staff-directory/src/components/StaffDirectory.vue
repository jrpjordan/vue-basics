<template>
  <div class="ui container">
    <input v-model="filterBy" placeHolder="Filter By Last Name"/>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th @click="sortBy = 'firstName'">First Name</th>
            <th @click="sortBy = 'lastName'">Last Name</th>
            <th @click="sortBy = 'email'">Email</th>
            <th @click="sortBy = 'phone'">Phone</th>
            <th @click="sortBy = 'department'">Department</th>
          </tr> 
        </thead>
        <tbody>
          <tr v-for="(employee, index) in sortedEmployees" :key="index">
            <td>
              <img :src="employee.photoUrl" class="ui mini rounded image" />
            </td>
            <td>{{ employee.firstName }}</td>
            <td>{{ employee.lastName }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
            <td>{{ employee.department }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="6">{{ sortedEmployees.length }} employees</th>
          </tr>
        </tfoot>
      </table>
  </div>
</template>

<script>
export default {
  name: 'StaffDirectory',
  //props: ['src'], props declare a set of properties that will be passed to our component, they will be available with this, like any other...
  //Better way to pass properties and make custom or simple validation is the following...
  props: {
    myString: String,
    myNumber: Number,
    myBoolean: Boolean,
    myArray: Array,
    myObject: Object,
    isAdminUser: {
      type: Boolean,
      required: true,
    },
    user: {
      validate(user) {
        return ['admin', 'editor', 'author'].includes(user.role);
      }
    }
  },
  data() {
    return {
      filterBy: "",
      sortBy: 'department',
      employees: [
         {
          "firstName": "amelia",
          "lastName": "austin",
          "photoUrl": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
          "email": "amelia.austin@example.com",
          "phone": "(651)-507-3705",
          "department": "Engineering"
        },
        {
          "firstName": "bobbie",
          "lastName": "murphy",
          "photoUrl": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
          "email": "bobbie.murphy@example.com",
          "phone": "(925)-667-7604",
          "department": "Management"
        },
        {
          "firstName": "kristin",
          "lastName": "terry",
          "photoUrl": "https://randomuser.me/api/portraits/thumb/women/45.jpg",
          "email": "kristin.terry@example.com",
          "phone": "(021)-544-1184",
          "department": "Sales"
        },
        {
          "firstName": "brandon",
          "lastName": "griffin",
          "photoUrl": "https://randomuser.me/api/portraits/thumb/men/59.jpg",
          "email": "brandon.griffin@example.com",
          "phone": "(509)-317-9506",
          "department": "Management"
        },
        {
          "firstName": "tammy",
          "lastName": "gibson",
          "photoUrl": "https://randomuser.me/api/portraits/thumb/women/72.jpg",
          "email": "tammy.gibson@example.com",
          "phone": "(815)-727-0663",
          "department": "Support"
        },
      ]
    }
  },
  
  /* --------- Lifecycle methods ------------------------
  created() { //As soon the component is created, created() method will be fired
    fetch('https://randomuser.me/api/?nat=us,dk,fr,gb&results=5')
      .then(response => response.json())
      .then(json => this.employees = json.results);
  },
   ---------------------------------------------------- */
  computed: {
    sortedEmployees() {
      return this.employees.filter(
        employee => employee.lastName.includes(this.filterBy)
      ).sort(
        (a, b) => a[this.sortBy].localeCompare(b[this.sortBy])
      );
    }
  }
}
</script>

<style>
  h1.ui.center.header {
    margin-top: 3em;
  }

  .ui.table th:not(:first-child):hover {
    cursor: pointer;
  }

  input {
    padding: 3px;
  }


</style>