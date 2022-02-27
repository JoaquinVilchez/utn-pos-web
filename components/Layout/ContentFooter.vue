<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            href="https://github.com/JoaquinVilchez/utn-pos-web"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            GITHUB WEB
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/JoaquinVilchez/utn-pos-api"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            GITHUB API
          </a>
        </li>
      </ul>
      <div class="copyright">
        Gerardo Caciorgna, Giovanni Martin, Joaquin Vilchez
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
