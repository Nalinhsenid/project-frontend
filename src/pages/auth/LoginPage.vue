<template>
    <header>
        <nav>
            <h1><router-link to="/">hSenid LMS</router-link> </h1>
        </nav>
    </header>
  <div class="card">
    <h1 class="card__title">Login</h1>

    <div class="form-row">
      <input
        v-model="email"
        class="form-row__input"
        type="email"
        placeholder="Email"
      />
    </div>

    <div class="form-row">
      <input class="form-row__input" type="password" placeholder="password" />
    </div>

    <!-- <div class="form-row error">Invalid email address and/or password</div> -->
    <!-- <div class="form-row error">Email address already in use</div> -->

    <div class="form-row">
      <button class="button">
        <!-- <span >Connection in progress...</span> -->
        <span >Login</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-row {
  display: flex;
  margin: 16px 0px;
  gap:16px;
  flex-wrap: wrap;
}

.form-row__input {
  padding:8px;
  border: none;
  border-radius: 8px;
  background:#f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex:1;
  min-width: 100px;
  color: black;
}

.form-row__input::placeholder {
  color:#aaaaaa;
}

.error{
  color: red;
}

.card {
  /* position: relative;
  left: 50%;
  bottom: 50%; */
  /* transform: translate(0%, 50%); */
  margin: 32px auto;
  max-width: 100%;
  width: 400px;
  background:white;
  border-radius: 16px;
  padding:32px;
}

.card__title {
  text-align:center;
  font-weight: 800;
}

.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
}

.button {
  background: #2196F3;
  color:white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: .4s background-color;
}

.card__action {
  color:#2196F3;
  text-decoration: underline;
}

.card__action:hover {
  cursor:pointer;
}

.button:hover {
  cursor:pointer;
  background: #1976D2;
}

.button--disabled {
  background:#cecece;
  color:#ececec
}
.button--disabled:hover {
  cursor:not-allowed;
  background:#cecece;
}
</style>