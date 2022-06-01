<template>
  <div class="home row">
      <h3>Učini pametnu stvar i udomi neku kucu, macu ili ptičicu!</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit molestie tortor, a volutpat nibh consequat eu. Nullam gravida, velit id fringilla malesuada, ipsum odio sollicitudin metus, in finibus nibh turpis ac nibh. Donec congue sagittis justo, eget sodales sapien euismod et. Proin leo massa, iaculis id ultricies non, vehicula elementum dui. 
      </p>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/dog.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/images/cat.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/images/bird.png" class="d-block w-100" alt="...">
          </div>
        </div>
      <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
  </div>
</template>

<style scoped>
  .home {
    padding: 30px;
    margin: 30px;
    background-color: #FFDDD2;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .home p {
    text-align: left;
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
